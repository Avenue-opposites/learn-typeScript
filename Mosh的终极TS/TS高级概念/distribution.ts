//分发(distribution):即在做条件类型的时候泛型传入联合类型,这样会将每个类型进行判断,将最终类型为每次判断的结果的联合类型
//例子：
type GetType<T extends string | number> = T extends string ? "a" : "b";
type AType = GetType<string>; //"a"
type BType = GetType<number>;//"b"
type ABType = GetType<string | number>;//"a" | "b"

/*
我们抛开晦涩的概念来解读分发，
结合上边的 Demo 来说所谓的分发简单来说就是分别使用 string 和 number 这两个类型进入 GetSomeType 中进行判断，
最终返回两次类型结果组成的联合类型。
*/

//首先，毫无疑问分发一定是需要产生在 extends 产生的类型条件判断中，并且是前置类型。
//其次，分发一定是要满足联合类型，只有联合类型才会产生分发（其他类型无法产生分发的效果，比如 & 交集中等等）。
//最后，分发一定要满足所谓的裸类型中才会产生效果。
type GetSomeType<T extends string | number> = T[] extends string[] ? "a" : "b"; 
type A_type = GetSomeType<string>;//"a"
type B_type = GetSomeType<number>;//"b"
type AB_type = GetSomeType<string | number>;//"a",因为T[]不是一个裸类型,所以只有一次判断

//练习自己尝试Exclude(一般用于联合类型),Extract,NonNullable内置类型
type Direction = "left" | "right" | "top" | "bottom";
type MyExclude<T,U> = T extends U ? never : T;//排除类型
type ExceptLeftDirection = MyExclude<Direction,"left">;//"right" | "top" | "bottom"
/* 
解析:当T为联合类型是就会触发分发效果,
    联合类型中的每个类型依次进入判断,
    命中的类型为never即排除,合成最终的类型。
*/
type MyExtract<T,U> = T extends U ? T : never;//提取类型
type Left = MyExtract<Direction,"left">; 

type MyNonNullable<T> = T extends null | undefined ? never : T;//非空类型
type NonNullDirection = MyNonNullable<ExceptLeftDirection | Left | null | undefined>;


type User = {
    name:string;
    age:number;
}
//忽略指定的键值,形成新的类型
type MyOmit<T,K extends keyof T> = {
    [P in MyExclude<keyof T,K>]:T[P]
}

type U = MyOmit<User,"age">;

type MyPick<T,K extends keyof T> = {
    [P in K]:T[P];
} 

type u = MyPick<User,"name">;


