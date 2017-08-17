import Immutable from 'immutable';

/*****类似于ES6中的Class */


/***1创建React实例 */
const A = Immutable.Record({a: 1, b: 2});
const r = new A({a: 3});
console.log(r);// => Record { "a": 3, "b": 2 }

/****2 删除实例属性 */
const rr = r.remove('a');
console.log(rr);//删除实例属性后，留下的是原来的属性

/***Record具有扩展性*/

class ABRecord extends Immutable.Record({a: 1, b: 2}) {
    getAB() {
        return this.a + this.b;
    }
}
var myRecord = new ABRecord({b: 3});
myRecord.getAB();