// Immediately Invoked Function Expressions (IIFE)
function chai(){
    console.log('DB connected');
}
chai();///////////  collumn is important othrwise code htrow and error

((name)=>{
    console.log(`DB connected chai with code ${name}`);
})("amit");

// (()=>{})();