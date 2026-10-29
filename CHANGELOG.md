# Changelog

## 0.3.0 — 29 October 2026
- Added a deterministic Age Pension estimator for standard resident cases where applicant (and partner for couples) are 67+.
- Encoded effective-dated income-test, assets-test and deeming parameters.
- Added transparent breakdown of income test vs assets test, deemed income and annual/fortnightly estimate.
- Added separate `pension-engine.js`, `pension-ruleset.json`, and automated Node tests.
- Added explicit limitations and a caution that deeming thresholds require rechecking.
- Age Pension estimate remains an indicative calculation, not a Centrelink determination.
