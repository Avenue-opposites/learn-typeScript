//字面量类型,指定什么就只能是什么,有点像常量const
let a:10;
a = 10;
//a = 11;//不能将类型“11”分配给类型“10”。

//可以使用 | 来连接多个类型;(联合类型)
let or:"true" | "flase";
or = "true";
or = "flase";
// or = true;//不能将类型 true 分配给类型“ "true" | "flase" ”。

let b:string | boolean;
b = true;
b = "hello";
// b = 1;//不能将类型“1”分配给类型“string | boolean”。

let any1:any;//显式any
any1 = 1;
any1 = "hello";
any1 = true;
let any2;//隐式any
any2 = 1;
any2 = "hello";
any2 = true;

//unknown表示未知类型的值,其实它是一个安全的any,unknown类型的变量不能直接赋值给其他类型的变量
let un:unknown;
un = "hello";
let str:string = "string";
// str = un;//不能将类型“unknown”分配给类型“string”。
//如果对象unknown类型的变量进行显式的类型判断,就可以赋值
if(typeof un === 'string') {
    str = un;//可以赋值了
}
//如果不信写if判断,可以使用以下这种方法
//TS类型断言 用来告诉解析器变量的实际类型
str = un as string;//当un类型为string才会赋值,相当于上面if判断的语法糖 
str = <string>un;//这个和上面的是一样的,只不过写法不同,这个习惯哪个就用哪个

//void代表空的 表示函数没有返回值
function fn1():void {
    //没有返回值默认是void
    return undefined;
    return;//和上面一样
    // return null;//不能将类型“null”分配给类型“void”。
    // return true;//不能将类型“boolean”分配给类型“void”。
};
//never类型表示没有结果 比如:程序出错终止
function fn2():never {
    throw "error";//只有在程序出错的时候才不会返回,就没有了可访问终点
    //返回“never”的函数不能具有可访问的终结点。
};