//逆变(inverse)

/* 首先我们先来了解什么是类型兼容 */
let a: { name: string; age: number } = { name:"陈清都",age:10000 };
let b: { name: string } = { name:"陈平安" };

b = a;//简单来说就是,a的类型完全包容b的类型(大包小),这就是类型兼容

/* 逆变(多包少) */
let fn1!:(a:string,b:number) => void;
let fn2!:(a:string,b:number,c:boolean) => void;
//TS函数重载正是利用了这一点,多种声明,只需一种实现

fn2 = fn1;//这种和以上的情况相反
/*
    就比如上述函数的参数类型赋值就被称为逆变，
    参数少（父）的可以赋给参数多（子）的那一个。
    看起来和类型兼容性（多的可以赋给少的）相反，
    但是通过调用的角度来考虑的话恰恰满足多的可以赋给少的兼容性原则。
*/

//再看一个例子：
class Parent {};
class Son extends Parent{ 
    public name:string = "son";
};
class GrandSon extends Son {
    public age:number = 18; 
};

function someThing(callback:(param:Son) => any):void {
    //传递的是Son的实例
    callback(new Son());
};

someThing((param:Parent) => param);//correct
someThing((param:GrandSon) => param);//error
//GrandSon比Son多一个age属性,因为逆变关系不允许参数多赋值给少的



