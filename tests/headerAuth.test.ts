import { describe, afterAll, beforeAll, expect, test, vi } from "vitest";
import { fastify } from "fastify";
import { handle_header_auth, enhanced_fetch } from "../lib/fetcher/enhancedFetch";

import type { FastifyInstance } from "fastify";
import type { HeaderAuthConfig } from "../lib/fetcher/enhancedFetch";

describe("handle_header_auth", () => {
    const config: HeaderAuthConfig = {
        type: "header",
        header: "Authorization",
        value: "Bearer mytoken",
        host: "api.example.com",
    };

    test("sends header on matching host", async () => {
        const mockFetch = vi.fn<typeof fetch>().mockResolvedValue(new Response("ok"));
        const wrappedFetch = handle_header_auth(mockFetch, config);

        await wrappedFetch("https://api.example.com/data");

        expect(mockFetch).toHaveBeenCalledOnce();
        const [, init] = mockFetch.mock.calls[0];
        const headers = new Headers(init?.headers);
        expect(headers.get("Authorization")).toBe("Bearer mytoken");
    });

    test("does NOT send header to non-matching host", async () => {
        const mockFetch = vi.fn<typeof fetch>().mockResolvedValue(new Response("ok"));
        const wrappedFetch = handle_header_auth(mockFetch, config);

        await wrappedFetch("https://other.example.com/data");

        expect(mockFetch).toHaveBeenCalledOnce();
        const [, init] = mockFetch.mock.calls[0];
        expect(init).toBeUndefined();
    });

    test("custom header names work", async () => {
        const customConfig: HeaderAuthConfig = {
            type: "header",
            header: "X-API-Key",
            value: "secret123",
            host: "api.example.com",
        };
        const mockFetch = vi.fn<typeof fetch>().mockResolvedValue(new Response("ok"));
        const wrappedFetch = handle_header_auth(mockFetch, customConfig);

        await wrappedFetch("https://api.example.com/data");

        const [, init] = mockFetch.mock.calls[0];
        const headers = new Headers(init?.headers);
        expect(headers.get("X-API-Key")).toBe("secret123");
    });

    test("header auth is proactive (single fetch call, no 401 required)", async () => {
        const mockFetch = vi.fn<typeof fetch>().mockResolvedValue(new Response("ok", { status: 200 }));
        const wrappedFetch = handle_header_auth(mockFetch, config);

        await wrappedFetch("https://api.example.com/data");

        // Only one fetch call - header sent proactively, no 401 dance
        expect(mockFetch).toHaveBeenCalledOnce();
        const [, init] = mockFetch.mock.calls[0];
        const headers = new Headers(init?.headers);
        expect(headers.get("Authorization")).toBe("Bearer mytoken");
    });

    test("preserves existing headers on init", async () => {
        const mockFetch = vi.fn<typeof fetch>().mockResolvedValue(new Response("ok"));
        const wrappedFetch = handle_header_auth(mockFetch, config);

        await wrappedFetch("https://api.example.com/data", {
            headers: { "Content-Type": "application/json" },
        });

        const [, init] = mockFetch.mock.calls[0];
        const headers = new Headers(init?.headers);
        expect(headers.get("Authorization")).toBe("Bearer mytoken");
        expect(headers.get("Content-Type")).toBe("application/json");
    });
});

describe("enhanced_fetch dispatches header auth", () => {
    test("enhanced_fetch uses handle_header_auth for type=header", async () => {
        const mockFetch = vi.fn<typeof fetch>().mockResolvedValue(new Response("ok"));
        const wrappedFetch = enhanced_fetch(
            {
                auth: {
                    type: "header",
                    header: "Authorization",
                    value: "Bearer test",
                    host: "api.example.com",
                },
            },
            mockFetch,
        );

        await wrappedFetch("https://api.example.com/resource");

        expect(mockFetch).toHaveBeenCalled();
        const [, init] = mockFetch.mock.calls[0];
        const headers = new Headers(init?.headers);
        expect(headers.get("Authorization")).toBe("Bearer test");
    });
});

describe("header auth integration (real HTTP)", () => {
    let server: FastifyInstance;
    let port: number;
    let receivedHeaders: Record<string, string | undefined>;

    beforeAll(async () => {
        server = fastify();
        server.get("/resource", async (request, reply) => {
            receivedHeaders = {
                authorization: request.headers["authorization"],
                "x-api-key": request.headers["x-api-key"],
            };
            return reply.send("ok");
        });
        await server.listen({ port: 0 });
        const addr = server.addresses()[0];
        port = addr.port;
    });

    afterAll(async () => {
        await server.close();
    });

    test("header survives full FetchConfig chain (safe + auth + domain limiter + retry)", async () => {
        receivedHeaders = {};
        const wrappedFetch = enhanced_fetch({
            auth: {
                type: "header",
                header: "Authorization",
                value: "Bearer real-token",
                host: `localhost:${port}`,
            },
            safe: true,
            concurrent: 5,
            retry: { maxRetries: 3 },
        });

        const resp = await wrappedFetch(`http://localhost:${port}/resource`);

        expect(resp.status).toBe(200);
        expect(receivedHeaders.authorization).toBe("Bearer real-token");
    });

    test("custom header name survives full FetchConfig chain", async () => {
        receivedHeaders = {};
        const wrappedFetch = enhanced_fetch({
            auth: {
                type: "header",
                header: "X-API-Key",
                value: "my-secret",
                host: `localhost:${port}`,
            },
            safe: true,
            concurrent: 5,
            retry: { maxRetries: 3 },
        });

        const resp = await wrappedFetch(`http://localhost:${port}/resource`);

        expect(resp.status).toBe(200);
        expect(receivedHeaders["x-api-key"]).toBe("my-secret");
    });

    test("non-matching host does not leak header through full chain", async () => {
        receivedHeaders = {};
        const wrappedFetch = enhanced_fetch({
            auth: {
                type: "header",
                header: "Authorization",
                value: "Bearer should-not-appear",
                host: "other-host:9999",
            },
            safe: true,
            concurrent: 5,
            retry: { maxRetries: 3 },
        });

        const resp = await wrappedFetch(`http://localhost:${port}/resource`);

        expect(resp.status).toBe(200);
        expect(receivedHeaders.authorization).toBeUndefined();
    });
});
