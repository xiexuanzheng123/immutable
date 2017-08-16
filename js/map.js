import Immutable from 'immutable';

let map1 = Immutable.Map({ a:1, b:2, c:3 });

/**
 * 
 * 执行下面这一步set方法时候，不会改变map1的内容，
 * 返回一个新的Map类型的数据map2
 * 
 * 执行之后map2的第二个参数改变
 */
let map2 = map1.set('b', 50);

console.log(map1);
console.log(map2);

/**********************************************************
 * 
 * 使用set方法时候，对源数据没有任何更改，
 * 
 * 对上面的数据来说，b是变化的数据，map1和map2各自保留一份
 * b，而a和c则是不变的数据，可以实现map1和map2的a、c共享
 * 
 * *** ****************************************************/