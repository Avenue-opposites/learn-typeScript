//协变(covariant)
//函数类型赋值兼容时函数的返回值就是典型的协变场景

//例子:
let fn1!:(a:string,b:number) => string;
let fn2!:(a:string,b:number) => string | number | boolean;

fn2 = fn1;//correct,因为fn1返回类型兼容fn2返回类型
fn1 = fn2;//error


