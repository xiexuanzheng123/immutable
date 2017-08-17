/*
    Seq有两个特点
    1 Immutable 一旦创建就不能被修改
    2 lazy 惰性求值
*/
import Immutable from 'immutable';
let oddSequares = Immutable.Seq.of(1, 2, 3, 4, 5, 6, 7, 8);
console.log(oddSequares);

let newSequares = oddSequares.filter(x => x % 2).map(x => x * x);
console.log(newSequares);

console.log(newSequares.get(1));
console.log(newSequares.filter(1));
