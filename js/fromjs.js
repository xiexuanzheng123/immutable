import Immutable from 'immutable';

/**
 * 这两种方法都支持数据的嵌套
 * 
 */

console.log(Immutable.fromJS([1, 2]));/**Convert array to List */

console.log(Immutable.fromJS({a: 1}));/**Convert object to Map */


/*
* 以下两种方法不支持数据嵌套
*
*/
console.log(Immutable.List([1, 2]));
console.log(Immutable.Map({a: 1}));

Immutable.fromJS({a: {b: [10, 20, 30]}, c: 40}, function(key, value) {
    console.log(key,value);
    let isIndexed = Immutable.Iterable.isIndexed(value);
    return isIndexed ? value.toList() : value.toOrderedMap();
});

// Immutable.fromJS({ a: {b: [10, 20, 30]}, c: 40}, function (key, value, path) {
//   console.log(key, value, path);
//   var isIndexed = Immutable.Iterable.isIndexed(value);
//   return isIndexed(value) ? value.toList() : value.toOrderedMap()
// });
