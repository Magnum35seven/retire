const assert=require('node:assert/strict');
const {calculateAgePension,PENSION_RULES}=require('../pension-engine.js');
let passed=0;function test(name,fn){fn();passed++;console.log('✓ '+name)}
const base={household:'single',homeowner:true,age:67,partnerAge:67,residenceYears:10,assessableAssets:0,financialAssets:0,otherIncomeFortnightly:0};
test('ruleset effective date is versioned',()=>assert.equal(PENSION_RULES.effectiveDate,'2026-09-20'));
test('full single rate is returned when no assessed income/assets',()=>assert.equal(calculateAgePension(base).fortnightly,1237.7));
test('income cut-off reduces estimate to zero',()=>assert.equal(calculateAgePension({...base,otherIncomeFortnightly:2701.4}).fortnightly,0));
test('single homeowner asset cut-off reduces estimate to zero',()=>assert.equal(calculateAgePension({...base,assessableAssets:745750}).fortnightly,0));
test('single non-homeowner limit is used',()=>assert.equal(calculateAgePension({...base,homeowner:false}).fullPensionAssetsLimit,600000));
test('deeming uses two bands',()=>assert.equal(calculateAgePension({...base,financialAssets:100000}).deemedAnnual,66800*.0175+(100000-66800)*.0375));
test('under-age applicant is not given an estimate',()=>assert.equal(calculateAgePension({...base,age:66}).status,'not-age-eligible'));
test('couple with partner under age is safely blocked',()=>assert.equal(calculateAgePension({...base,household:'couple',partnerAge:66}).status,'unsupported-couple-age'));
test('short residence is flagged rather than estimated',()=>assert.equal(calculateAgePension({...base,residenceYears:5}).status,'residence-review'));
test('couple income cut-off reduces combined estimate to zero',()=>assert.equal(calculateAgePension({...base,household:'couple',otherIncomeFortnightly:4128}).fortnightly,0));
test('couple assets cut-off reduces combined estimate to zero',()=>assert.equal(calculateAgePension({...base,household:'couple',assessableAssets:1121000}).fortnightly,0));
test('couple returns combined and per-person figures',()=>{const r=calculateAgePension({...base,household:'couple',homeowner:true,assessableAssets:0,financialAssets:0});assert.equal(r.fortnightly,1866);assert.equal(r.perPersonFortnightly,933)});
test('negative user inputs cannot create negative assets or payments',()=>{const r=calculateAgePension({...base,assessableAssets:-500,financialAssets:-100,otherIncomeFortnightly:-1});assert.ok(r.fortnightly>=0);assert.equal(r.assets,0);assert.equal(r.financialAssets,0)});
console.log(`\n${passed} tests passed.`);
