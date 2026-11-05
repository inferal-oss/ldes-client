# Changelog

This changelog tracks notable changes in the Inferal fork of ldes-client,
starting from its [upstream 0.3.1 baseline][0.3.1]. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Added

- **Upstream:** RDF-Connect pipelines accept IRIs for the stream URL and for
  shape, state, and condition file locations. Relative file IRIs resolve
  against the pipeline. ([upstream #154])

### Changed

- **Upstream:** The RDF-Connect processor schema separates code identifiers from
  display labels and supplies descriptions, allowed values, and defaults.
  The sync was tested with RDF-Connect JS runner 3.4.0. Runner 3.0.2 cannot
  load the updated processor configuration. ([upstream sync], [upstream #154])
- **Upstream:** The default polling interval increases from 200 ms to 1,000 ms.
  Set `pollInterval`, `--poll-interval`, or the pipeline’s `rdfc:interval`
  to 200 ms to keep the previous cadence.
  ([upstream #154])
- **Upstream:** Updated the RDF parser to N3 2, the dereferencer to
  `rdf-dereference` 5, and the SHACL lens library to `rdf-lens` 2. Also
  updated the shape extractor, RDF store, and CLI dependencies. The locked
  runtime dependencies require Node.js 22.19.0 or newer. The sync was tested
  on Node.js 24. ([upstream sync])
- **Upstream:** Updated the build, lint, and browser test tooling, including
  TypeScript 6 and package export resolution. The performance test workflow
  now uses Node.js 24. ([upstream sync], [upstream #157])

### Fixed

- **Upstream:** Cancel LDES fetching when the downstream RDF-Connect writer
  cancels. ([upstream sync])
- **Upstream:** Restore the package-level TypeScript export of `Ordered` and
  declare the missing namespaces in the bundled TREE node shape.
  ([upstream sync])
- **Upstream:** The updated N3 parser handles Turtle language tags split across
  response chunks. The fork integration omits the superseded line-buffering
  workaround to preserve multibyte characters split across chunks.
  ([N3 fix], [#4])

### Security

- **Fork integration:** Update the runtime Undici dependency to 8.12.4 and
  the separate development dependency to 6.29.1.
  ([Undici 8.12.4], [Undici advisory], [#4])

## [0.4.2] - 2026-11-05

### Fixed

- Ordered traversal uses timestamps as the primary sort key and sequence values
  to break ties. Streams with only a sequence path still order by sequence.
  When a timestamp path is declared, sequence-only boundaries no longer trigger
  early emission, so these streams may buffer more members. ([#7])
- Saved traversal state preserves relation value types across restarts,
  including date-like sequence strings and numeric boundary markers. Legacy
  state with ambiguous values is traversed conservatively. ([#7])
- The client waits for storage adapters to initialize and surfaces initialization
  errors. `startFresh` resets injected Level storage, including IndexedDB, and
  clears existing in-memory stores. ([#6])
- In-memory storage returns independent copies of saved values and treats numeric
  and equivalent string keys consistently with the other adapters. ([#6])
- CommonJS consumers can load the advertised storage entry points. Fixed Winston
  export resolution and TypeScript compatibility with Cloudflare Durable Object
  SQLite. ([#6])

## [0.4.1] - 2026-04-08

### Added

- Ordered traversal reads `ldes:sequencePath` and supports string sequence values
  such as UUIDv7 identifiers. It can read sequence values from the source page
  when the member shape omits the sequence property. ([#3])

### Fixed

- Ordered traversal ignores TREE relations on unrelated paths when deciding
  when to emit members. String relation boundaries no longer cause invalid-date
  errors or block emission through comparisons with timestamps. ([#3])

## [0.4.0] - 2026-03-17

### Added

- Applications can supply a custom replication state backend through the
  `storage` configuration option. The fork includes Level, in-memory, and
  Cloudflare Durable Object SQLite adapters. Level remains the default backend
  for file-backed state. ([#1])
- Added support for replicating streams on Cloudflare Workers with
  `nodejs_compat` and resuming from state saved in a Durable Object. ([#1])

### Changed

- The fork is distributed on npm as `@inferal-oss/ldes-client`.

[Unreleased]: https://github.com/inferal-oss/ldes-client/compare/v0.4.2...main
[0.4.2]: https://github.com/inferal-oss/ldes-client/compare/v0.4.1...v0.4.2
[0.4.1]: https://github.com/inferal-oss/ldes-client/compare/v0.4.0...v0.4.1
[0.4.0]: https://github.com/inferal-oss/ldes-client/compare/v0.3.1...v0.4.0
[0.3.1]: https://github.com/inferal-oss/ldes-client/tree/v0.3.1
[#1]: https://github.com/inferal-oss/ldes-client/pull/1
[#3]: https://github.com/inferal-oss/ldes-client/pull/3
[#4]: https://github.com/inferal-oss/ldes-client/pull/4
[#6]: https://github.com/inferal-oss/ldes-client/pull/6
[#7]: https://github.com/inferal-oss/ldes-client/pull/7
[upstream sync]: https://github.com/KNowledgeOnWebScale/ldes-client/compare/v0.3.1...e3b3c44
[upstream #154]: https://github.com/KNowledgeOnWebScale/ldes-client/pull/154
[upstream #157]: https://github.com/KNowledgeOnWebScale/ldes-client/pull/157
[N3 fix]: https://github.com/rdfjs/N3.js/issues/578
[Undici 8.12.4]: https://github.com/nodejs/undici/releases/tag/v8.12.4
[Undici advisory]: https://github.com/advisories/GHSA-2m5v-pch6-74hx
