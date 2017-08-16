import Immutable from 'immutable';

const $range1 = Immutable.Range();
console.log($range1);// Range {_start: 1, _end: Infinity, _step: 1, size: Infinity}

const $range2 = Immutable.Range(10);
console.log($range2);//Range {_start: 10, _end: Infinity, _step: 1, size: Infinity}

const $range3 = Immutable.Range(10, 20);
console.log($range3);//Range {_start: 10, _end: 20, _step: 1, size: 10}

const $range4 = Immutable.Range(10, 20, 3);
console.log($range4);//Range {_start: 10, _end: 20, _step: 3, size: 4}

const $re1 = Immutable.Repeat('foo');
console.log($re1); //Repeat {_value: "foo", size: Infinity}

const $re2 = Immutable.Repeat('foo', 3);
console.log($re2);//Repeat {_value: "foo", size: 3}

/**惰性计算的机制，结合Generat函数 */
// function* bigArr() {
//     for(let i=0; i<100000; i++) {
//         console.log(`bigArr(${i}): ${i}`);
//         yield i;
//     }
// }
// let arr = bigArr();

// for(let i=0; i<10; i++) {
//     console.log(arr.next());
// }