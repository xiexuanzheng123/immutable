# immutable
We should use immutable to manage our data in react-redux  project, for that it can improve the speed of project

#### `Immutable.js` 的 API 主要包含以下几部分：

* `formJS()`，将 JavaScript Object 和 Array 彻底转换为 Immutable Map 和 List
* `is()`, `Object.is()`都是对值得比较
* `List`, 有序索引集
* `Map`, 无序Iterable，
* `OrderedMap`, 有序 Map，排序依据是数据的 set() 操作
* `Set`, 元素为独一无二的数据集合
* `OrderedSet`, 有序Set
* `Statck`, 有序集合，使用unshift()、shift()进行添加和删除。
* `Range()`, 返回一个Seq.Indexed类型的数据集合，该方法接受三个参数(start=1, end=infinity, step=1)，分别表示起点、终点和步长
* `Repeat()`, 返回一个 Seq.indexed 类型的数据结合，该方法接收两个参数 (value，times)，value 表示重复生成的值，times 表示重复生成的次数，如果没有指定 times，则表示生成的 Seq 包含无限个 value
* `Record()`, 用于衍生新的 Record 类，进而生成 Record 实例。Record 实例类似于 JavaScript 中的 Object 实例，但只接收特定的字符串作为 key，且拥有默认值
* `Seq`, 序列
* `Iterable`, 可以被迭代的（key, Value）键值对集合
* `Collection`, 创建Immutable数据结构的最基础的抽象类
