"use strict";
//object表示一个对象
let obj;
obj = {};
obj = function () { };
obj = [];
//以上这种使用方法不好,我们无法判断我们的对象是一个函数还是数组
//所以我们可以使用字面量类型对象 在属性名后面加?代表可选的
let obj1;
// obj1 = {};//类型 "{}" 中缺少属性 "name"
// obj1 = {name:1};//不能将类型“number”分配给类型“string”。
obj1 = { name: "阿修罗", age: 20 };
obj1 = { name: "阿修罗", age: 20, gender: true };
//[propName:string]:any/unknown 可以添加表示任意类型的属性
let obj2;
obj2 = { name: "帝释天", age: 18, gender: null };
//如果我们想要一个有规则的函数,可以给函数制定结构
//规定这个函数必须有两个参数,且类型为number,返回值也为number
let fn;
// fn = function(x:string,y) {  //不能将类型“(x: string, y: number) => string”分配给类型“(a: number, b: number) => number”。
//     return x + y;            //参数“x”和“a” 的类型不兼容。
// };
// fn = function(x,y,z) {   //不能将类型“(x: any, y: any, z: any) => any”分配给类型“(a: number, b: number) => number”。
//     return x + y + z;
// };
fn = function (x, y) {
    return x + y;
};
fn(1, 2);
//类型数组 变量:类型[]; 或者 变量:Array<类型>;
let strArr1; //字符串数组
let strArr2; //字符串数组
let numArr1; //数字数组
let numArr2; //数字数组
strArr1 = ["one", "two"];
strArr2 = ["three", "four"];
numArr1 = [1, 2, 3];
numArr2 = [4, 5, 6];
//tuple(元组) 元组就是一个固定长度和元素类型的数组
let tuple1;
let tuple2;
//tuple = ["str1","str2","str3"];//不能将类型“[string, string, string]”分配给类型“[string, string]”。源具有 3 个元素，但目标仅允许 2 个。
tuple1 = ["str1", "str2"];
tuple2 = ["str", 666, true];
//enum(枚举) 就是把所有情况表示出来
// enum 枚举名 {属性 = 值,属性 = 值};
var Gender;
(function (Gender) {
    Gender[Gender["man"] = 1] = "man";
    Gender[Gender["woman"] = 0] = "woman";
})(Gender || (Gender = {}));
;
let e;
e = {
    name: "阿修罗",
    age: 20,
    gender: Gender.man
};
// &表示且的意思,和JS的&&一样 
let j;
j = { name: "帝释天", age: 18 };
let m;
m = 1;
