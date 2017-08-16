/***List() 是一个构造方法，可以用于创建新的List数据类型，
 * 
 * 有两个静态方法
 * 1 List.isList(), 判断value是否属于List类型
 * 2 List.of(...values), 创建包含 ...values的列表
 */
import Immutable from 'immutable';

const $arr1 = Immutable.List([1, 2, 3]);//创建List数据类型
console.log('$arr1', $arr1);//=>[1,2,3]

const $arr2 = $arr1.set(-1, 0); //使用set方法修改其中的数据,-1代表的是list长度+index的值
console.log('$arr2', $arr2);//=>[1,2,0]

const $arr3 = $arr1.set(4, 0);//可以越界，长度为5
console.log('$arr3', $arr3);//=>[1,2,3,undefined,0]

const $arr4 = $arr1.delete(1);//delete方法删除数据
console.log('$arr4', $arr4); //=>[1,3]

const $arr5 = $arr1.insert(1,1.5);//insert
console.log('$arr5', $arr5); //=> [1,1.5,2,3];

const $arr6 = $arr1.clear();
console.log('$arr6', $arr6);//=>[]

const $arr7 = Immutable.List.isList($arr1);
console.log('$arr7', $arr7);//true

const $arr8 = Immutable.List.isList($arr6);
console.log('$arr8', $arr8);//true

const $arr9 = Immutable.List.isList([1,2,3,4]);
console.log('$arr9', $arr9);//false

const $arr10 = Immutable.List.of(1,2,3,4);
console.log('$arr10', $arr10);



