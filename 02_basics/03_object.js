 const newsymbol = Symbol("key1") ////symbol reference
const myobj = {

name: "amit",
[newsymbol] : "mykey1",///// symbol creation  syntaxt
lastName: "paswan",
email:"amitpaswan@gmail.com",
isLoggedIn: false

}
// Object.freeze(myobj)
// myobj.name = "bablue"
// console.log(typeof myobj[newsymbol]);
console.log(myobj);
myobj.greating = function (){
    console.log(`welcome to our cource of the js, MR. ${this.name}`);
}
console.log(myobj.greating())