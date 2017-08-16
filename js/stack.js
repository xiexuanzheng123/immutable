import Immutable from 'immutable';

/*****可索引集合，使用unshift和shift来实现添加和删除元素 */

const $stack1 = Immutable.Stack([1, 2, 3]);
console.log($stack1);//Stack [1, 2, 3]

console.log($stack1.peek());//1

console.log($stack1.get(2));//3

console.log($stack1.has(2));//true

