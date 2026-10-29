# Changelog

## 1.1.0 — monthly-first planning
- Changed household spending, other retirement income, income target, fallback super withdrawals and contributions to monthly input amounts.
- Kept annual projection and Age Pension calculations internally consistent by converting monthly inputs to annual equivalents.
- Added monthly net-income figures to projection output and CSV export.
- Added a units-version marker and migration for older saved profiles and backups.

## 1.0.0 — app icons and installability
- Added PWA icon set, favicon, Apple touch icon and maskable Android icons.
- Retained the versioned rules update service, offline cache and pension/tax estimate tools.

## 0.9.0 — versioned rules and update service
- Moved the Age Pension ruleset to a separately versioned JSON file with a latest-manifest pointer.
- Added online update checks, no-cache fetches, schema/value validation and version matching.
- Cached last-known-good rules locally for offline use and retained previous rules for rollback.
- Added active version/effective date/last-check display and active-rules export.
