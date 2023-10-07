// const promiseone = new Promise(function (resolve,rejest){
//     setTimeout(function(){
//        console.log('asymnk promise has been created')
//        resolve()
//     },1000)
// })
// promiseone.then( function(){
//     console.log('promise one is consume')
// })


new Promise(function(resolve,rejest){
    setTimeout(function(){
        console.log(' asynk promise two is called')
        resolve({username: "Chai", email: "chai@example.com"})
    },1000)
}).then(function(){
    console.log('promise two consumed')
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})