const fixedValue = 1;

const calcBMI = function() {
  this.BMI = this.weight / (this.height * this.height);
  this.fixedBMI = this.BMI.toFixed(fixedValue);
  return this.BMI;
};

const user1 = {
  name: "Bernard",
  height: 1.69,
  weight: 78,
  calcBMI: calcBMI,
};

const user2 = {
  name: "Marcel",
  height: 1.95,
  weight: 92,
  calcBMI: calcBMI,
};

user1.calcBMI();
user2.calcBMI();

console.log(user1);
console.log(user2);

if (user1.BMI > user2.BMI) {
  console.log(`L'imc de ${user1.name} (${user1.fixedBMI}) est plus élevé que l'IMC de ${user2.name} (${user2.fixedBMI})`);
} else {
  console.log(`L'imc de ${user2.name} (${user2.fixedBMI}) est plus élevé que l'IMC de ${user1.name} (${user1.fixedBMI})`);
}
