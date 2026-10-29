# Retirement Compass — working build 0.4.0

Mobile-first, local-first Australian retirement-planning PWA prototype.

## Run
- Open `index.html` for a basic preview.
- Serve this folder over localhost or HTTPS to enable service-worker / install behaviour.
- No account or server is required for calculations. Household entries are saved in browser local storage only when requested.

## What's included
- Household profile, local save/load, JSON import/export.
- Simplified annual super/savings projection and CSV export.
- Standard-case Age Pension estimate for single people and couples, including couples where only one partner has reached 67.
- Mixed-age couple assessment uses couple income and combined assets thresholds; the single eligible partner's estimated payment is modelled at the partnered rate. The under-age partner's accumulation super is generally excluded from inputs where not assessable, but user must enter correctly assessed combined totals.
- Effective-dated pension rules register and official source links.
- Searchable 36-item FAQ library across Age Pension, couples, super and tax.
- Local report/print, privacy controls and built-in checks.

## Important calculation scope
Ruleset version `AU-AGE-PENSION-2026-09-20-v2`. This is an indicative standard-case estimate, not a Centrelink determination or personal financial advice. It excludes Work Bonus, transitional rates, Rent Assistance, international agreements/residence exceptions, asset exemptions, gifting, special income streams, debt treatment and some supplements and payment interactions. Deeming rates and thresholds are versioned assumptions and should be checked against current Services Australia information.

For mixed-age couples, use combined assessable assets and income. The principal home is generally excluded. Accumulation-phase super owned by a partner under Age Pension age is generally not counted if it is not paying an income stream; income streams and exceptions can differ. The app does not automatically determine these classifications.

## Test
Open the Rules register and select “Run built-in checks”. The package includes a Node.js test script at `tests/pension-engine.test.js` for core calculation cases.

## Privacy
Data stays in the browser unless exported. Browser storage may be lost if site data is cleared. Export a JSON backup. Do not enter TFNs, myGov credentials, identity documents or bank account numbers.

## FAQ source method
FAQs are a curated question bank based on recurring topics addressed by Services Australia, the ATO and ASIC Moneysmart. It is not a search-volume ranking and is not copied wholesale from third-party websites. Every answer links to an official source.
