# Retirement Compass — working build 1.0.0

Mobile-first, local-first Australian retirement-planning PWA prototype.

## Run / host
- Open `index.html` for a basic preview.
- Serve this folder over localhost or HTTPS for service-worker/offline features and rules update checks.
- Household data stays in this browser; JSON backup/import is available.

## App icons (1.0.0)
- Added Retirement Compass branding for browser tabs, iOS home-screen icons, and installed PWA launchers.
- Includes 192px and 512px standard and maskable icons, plus 32px/48px favicon assets and a 1024px master.
- The web app manifest declares standard and maskable icon purposes; service worker caches the icon assets for offline use.

## Rules update service (0.9.0)
- Age Pension calculation rules are now loaded from a separately versioned rules JSON file, with the bundled rules as fallback.
- On startup and when requested, the app checks `rules/latest.json` using a no-cache fetch.
- A candidate must pass schema/value checks and match the manifest version before it can replace active rules.
- The active rules are cached locally for offline use; the prior version is retained for rollback.
- The Rules Register shows active version, effective date and last successful check; active rules can be exported.
- The service does not upload personal data. It does not automatically interpret government announcements: a maintainer must review official sources, publish a new versioned file, then update the manifest.
- If deployed as a static site, upload the whole folder and keep the `rules/` directory at the same relative path.

## Current rules and sources
Rules effective 20 September 2026 include deeming rates of 1.75% below and 3.75% above the relevant threshold, as stated by the Australian Government Actuary and the Social Security (Deeming Threshold Rates) Determination (No. 2) 2026. See links in `rules/rules-2026-09-20-v4.json`. The income/asset thresholds are standard-case estimates and must be checked against Services Australia.

## Limitations
Age Pension estimate excludes Work Bonus, Rent Assistance, transitional rates, many residence exceptions, gifting, asset exemptions, special income streams and other Centrelink interactions. Tax estimates are approximate; see the tax assumptions below. The app is not a Centrelink determination or financial/tax advice.

## Privacy
No account is required. Profile data is not sent to the rules update endpoint. Do not enter TFNs, myGov credentials, identity documents or bank account numbers. Browser storage can be lost if site data is cleared; export a backup.

## Quick validation
Run `node tests/rules-update.test.js`, `node tests/tax-engine.test.js`, and `node tests/icons.test.js` to validate rules, tax calculations, and app icon assets.

## Monthly-first planning (1.1.0)
- Main living-cost, other-retirement-income, desired retirement income, fallback super withdrawal and contribution inputs are now monthly.
- The projection converts monthly inputs to annual equivalents internally; pension thresholds remain in the fortnightly units required by the Age Pension calculation.
- Results include monthly net income alongside annual projection totals.
- Older saved profiles and 1.0.0 JSON backups are converted from annual to monthly amounts on import/load; new backups carry a unit-version marker to avoid repeat conversion.
