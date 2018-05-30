// user needs to be able to enter required data. prompt?
// create variables to store the data in//
// use formula to calculate the bmi//
// create variables to store the formula//
//use Math.pow. Look up what it means!//
//console log to get the bmi//
//use formula to calculate the ideal weight store in variable//
//console log to get the answer//
//use formula to calculate the bmr  store in a variable and use an if statement.//
//use a switch statement to adjust the bmr console log//
// write an if/else statement  to calculate the amount of calories per day
// for gaining or loosing weight
// and how many weeks it will take to reach the ideal weight.
// console.log

const age = 40;
const gender = 'f';
const height = 176;
const weight = 63;
const exerciseLevel = 3;

const heightInCM = height / 100;
const bodyWeightSquared = Math.pow(heightInCM, 2); // Math.pow still don't get it
const bmi = weight / bodyWeightSquared;

console.log(`Your BMI is ${Math.floor(bmi)}.`); /*rounds to the nearest decimal. Maybe math.ceil is better? Math.ceil rounds up to the nearest decimal. or Math.round! Just keep it the same in each one! */

const idealBMI = 22.5;
const idealWeight = idealBMI * bodyWeightSquared;
console.log(`Your ideal bodyweight, according to very old fashioned science is ${Math.floor(idealWeight)}.`)

let bmr = 10 * weight + 6.25 * height - 5 * age;
  if ( gender === 'm' ){
   bmr +=5;
};
if ( gender === 'f' ){
   bmr - 161;//won't accept -=. Why?
};
console.log(`Your BMR is ${Math.floor(bmr)}.`);

let caloriesPerDay;

switch (exerciseLevel) {
  case '1' :
  caloriesPerDay = bmr * 1.2
  break
  case '2' :
  caloriesPerDay = bmr * 1.375
  break
  case '3' :
  caloriesPerDay = bmr * 1.55
  break
  case '4' :
  caloriesPerDay = bmr * 1.725
  break
  case '5' :
  caloriesPerDay = bmr * 1.9
  break
  default :
  caloriesPerDay = bmr * 1.2
  break
};
console.log(`You use ${Math.floor(caloriesPerDay)} calories per day.`);
