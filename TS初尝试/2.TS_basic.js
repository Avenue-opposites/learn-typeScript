"use strict";
//声明一个变量,同时指定它的类型为number
let num;
num = 10;
num = 33;
//这样也行,在第一次赋值是TS会做类型检查,然后之后就只能使用第一次赋值的数据类型
let num1 = 1;
num1 = 2;
//num/num1 = 'hello';//不能将类型“string”分配给类型“number”。
let stra;
str = "hello";
let bool = true;
let obja = {};
let nul = null;
let unde = undefined;
let v = undefined;
let n;
let a1 = "任意类型";
let b1 = "安全的any";
// let arr:Array = [];
//指定函数参数类型,在参数后面加:type可以指定函数返回值的类型
function add(x, y) {
    return x + y;
}
;
console.log(add(1, 2)); // 3
