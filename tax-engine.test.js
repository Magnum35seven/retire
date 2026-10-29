// Standalone checks for the tax helper copied from the app. Approximation tests only.
function residentIncomeTax(taxable, age, couple=false){
 taxable=Math.max(0,taxable); let tax=0;
 if(taxable>18200)tax+=Math.min(taxable-18200,26800)*0.15;
 if(taxable>45000)tax+=(Math.min(taxable,135000)-45000)*0.30;
 if(taxable>135000)tax+=(Math.min(taxable,190000)-135000)*0.37;
 if(taxable>190000)tax+=(taxable-190000)*0.45;
 const lito=taxable<=37500?700:taxable<=45000?Math.max(0,700-(taxable-37500)*.05):taxable<=66667?Math.max(0,325-(taxable-45000)*.015):0;
 tax=Math.max(0,tax-lito);
 if(age>=67){const max=couple?1602:2230,shade=couple?31847:36034,cut=couple?44663:53874;const sapto=taxable<=shade?max:taxable<cut?Math.max(0,max-(taxable-shade)*.125):0;tax=Math.max(0,tax-sapto);}
 const levyThreshold=couple?61623:44268;
 if(taxable>levyThreshold)tax+=taxable*.02; else if(taxable>levyThreshold*.9)tax+=taxable*.02*(taxable-levyThreshold*.9)/(levyThreshold*.1);
 return Math.max(0,tax);
}
const tests=[['low taxable income offset to zero',residentIncomeTax(22000,70,false)===0],['higher income tax positive',residentIncomeTax(80000,70,false)>0],['tax non-negative',residentIncomeTax(0,70,false)===0],['couple tax calculation available',Number.isFinite(residentIncomeTax(40000,70,true))],['under-67 no SAPTO produces tax at taxable 30000',residentIncomeTax(30000,60,false)>0]];
for(const [name,ok] of tests)if(!ok)throw new Error('FAIL: '+name);
console.log(tests.length+' tax-engine checks passed');
