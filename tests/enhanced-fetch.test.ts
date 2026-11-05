import { Readable } from "node:stream";
import { StreamParser } from "n3";
import { expect, test } from "vitest";
import { enhanced_fetch } from "../lib/client";

import type { ReadableStream as NodeReadableStream } from "node:stream/web";

test("enhanced fetch preserves UTF-8 and language tags across Turtle chunks", async () => {
    const turtle = "<http://example.org/s> <http://example.org/p> \"café\"@fr-fr .\n";
    const bytes = Buffer.from(turtle);
    const characterSplit = bytes.indexOf("é") + 1;
    const languageSplit = bytes.indexOf("@fr-fr") + "@fr".length;
    const body = new ReadableStream<Uint8Array>({
        start(controller) {
            controller.enqueue(bytes.subarray(0, characterSplit));
            controller.enqueue(bytes.subarray(characterSplit, languageSplit));
            controller.enqueue(bytes.subarray(languageSplit));
            controller.close();
        },
    });
    const fetchTurtle = enhanced_fetch({}, async () => new Response(body, {
        headers: { "content-type": "text/turtle" },
    }));

    const response = await fetchTurtle("https://example.org/");
    const parser = new StreamParser({ format: "text/turtle" });
    const values: Array<{ value: string; language: string }> = [];
    for await (const { object } of Readable.fromWeb(response.body as NodeReadableStream<Uint8Array>).pipe(parser)) {
        values.push({ value: object.value, language: object.language });
    }

    expect(values).toEqual([{ value: "café", language: "fr-fr" }]);
});
