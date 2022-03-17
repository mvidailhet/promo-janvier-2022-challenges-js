const marcelWeight = 92;
const bernardWeight = 78;

const marcelHeight = 1.95;
const bernardHeight = 1.69;

const fixedFloatValue = 4;

const bernardName = 'Bernard';
const marcelName = 'Marcel';

const bernardIMC = bernardWeight / (bernardHeight * bernardHeight);
const marcelIMC = marcelWeight / (marcelHeight * marcelHeight);

const bernardIMCToFixed = bernardIMC.toFixed(fixedFloatValue);
const marcelIMCToFixed = marcelIMC.toFixed(fixedFloatValue);

console.log(bernardIMC);
console.log(marcelIMC);

const bernardHigherIMC = bernardIMC > marcelIMC;

console.log(bernardHigherIMC);


if (bernardHigherIMC) {
  console.log(`Bernard a un IMC (${bernardIMCToFixed}) plus élevé que Marcel (${marcelIMCToFixed})`);
} else {
  console.log('Marcel a un IMC (' + marcelIMCToFixed + ') plus élevé que Bernard(' + bernardIMCToFixed + ')');
}

const higherName = bernardHigherIMC ? bernardName : marcelName;
const lowerName = bernardHigherIMC ? marcelName : bernardName;

const higherIMCToFixed = bernardHigherIMC ? bernardIMCToFixed : marcelIMCToFixed;
const lowerIMCToFixed = bernardHigherIMC ? marcelIMCToFixed : bernardIMCToFixed;

console.log(`${higherName} a un IMC (${higherIMCToFixed}) plus élevé que ${lowerName} (${marcelIMCToFixed})`);

