//extends 关键字在不同的场景有不同的功能

//1.继承(inheritance)
class Person {};
class Student extends Person {};

//2.泛型约束(Generic constraint):将类型限制在一定范围
function fn<T extends string | number>(param:T):T {
    return param;
};
fn("h");
fn(123);
// fn(true);//error

//3.条件类型(Conditional Types):一个三元表达式
type isString<T> = T extends string ? true : false;
type True = isString<"str">;
type False = isString<123>;
//这里的 T extends string 更像是一种判断泛型 T 是否满足 string 的判断，和之前所讲的泛型约束完全不是同一个意思。
//其次，需要注意的是条件类型 a extends b ? c : d 仅仅支持在 type 关键字中使用。