const  score = new Number(500000)
//console.log(score.toString().length)///conver to search funtion like string

//console.log(score.toFixed(2))//// to number of value to print after dot

//console.log(score.toPrecision(2)) //////////////// to number of value to print after dot it round of to uper value or floar value

//console.log(score.toLocaleString('en-IN'));

const balance = new Number(120000004)
const boi = balance.toLocaleString('en-IN')
//console.log(`your Account balance has debited 1,200.00 your avalable balance is ${boi}`)


// *******************************************maths*******************************************
// console.log(Math.abs(-2))
// console.log(Math.ceil(4.658));
// console.log(Math.floor(3.125));
// console.log(Math.round(5.369));

// console.log(Math.round(Math.random()*10+1));
const min =1
const max = 6
console.log(Math.floor(Math.random()*(max - min + 1))+min)




