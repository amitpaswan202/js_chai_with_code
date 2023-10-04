// Immediately Invoked Function Expressions (IIFE)
function chai(){
    console.log('DB connected');
}
chai();

((name)=>{
    console.log(`DB connected chai with code ${name}`);
})("amit");

