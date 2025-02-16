//Part 2
//Coding Challenge #1

function calcAverage(scores){
    const totalScore = scores.reduce((sum, score) => sum + score, 0);
    return totalScore / scores.length;
}

function checkWinner(avgDolhins,avgKoalas){
    if(avgDolhins >= 2 * avgKoalas){
        console.log(`Dolphins win (${avgDolhins.toFixed(0)} vs. ${avgKoalas.toFixed(0)})`)
    }else if(avgKoalas >= 2 * avgDolhins){
        console.log(`Koalas win (${avgKoalas.toFixed(0)} vs. ${avgDolhins.toFixed(0)})`)
    }else{
        console.log("No one Wins!")
    }
}

//Test Data1
const dolphinsScores1 = [44, 23, 71];
const koalasScores1 = [65, 54, 49];

const avgDolhins1 = calcAverage(dolphinsScores1)
const avgKoalas1 = calcAverage(koalasScores1)

checkWinner(avgDolhins1,avgKoalas1)

//Test Data2
const dolphinsScores2 = [85, 54, 41];
const koalasScores2 = [23, 34, 27];

const avgDolhins2 = calcAverage(dolphinsScores2)
const avgKoalas2 = calcAverage(koalasScores2)

checkWinner(avgDolhins2,avgKoalas2) 

//Coding Challenge #2
function calcTip(bill) {
    return (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;
  }
  
  console.log(`The tip for a bill of 100 is: ${calcTip(100).toFixed(2)}`);
  
  const bills = [125, 555, 44];
  
  const tips = bills.map(bill => calcTip(bill));
  
  const total = bills.map((bill, index) => bill + tips[index]);
  
  console.log(`Bills: ${bills}`);
  console.log(`Tips: ${tips.map(tip => tip.toFixed(2))}`);
  console.log(`Total: ${total.map(value => value.toFixed(2))}`);

//Coding Challenge #3
const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function() {
      this.BMI = this.mass / (this.height * this.height);
      return this.BMI;
    }
  };
  
  const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95, 
    calcBMI: function() {
      this.BMI = this.mass / (this.height * this.height);
      return this.BMI;
    }
  };

  mark.calcBMI();
  john.calcBMI();
  
  if (mark.BMI > john.BMI) {
    console.log(`${mark.fullName}'s BMI (${mark.BMI.toFixed(1)}) is higher than ${john.fullName}'s (${john.BMI.toFixed(1)})!`);
  } else if (john.BMI > mark.BMI) {
    console.log(`${john.fullName}'s BMI (${john.BMI.toFixed(1)}) is higher than ${mark.fullName}'s (${mark.BMI.toFixed(1)})!`);
  } else {
    console.log(`Both have the same BMI! Mark's and John's BMI are both ${mark.BMI.toFixed(1)}.`);
  }

//Coding Chalenge #4
const bill4s = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tip4s = [];
const totals = [];

for (let i = 0; i < bill4s.length; i++) {
  const tip = calcTip(bill4s[i]);
  tip4s.push(tip); 
  totals.push(bill4s[i] + tip); 
}

function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

const averageTotal = calcAverage(totals);

console.log("Bills: " + bill4s);
console.log("Tips: " + tip4s.map(tip => tip.toFixed(2)));
console.log("Totals: " + totals.map(total => total.toFixed(2)));
console.log("Average Total: " + averageTotal.toFixed(2));

  