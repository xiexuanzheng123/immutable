import Immutable from 'immutable';

/**Set中没有重复值 */
const $set1 = Immutable.Set([1, 2, 3]);
console.log($set1); // => Set { 1, 2, 3 }

const $set2 = $set1.add(1).add(4);//此时添加1是不可以的，，因为set中不可以有重复值
console.log($set2);// => {1, 2, 3, 4}

const $set3 = $set1.delete(3);
console.log($set3);// => {1, 2}

/***使用set的union 方法来实现两个set的并集 */
const $set4 = Immutable.Set([2, 3, 4, 5, 6]);
const $set5 = $set1.union($set4); //注意前后顺序
console.log($set5);//{1, 2, 3, 4, 5, 6} 

/****使用set的intersect方法来实现交集 */
const $set6 = $set1.intersect($set4);
console.log($set6); //{3, 2} 顺序?

/****差集 */
const $set7 = $set1.subtract($set4);
console.log($set7);//{1}

