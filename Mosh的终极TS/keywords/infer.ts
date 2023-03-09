//infer 代表待推断类型，它的必须和 extends 条件约束类型一起使用。

//例子:
type Flatten<T> = T extends Array<infer V> ? V : T;
//Array<infer V>表示当T是一个数组时推断数组元素的类型,这个只有在使用时才能知道
type SubType1 = Flatten<string>;//string
type SubType2 = Flatten<Array<string | number>>;//string | number
/* 
    我们类型定义时并不能立即确定某些类型，
    而是在使用类型时来根据条件来推断对应的类型。
    需要注意的是 infer 关键字类型，必须结合 Conditional Types 条件判断来使用。
*/

//练习实现Parameters内置类型,它接受传入一个函数类型作为泛型参数并且会返回这个函数所有的参数类型组成的元组。
type MyParameters<T extends Function> = T extends (...args:infer P) => any ? P : never;

type Params1 = MyParameters<string>;
type Params2 = MyParameters<(a:string,b:number) => string>;

//练习实现ReturnType内置类型,它接收一个函数类型作为泛型参数标签返回函数的返回类型
type MyReturnType<T extends Function> = T extends (...args:any) => infer R ? R : never;

type User = {
    name:string;
    password:string;
}

type FReturnType1 = MyReturnType<() => any>;
type FReturnType2 = MyReturnType<() => User>;

