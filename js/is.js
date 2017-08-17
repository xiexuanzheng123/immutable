import Immutable from 'immutable';

const map1 = Immutable.Map({a: 1, b: 1, c: 1});
const map2 = Immutable.Map({a: 1, b: 1, c: 1});

// Immutable.assert(map1 !== map2);
// assert(map1 !== map2);
console.log(map1 == map2);//false
console.log(Immutable.is(map1, map2));//true
console.log(Object.is(map1, map2));//false

console.log(map1.equals(map2));//true
