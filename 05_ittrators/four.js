///// for in loops

const myObj = {
    "IN":"india",
    "UK": "united kindom",
    "MH" : "maharastra"
}

const myArray = ["india","united kindom","maharastra"]
// for (const kay of myObj) {
//     console,log(key)
    
// }
for (const key in myObj) {
    // console.log(myObj[key])
    console.log(`${key} is short form of ${myObj[key]}`)
   
}
for (const key in myArray) {
    // console.log(myObj[key])
    console.log(`${key} is positon hold by  ${myArray[key]}`)
   
}