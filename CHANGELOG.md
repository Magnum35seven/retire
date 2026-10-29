# Changelog

## 0.8.0 — tax model refinement
- Default super withdrawals to tax-free for the common eligible taxed-fund case from age 60, with optional effective-rate override.
- Replace flat pension/other-income tax rates with an approximate individual tax calculation using 2026–27 resident tax brackets, LITO, SAPTO and Medicare levy logic.
- Treat Age Pension as taxable income for the tax estimate; estimate tax individually and sum for couples, assuming equal allocation of income.
- Ensure income target is net of estimated tax and retain monthly cash-flow timing.
- Document assumptions, sources and exclusions.

## 0.7.0
- Added user-entered effective tax rates and monthly cash-flow timing.

## 0.6.0
- Improved Age Pension and drawdown modelling.

## 0.9.0 — versioned rules and update service
- Moved the Age Pension ruleset to a separate versioned JSON file with a latest-manifest pointer.
- Added online update checks, no-cache fetches, schema/value validation and version matching.
- Cached last-known-good rules locally for offline use and retained previous rules for rollback.
- Added active version/effective date/last-check display and active-rules export.
- Added guidance for publishing reviewed updates and clarified that official rule changes still need human review.
