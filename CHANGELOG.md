# Changelog

This changelog tracks notable changes in the Inferal fork of ldes-client,
starting from its [upstream 0.3.1 baseline][0.3.1]. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

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
[#6]: https://github.com/inferal-oss/ldes-client/pull/6
[#7]: https://github.com/inferal-oss/ldes-client/pull/7
