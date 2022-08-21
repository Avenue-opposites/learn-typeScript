//声明一个变量,同时指定它的类型为number
let num:number;
num = 10;
num = 33;
//这样也行,在第一次赋值是TS会做类型检查,然后之后就只能使用第一次赋值的数据类型
let num1 = 1;
num1 = 2;
//num/num1 = 'hello';//不能将类型“string”分配给类型“number”。
let stra:string;
stra = "hello";
let bool:boolean = true;
let obja:object = {};
let nul:null = null;
let unde:undefined = undefined;
let v:void = undefined;
let n:never;
let a1:any = "任意类型";
let b1:unknown = "安全的any";
// let arr:Array = [];

//指定函数参数类型,在参数后面加:type可以指定函数返回值的类型
function add(x:number,y:number):number {
    return x + y;
};
console.log(add(1,2));// 3


