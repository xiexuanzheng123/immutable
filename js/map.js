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

//console.log(map1);//{ a:1, b:2, c:3 }
//console.log(map2);//{ a:1, b:50, c:3 }

/**********************************************************
 * 
 * 使用set方法时候，对源数据没有任何更改，
 * 
 * 对上面的数据来说，b是变化的数据，map1和map2各自保留一份
 * b，而a和c则是不变的数据，可以实现map1和map2的a、c共享
 * 
 * *** ****************************************************/


 /**Map可以使用任何类型数据来作为key，并使用Immutable.is()方法来比较两个key是否相等 */

let key = Immutable.List.of(1);
let map = Immutable.Map().set(key, 'listofone');
let value = map.get(key);
//console.log(value);

//特殊情况,使用JavaScript中的引用类型数据不可以
//console.log(Immutable.Map().set({}, 1).get({}));//undefined

/****
 * Map包含两个静态方法：
 * 1 Map.isMap()
 * 2 Map.of()
*/
const $map1 = Immutable.Map({a: 1});
console.log('$map1', $map1); //Map {"a": 1}

const $map2 = $map1.set('a', 2);
console.log('$map2', $map2); //Map {"a": 2}

const $map3 = $map1.delete('a');
console.log('$map3', $map3);//{}

const $map4 = $map1.clear();

const $map5 = $map1.update('a', ()=>(2));
console.log('$map5', $map5);

const $map6 = Immutable.Map({b: 2});
const $map7 = $map1.merge($map6);//生成新的map

console.log('$map7', $map7);
