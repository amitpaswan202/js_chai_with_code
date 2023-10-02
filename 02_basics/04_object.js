/// object declaration two type
//1 singleton   --- const myobj = new Object()
//2 leteral    ------- const  myobj = {}

const tinder = {}
tinder.id = '123abc'
tinder.name= 'amit'
tinder.isLoggedIn = false
// console.log(tinder)

let Obj1 = {
    1:"A",
    2:"B"
}
let Obj2 = {
    1:"c",
    2:"d"
}
let Obj3 = Object.assign({},Obj1,Obj2)
// console.log(Obj3)

/////////////////////////////    object destructuring                    ////////////////////////////////////

const course = {
    Name: "js in hindi",
    Price: "999",
    Instructor: "amit"
}

console.log(course.Instructor)

// const {Instructor:ins,Price,Name} = course
const {Instructor,Price,Name} = course
console.log(Price)