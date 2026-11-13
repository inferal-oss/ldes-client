window.BENCHMARK_DATA = {
  "lastUpdate": 1794582963157,
  "repoUrl": "https://github.com/inferal-oss/ldes-client",
  "entries": {
    "Benchmark for ldes client": [
      {
        "commit": {
          "author": {
            "email": "yrashk@gmail.com",
            "name": "Yurii Rashkovskii",
            "username": "yrashk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b9ed6605c7d71803c63f606d38843187765797e3",
          "message": "Merge pull request #7 from inferal-oss/codex/backport-ordering-review\n\nFix chronological ordering and saved relation types found during upstream review",
          "timestamp": "2026-11-04T23:56:11-08:00",
          "tree_id": "d84998f75ea3e88f579acb6daea42a427f62fde1",
          "url": "https://github.com/inferal-oss/ldes-client/commit/b9ed6605c7d71803c63f606d38843187765797e3"
        },
        "date": 1793865686723,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "tree-3-3",
            "value": 5.55,
            "range": "±4.04%",
            "unit": "ops/sec",
            "extra": "32 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yrashk@gmail.com",
            "name": "Yurii Rashkovskii",
            "username": "yrashk"
          },
          "committer": {
            "email": "yrashk@gmail.com",
            "name": "Yurii Rashkovskii",
            "username": "yrashk"
          },
          "distinct": true,
          "id": "016e68fd7c83119e42a020867ff15553f29d7e0c",
          "message": "0.4.2",
          "timestamp": "2026-11-05T00:01:06-08:00",
          "tree_id": "bc0a0b59b2dd75eca8844608e8fa0af5c6c15a50",
          "url": "https://github.com/inferal-oss/ldes-client/commit/016e68fd7c83119e42a020867ff15553f29d7e0c"
        },
        "date": 1793865789481,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "tree-3-3",
            "value": 5.42,
            "range": "±4.08%",
            "unit": "ops/sec",
            "extra": "31 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yrashk@gmail.com",
            "name": "Yurii Rashkovskii",
            "username": "yrashk"
          },
          "committer": {
            "email": "yrashk@gmail.com",
            "name": "Yurii Rashkovskii",
            "username": "yrashk"
          },
          "distinct": true,
          "id": "fe650dc1e2feaf8aa797c991378d5deb9bbbe5a1",
          "message": "Add changelog for Inferal fork releases",
          "timestamp": "2026-11-05T08:36:52-08:00",
          "tree_id": "6e33beb98c7b8dc2fd347708fc2beed74a911bfe",
          "url": "https://github.com/inferal-oss/ldes-client/commit/fe650dc1e2feaf8aa797c991378d5deb9bbbe5a1"
        },
        "date": 1793896691925,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "tree-3-3",
            "value": 5.55,
            "range": "±4.62%",
            "unit": "ops/sec",
            "extra": "32 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yrashk@gmail.com",
            "name": "Yurii Rashkovskii",
            "username": "yrashk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "35c35e150120e379368b97e1ff0f0390105adbe1",
          "message": "Merge pull request #4 from inferal-oss/sync/upstream-main\n\nSync upstream ldes-client main into the Inferal fork",
          "timestamp": "2026-11-05T14:35:40-08:00",
          "tree_id": "0cbf8f592e60abd5eaa72a6e2fae3eaf646ac5e3",
          "url": "https://github.com/inferal-oss/ldes-client/commit/35c35e150120e379368b97e1ff0f0390105adbe1"
        },
        "date": 1793918238224,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "tree-3-3",
            "value": 5.92,
            "range": "±3.02%",
            "unit": "ops/sec",
            "extra": "34 samples"
          }
        ]
      }
    ],
    "LDES replication (HTTP)": [
      {
        "commit": {
          "author": {
            "email": "yrashk@gmail.com",
            "name": "Yurii Rashkovskii",
            "username": "yrashk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "918b824102c3919ff313ea0493e97b5a034361ad",
          "message": "Merge pull request #8 from inferal-oss/codex/sync-upstream-v0.4.0\n\nSync upstream ldes-client v0.4.0 into the Inferal fork",
          "timestamp": "2026-11-06T12:30:11-08:00",
          "tree_id": "baabc2589e0552be6bed2d217bb492c138a93624",
          "url": "https://github.com/inferal-oss/ldes-client/commit/918b824102c3919ff313ea0493e97b5a034361ad"
        },
        "date": 1793997398849,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ldes1 / 10000 members / 100 × 100 / 0ms / none",
            "value": 9026.048106150254,
            "unit": "members/s",
            "extra": "Median of 5 runs; range 1.090–1.145 s"
          },
          {
            "name": "trig / 10000 members / 100 × 100 / 0ms / none",
            "value": 24845.77908140489,
            "unit": "members/s",
            "extra": "Median of 5 runs; range 0.384–0.816 s"
          },
          {
            "name": "jelly / 10000 members / 100 × 100 / 0ms / none",
            "value": 27473.763414494264,
            "unit": "members/s",
            "extra": "Median of 5 runs; range 0.361–0.440 s"
          },
          {
            "name": "ldes1 / 10000 members / 10 × 1000 / 0ms / none",
            "value": 9581.428851484156,
            "unit": "members/s",
            "extra": "Median of 5 runs; range 1.017–1.128 s"
          },
          {
            "name": "trig / 10000 members / 10 × 1000 / 0ms / none",
            "value": 27380.353993094566,
            "unit": "members/s",
            "extra": "Median of 5 runs; range 0.354–1.242 s"
          },
          {
            "name": "jelly / 10000 members / 10 × 1000 / 0ms / none",
            "value": 34358.22722610862,
            "unit": "members/s",
            "extra": "Median of 5 runs; range 0.280–0.346 s"
          },
          {
            "name": "ldes1 / 10000 members / 1 × 10000 / 0ms / none",
            "value": 6706.770678288863,
            "unit": "members/s",
            "extra": "Median of 5 runs; range 1.445–1.666 s"
          },
          {
            "name": "trig / 10000 members / 1 × 10000 / 0ms / none",
            "value": 29906.296902699632,
            "unit": "members/s",
            "extra": "Median of 5 runs; range 0.321–0.351 s"
          },
          {
            "name": "jelly / 10000 members / 1 × 10000 / 0ms / none",
            "value": 39618.033192138755,
            "unit": "members/s",
            "extra": "Median of 5 runs; range 0.241–0.270 s"
          },
          {
            "name": "ldes1 / 1000 members / 10 × 100 / 50ms / none",
            "value": 2691.928064187797,
            "unit": "members/s",
            "extra": "Median of 5 runs; range 0.360–0.468 s"
          },
          {
            "name": "trig / 1000 members / 10 × 100 / 50ms / none",
            "value": 3799.78296095701,
            "unit": "members/s",
            "extra": "Median of 5 runs; range 0.255–0.382 s"
          },
          {
            "name": "jelly / 1000 members / 10 × 100 / 50ms / none",
            "value": 4098.267823253036,
            "unit": "members/s",
            "extra": "Median of 5 runs; range 0.238–0.257 s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yrashk@gmail.com",
            "name": "Yurii Rashkovskii",
            "username": "yrashk"
          },
          "committer": {
            "email": "yrashk@gmail.com",
            "name": "Yurii Rashkovskii",
            "username": "yrashk"
          },
          "distinct": true,
          "id": "b43e2fa7f6a59c54d515c7886bd1dc732c303159",
          "message": "Release 0.5.0",
          "timestamp": "2026-11-06T12:31:15-08:00",
          "tree_id": "bccb666e5898a220086ac61422e097eeb1e2556f",
          "url": "https://github.com/inferal-oss/ldes-client/commit/b43e2fa7f6a59c54d515c7886bd1dc732c303159"
        },
        "date": 1793997791176,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ldes1 / 10000 members / 100 × 100 / 0ms / none",
            "value": 6554.350954770764,
            "unit": "members/s",
            "extra": "Median of 5 runs; range 1.514–1.556 s"
          },
          {
            "name": "trig / 10000 members / 100 × 100 / 0ms / none",
            "value": 18927.043147573335,
            "unit": "members/s",
            "extra": "Median of 5 runs; range 0.494–0.550 s"
          },
          {
            "name": "jelly / 10000 members / 100 × 100 / 0ms / none",
            "value": 21253.407101812387,
            "unit": "members/s",
            "extra": "Median of 5 runs; range 0.468–0.475 s"
          },
          {
            "name": "ldes1 / 10000 members / 10 × 1000 / 0ms / none",
            "value": 6936.011776193844,
            "unit": "members/s",
            "extra": "Median of 5 runs; range 1.436–1.470 s"
          },
          {
            "name": "trig / 10000 members / 10 × 1000 / 0ms / none",
            "value": 22971.75711822449,
            "unit": "members/s",
            "extra": "Median of 5 runs; range 0.429–0.452 s"
          },
          {
            "name": "jelly / 10000 members / 10 × 1000 / 0ms / none",
            "value": 26454.639923343126,
            "unit": "members/s",
            "extra": "Median of 5 runs; range 0.368–0.387 s"
          },
          {
            "name": "ldes1 / 10000 members / 1 × 10000 / 0ms / none",
            "value": 5283.304237727816,
            "unit": "members/s",
            "extra": "Median of 5 runs; range 1.821–1.946 s"
          },
          {
            "name": "trig / 10000 members / 1 × 10000 / 0ms / none",
            "value": 23064.107984345355,
            "unit": "members/s",
            "extra": "Median of 5 runs; range 0.426–0.447 s"
          },
          {
            "name": "jelly / 10000 members / 1 × 10000 / 0ms / none",
            "value": 30725.65498354976,
            "unit": "members/s",
            "extra": "Median of 5 runs; range 0.317–0.339 s"
          },
          {
            "name": "ldes1 / 1000 members / 10 × 100 / 50ms / none",
            "value": 2181.85639524779,
            "unit": "members/s",
            "extra": "Median of 5 runs; range 0.453–0.460 s"
          },
          {
            "name": "trig / 1000 members / 10 × 100 / 50ms / none",
            "value": 3223.4776553799315,
            "unit": "members/s",
            "extra": "Median of 5 runs; range 0.300–0.319 s"
          },
          {
            "name": "jelly / 1000 members / 10 × 100 / 50ms / none",
            "value": 3505.9321248034703,
            "unit": "members/s",
            "extra": "Median of 5 runs; range 0.280–0.294 s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yrashk@gmail.com",
            "name": "Yurii Rashkovskii",
            "username": "yrashk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cac1c4ba0d59a377e93c304694e2bb540e20bac9",
          "message": "Merge pull request #9 from inferal-oss/codex/sync-upstream-storage\n\nMerge upstream main into the Inferal fork",
          "timestamp": "2026-11-13T07:09:51-08:00",
          "tree_id": "0b952aa0e8e03b6688fb96c85682f108f092a11d",
          "url": "https://github.com/inferal-oss/ldes-client/commit/cac1c4ba0d59a377e93c304694e2bb540e20bac9"
        },
        "date": 1794582962345,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ldes1 / 10000 members / 100 × 100 / 0ms / none",
            "value": 6505.363506975269,
            "unit": "members/s",
            "extra": "Median of 5 runs; range 1.525–1.565 s"
          },
          {
            "name": "trig / 10000 members / 100 × 100 / 0ms / none",
            "value": 19479.206354332167,
            "unit": "members/s",
            "extra": "Median of 5 runs; range 0.500–0.522 s"
          },
          {
            "name": "jelly / 10000 members / 100 × 100 / 0ms / none",
            "value": 21202.71690766346,
            "unit": "members/s",
            "extra": "Median of 5 runs; range 0.463–0.504 s"
          },
          {
            "name": "ldes1 / 10000 members / 10 × 1000 / 0ms / none",
            "value": 7032.0636943739555,
            "unit": "members/s",
            "extra": "Median of 5 runs; range 1.402–1.504 s"
          },
          {
            "name": "trig / 10000 members / 10 × 1000 / 0ms / none",
            "value": 23177.20925680123,
            "unit": "members/s",
            "extra": "Median of 5 runs; range 0.431–0.456 s"
          },
          {
            "name": "jelly / 10000 members / 10 × 1000 / 0ms / none",
            "value": 26933.701750461674,
            "unit": "members/s",
            "extra": "Median of 5 runs; range 0.367–0.384 s"
          },
          {
            "name": "ldes1 / 10000 members / 1 × 10000 / 0ms / none",
            "value": 5085.555177087975,
            "unit": "members/s",
            "extra": "Median of 5 runs; range 1.946–2.014 s"
          },
          {
            "name": "trig / 10000 members / 1 × 10000 / 0ms / none",
            "value": 22568.338638950394,
            "unit": "members/s",
            "extra": "Median of 5 runs; range 0.414–0.483 s"
          },
          {
            "name": "jelly / 10000 members / 1 × 10000 / 0ms / none",
            "value": 28282.390779954178,
            "unit": "members/s",
            "extra": "Median of 5 runs; range 0.319–0.361 s"
          },
          {
            "name": "ldes1 / 1000 members / 10 × 100 / 50ms / none",
            "value": 2177.66614693325,
            "unit": "members/s",
            "extra": "Median of 5 runs; range 0.446–0.467 s"
          },
          {
            "name": "trig / 1000 members / 10 × 100 / 50ms / none",
            "value": 3250.3997203434096,
            "unit": "members/s",
            "extra": "Median of 5 runs; range 0.302–0.318 s"
          },
          {
            "name": "jelly / 1000 members / 10 × 100 / 50ms / none",
            "value": 3515.256949851057,
            "unit": "members/s",
            "extra": "Median of 5 runs; range 0.281–0.292 s"
          }
        ]
      }
    ]
  }
}