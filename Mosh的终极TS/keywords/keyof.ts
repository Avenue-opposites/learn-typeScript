/** @format */

//keyof 所谓 keyof 关键字代表它接受一个对象类型作为参数，并返回该对象所有 key 值组成的联合类型。
//例子:
interface User {
  name: string;
  password: string;
}
type UserKeys = keyof User; // => "name" | "password" 类型

const key: UserKeys = "name";

type AnyKeys = keyof any; // => string | number | symbol

//练习:我们希望实现一个函数。该函数希望接受两个参数，第一个参数为一个对象object，第二个参数为该对象的 key 。函数内部通过传入的 object 以及对应的 key 返回 object[key];
function getValue<O extends object, K extends keyof O>(obj: O, key: K): O[K] {
  return obj[key];
}

const people = { name: "陈清都" };

const pName = getValue(people,"name");
