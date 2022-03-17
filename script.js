function calcTip(note) {
  const tipPercent = getTipPercent(note);
  return note * tipPercent;
}

function getTipPercent(note) {
  return note > 50 && note < 300 ? 0.15 : 0.20;
}

const getTipPercentArrow = (note) => note > 50 && note < 300 ? 0.15 : 0.20;


const notes = [125, 555, 44];


let billsFor = [];
for (let i = 0; i < notes.length; i++) {
  const total = calcTip(notes[i]) + notes[i];
  billsFor.push(total);
}

let billsForeach = [];
notes.forEach((note) => {
  const total = calcTip(note) + note;
  billsForeach.push(total);
});

let billsWhile = [];
let index = 0;
while(index < notes.length) {
  const total = calcTip(notes[index]) + notes[index];
  billsWhile.push(total);
  index += 1;
}

console.log(billsFor);
console.log(billsForeach);
console.log(billsWhile);