//Part1
//Coding Challenge #1
// Test Data 1
let markMass1 = 78;
let markHeight1 = 1.69;
let johnMass1 = 92; 
let johnHeight1 = 1.95; 

// Test Data 2
let markMass2 = 95; 
let markHeight2 = 1.88; 
let johnMass2 = 85; 
let johnHeight2 = 1.76; 

function calculateBMI(mass, height) {
  return mass / (height * height); 
}

let markBMI1 = calculateBMI(markMass1, markHeight1);
let johnBMI1 = calculateBMI(johnMass1, johnHeight1);

let markBMI2 = calculateBMI(markMass2, markHeight2);
let johnBMI2 = calculateBMI(johnMass2, johnHeight2);


let markHigherBMI1 = markBMI1 > johnBMI1;
let markHigherBMI2 = markBMI2 > johnBMI2;


console.log(`Test Data 1:`);
console.log(`Mark's BMI: ${markBMI1}`);
console.log(`John's BMI: ${johnBMI1}`);
console.log(`Does Mark have a higher BMI than John? ${markHigherBMI1}`);

console.log(`Test Data 2:`);
console.log(`Mark's BMI: ${markBMI2}`);
console.log(`John's BMI: ${johnBMI2}`);
console.log(`Does Mark have a higher BMI than John? ${markHigherBMI2}`);

//Coding Challenge #2

if (markBMI1 > johnBMI1) {
    console.log(`Mark's BMI (${markBMI1.toFixed(1)}) is higher than John's (${johnBMI1.toFixed(1)})!`);
} else {
    console.log(`John's BMI (${johnBMI1.toFixed(1)}) is higher than Mark's (${markBMI1.toFixed(1)})!`);
}

if (markBMI2 > johnBMI2) {
    console.log(`Mark's BMI (${markBMI2.toFixed(1)}) is higher than John's (${johnBMI2.toFixed(1)})!`);
} else {
    console.log(`John's BMI (${johnBMI2.toFixed(1)}) is higher than Mark's (${markBMI2.toFixed(1)})!`);
}  

//Coding Challenge #3

function calculateAverageScore(scores) {
    const totalScore = scores.reduce((sum, score) => sum + score, 0);
    return totalScore / scores.length;
  }
  
  // Test Data 1
  const dolphinsScores1 = [96, 108, 89];
  const koalasScores1 = [88, 91, 110];
  
  // Test Data Bonus 1
  const dolphinsScoresBonus1 = [97, 112, 101];
  const koalasScoresBonus1 = [109, 95, 123];
  
  // Test Data Bonus 2
  const dolphinsScoresBonus2 = [97, 112, 101];
  const koalasScoresBonus2 = [109, 95, 106];
  
  function determineWinner(dolphinsScores, koalasScores) {
    const dolphinsAvg = calculateAverageScore(dolphinsScores);
    const koalasAvg = calculateAverageScore(koalasScores);
    
    console.log(`Dolphins average score: ${dolphinsAvg.toFixed(1)}`);
    console.log(`Koalas average score: ${koalasAvg.toFixed(1)}`);
  
    if (dolphinsAvg >= 100 && koalasAvg >= 100) {
      if (dolphinsAvg > koalasAvg) {
        console.log("Dolphins win the trophy!");
      } else if (koalasAvg > dolphinsAvg) {
        console.log("Koalas win the trophy!");
      } else {
        console.log("It's a draw!");
      }
    } else {
      console.log("No team wins the trophy.");
    }
  }
  
  // Test with Data 1
  console.log("Test Data 1:");
  determineWinner(dolphinsScores1, koalasScores1);
  
  // Test with Bonus Data 1
  console.log("\nTest Data Bonus 1:");
  determineWinner(dolphinsScoresBonus1, koalasScoresBonus1);
  
  // Test with Bonus Data 2
  console.log("\nTest Data Bonus 2:");
  determineWinner(dolphinsScoresBonus2, koalasScoresBonus2);

//Coding Challenge #4
function calculateTip(bill) {
    return (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;
  }
  
// Test Data 1
const bill1 = 275;
const bill2 = 40;
const bill3 = 430;

const tip1 = calculateTip(bill1);
const tip2 = calculateTip(bill2);
const tip3 = calculateTip(bill3);

const total1 = bill1 + tip1;
const total2 = bill2 + tip2;
const total3 = bill3 + tip3;

console.log(`The bill was ${bill1}, the tip was ${tip1.toFixed(2)}, and the total value ${total1.toFixed(2)}`);
console.log(`The bill was ${bill2}, the tip was ${tip2.toFixed(2)}, and the total value ${total2.toFixed(2)}`);
console.log(`The bill was ${bill3}, the tip was ${tip3.toFixed(2)}, and the total value ${total3.toFixed(2)}`);
