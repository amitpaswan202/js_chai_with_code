
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
console.log(notify());