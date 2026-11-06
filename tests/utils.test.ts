import { describe, expect, test } from "vitest";
import { DataFactory } from "n3";
import { deserializeMember, readableToArray, serializeMember } from "../lib/utils";

describe("readableToArray", () => {
    test("collects all chunks of a stream", async () => {
        const stream = new ReadableStream<number>({
            start(controller) {
                [1, 2, 3].forEach((n) => controller.enqueue(n));
                controller.close();
            },
        });
        expect(await readableToArray(stream)).toEqual([1, 2, 3]);
    });

    test("gives an empty array for an empty stream", async () => {
        const stream = new ReadableStream<number>({
            start: (controller) => controller.close(),
        });
        expect(await readableToArray(stream)).toEqual([]);
    });

    test("rejects when the stream fails", async () => {
        const stream = new ReadableStream<number>({
            start(controller) {
                controller.enqueue(1);
                controller.error(new Error("broken stream"));
            },
        });
        await expect(readableToArray(stream)).rejects.toThrow("broken stream");
    });
});

describe("saved member ordering values", () => {
    test.each(["", "01", "2026-01-01", "numeric:1"])("retains the fork's saved sequence %j", (sequence) => {
        const member = deserializeMember({
            id: "https://example.org/member",
            quads: "",
            timestamp: "2026-01-01T00:00:00.000Z",
            sequence,
        });
        expect(member.timestamp).toEqual(new Date("2026-01-01T00:00:00.000Z"));
        expect(member.sequence).toBe(sequence);
    });

    test("round-trips strings, dates and exact decimal ordering values", () => {
        const member = {
            id: DataFactory.namedNode("https://example.org/member"),
            quads: [],
            order: { type: "numeric" as const, value: "9007199254740993" },
            timestamp: new Date("2026-01-01T00:00:00.000Z"),
            sequence: "2026-01-01",
        };
        const restored = deserializeMember(JSON.parse(JSON.stringify(serializeMember(member))));
        expect(restored.id.equals(member.id)).toBe(true);
        expect(restored.order).toEqual(member.order);
        expect(restored.timestamp).toEqual(member.timestamp);
        expect(restored.sequence).toBe(member.sequence);
    });
});
