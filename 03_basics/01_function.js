
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);

function notify (username){

    // if(username === undefined){
    //     console.log("please enter an username")
    //     return
    // }
    
    if(!username){
        console.log("please enter an username")
        return
    }
    return `${username} is just logged in`


}
// console.log(notify());


function calculateCartPrice (val1,val2,...num1){
    return num1
}
// console.log(calculateCartPrice(200,2.0,45))
const user = {
    username: "amit",
    prices: 199
}
function handleObject (anyobject){
    console.log(`username is ${anyobject.username} and the price is ${anyobject.prices}`)
}
handleObject(user)

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));