import Immutable from 'immutable';


/**
 * 这两种方法都支持数据的嵌套
 * 
 */

/**Convert array to List */
console.log(Immutable.fromJS([1, 2]));

/**Convert object to Map */
console.log(Immutable.fromJS({a: 1}));


/*
*以下两种方法不支持数据嵌套
*/
console.log(Immutable.List([1, 2]));
console.log(Immutable.Map({a: 1}));


