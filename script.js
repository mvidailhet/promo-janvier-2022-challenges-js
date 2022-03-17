function calcTip(note) {
  const tipPercent = getTipPercent(note);
  return note * tipPercent;
}

function getTipPercent(note) {
  return note > 50 && note < 300 ? 0.15 : 0.2;
}

const getTipPercentArrow = (note) => (note > 50 && note < 300 ? 0.15 : 0.2);

const notes = [125, 555, 44];

let tipsFor = [];
for (let i = 0; i < notes.length; i++) {
  const total = calcTip(notes[i]);
  tipsFor.push(total);
}

let tipsForeach = [];
notes.forEach((note) => {
  const total = calcTip(note);
  tipsForeach.push(total);
});

let tipsWhile = [];
let index = 0;
while (index < notes.length) {
  const total = calcTip(notes[index]);
  tipsWhile.push(total);
  index += 1;
}

const tipsMap = notes.map((note) => calcTip(note));

/* console.log(tipsFor);
console.log(tipsForeach);
console.log(tipsWhile);
console.log(tipsMap); */

let totals = [];
for (let i = 0; i < notes.length; i++) {
  const total = notes[i] + tipsFor[i];
  totals.push(total);
}

console.log(totals);


