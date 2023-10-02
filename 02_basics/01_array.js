// ++++++++++++++++ array declairation ++++++++++++++++++++++
const myArray = [25,35,64,25,69,]
const myHero = ["saktiman","nagraj"]
const myArray2 = new Array("hello",25,"for",85)
// console.log(myArray[2]);
// console.log(myArray2);

// +++++++++++++++++++++++++++ Array methods +++++++++++++++++

// myArray.push(78)
// myArray.pop()
// myArray.push(98)
// myArray.push(35)
// myArray.push(55)
// myArray.push(57)
// myArray.push(10)
// myArray.push(11)
// myArray.push(12)
// myArray.push(13)
// myArray.push(14)
// myArray.pop()

// myArray.unshift(13)
// myArray.unshift(35)
// myArray.shift()
const newArr = myArray.join()   /// conver array to string 
console.log(myArray);
const mySlice = myArray.slice(0, 3) ///// its create range of value but not inclusive
const mySplice = myArray.splice(0, 2)
//  console.log(myArray);
 console.log(`this is slice = ${mySlice}`);
 console.log(`this is splice = ${mySplice}`);
 console.log(`this is orginal = ${myArray}`);