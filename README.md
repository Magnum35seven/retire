# Retirement Compass — working build 0.3.0

A mobile-first, local-first Australian retirement-planning PWA prototype.

## Run
- For a basic preview, open `index.html` in a browser.
- For service-worker / install behaviour, serve this folder over localhost or HTTPS.
- No server or account is required. Household inputs are saved in browser local storage only when the user chooses Save.

## What's included
- Household profile, local save/load, JSON import/export.
- Simplified annual super/savings projection and CSV export.
- Standard-rule Age Pension estimate for applicants age 67+; couple estimates only if both partners are 67+.
- Dated ruleset JSON and source register.
- Local report/print, privacy controls, and built-in smoke checks.

## Age Pension estimator scope
Ruleset date: 20 September 2026. Sources include Services Australia income and assets test pages and the deeming-rate change notice. The income maximum rates are derived from the official income free areas and cut-off points. Deeming thresholds of $66,800 single / $110,600 couple are explicitly flagged for independent rechecking because the standard deeming page may lag the September 2026 rate change.

This estimator excludes Work Bonus, transitional rates, Rent Assistance, overseas payment rules, residence exceptions/international agreements, gifting, compensation, asset exemptions, special income streams, debt treatment and several other exceptions. User must enter correctly assessed assets and financial assets; super is not automatically deemed assessable for every person. It is an indicative estimate, not a Centrelink determination or financial advice.

## Test
Requires Node.js 18+:
```bash
node tests/pension-engine.test.js
```

## Privacy
Data stays in the browser unless the user exports it. Browser local storage can be lost when site data is cleared. Export a JSON backup for safekeeping. Do not enter TFNs, myGov credentials, identity documents or bank account numbers.

## Current status
Prototype only. No professional review is claimed. Calculations have automated tests but are not independently validated against every Centrelink edge case.
