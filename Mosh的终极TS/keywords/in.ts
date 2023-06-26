//in 操作符用于遍历目标类型的公开属性名。类似 for .. in 的机制。
//通常用于枚举类型和联合类型或者配合keyof使用,但是也可以用于基本类型

enum Direction {
    left,
    right,
    top,
    bottom
}
//遍历枚举
type DirectionMap = {
    [key in Direction]:string;
};

type Color = "red" | "green" | "blue";
//遍历联合类型
type ColorMap = {
    [key in Color]:string;
}

//基本类型:key指定
type Food = {
    [key in string]:string;
}
//这两种写法效果一样
type FoodMap = {
    [key:string]:string;
}

//遍历元组元素类型
type TupleType<T extends readonly any[]> = T[number];


// function a(p:{name:string,age:number}) {
//     if("name" in p) {

//     }
// }








