const marvel_hero = ['ironman','thor','captainAmerica','howkeye','blackwiddow','antman','falcon']

const dc_heros = ['superman','batman','wonderwomen','aquaman','bluebeatal','flash']

// const my_movies = marvel_hero.push(dc_heros)
const my_movies_concat = marvel_hero.concat(dc_heros)

const spread_heros = [...marvel_hero, ...dc_heros] ///// spead glash broken 

// console.log(marvel_hero);
// console.log(dc_heros);
// console.log(spread_heros);

// ++++++++++++++++++++++++++++ flat method ========================== array ke ander array ko 1 array me convert kar deta h
let another_Array = [1,2,3,4,5,[6,7,8],6,7,[8,9,10],8] ///// aaray inside an array
let real_Another_Array =  another_Array.flat(Infinity)
// console.log(another_Array);

console.log( Array.isArray('Amit'));
console.log( Array.from('Amit'));/////completed
