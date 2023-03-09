//循环
/* 
    TypeScript 中同样存在对于类型的循环语法(Mapping Type)，
    通过我们可以通过 in 关键字配合联合类型来对于类型进行迭代。 
*/

//类型映射
interface IUser {
    name:string;
    password:string;
    individualitySignature?:string;
}

type User = {
    [key in keyof IUser]:IUser[key];
};

//练习:实现Required,Readonly,Partial内置工具类型;

type MyRequired<T> = {
    [K in keyof T]-?:T[K];
}

type RequiredUser = MyRequired<User>;

type MyReadonly<T> = {
    readonly [K in keyof T]:T[K];
}

type ReadonlyUser = MyReadonly<User>;

type MyPartial<T> = {
    [K in keyof T]?:T[K];
}

type PartialUser = MyPartial<User>;


//增强练习:实现Deep深度Partial,Readonly,Required类型

type DeepPartial<T> = {
    [K in keyof T]?:T[K] extends object ? DeepPartial<T[K]> : T[K];
}

type DeepReadonly<T> = {
    readonly [K in keyof T]?:T[K] extends object ? DeepReadonly<T[K]> : T[K];
}

type DeepRequired<T> = {
    [K in keyof T]-?:T[K] extends object ? DeepReadonly<T[K]> : T[K];
}



