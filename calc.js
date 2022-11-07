const prompt = require('prompt');
let name = (prompt('Name:'))
console.log ("")
console.log ("hello " + name)
console.log ("")
let food = Number (prompt('how much was your food?'))
let tipPercentage = Number(prompt('how much would you like to tip?')/100)
console.log("")
let tipAmount = food * tipPercentage
let totalFoodbill = food + tipAmount
console.log('  ' + tipAmount + '  tip')
console.log("+ "+ food + '  food')
console.log("-----------------------")
console.log(' $' + totalFoodbill)