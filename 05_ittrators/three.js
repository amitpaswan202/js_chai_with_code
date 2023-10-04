///// for of loop


const arr  = [1 ,2,3,4,5,6,7,8,9]
pass = []
for(const val1 of arr){
    if(val1 >=5){
        pass.push(val1)
    }
    console.log(val1);
  
}
console.log(pass)