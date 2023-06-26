const obj_normal = {
    name:"陈清都",
    age:10000
};
const obj_const = {
    name:"陈清都",
    age:10000
} as const;

type obj_normal = typeof obj_normal;//通常为基本类型

type obj_const = typeof obj_const;//加上const,变为只读属性,并且类型指定

const arr_normal = ["A","B","C"];
const arr_const = ["A","B","C"] as const;

type arr_normal = typeof arr_normal;
type arr_const = typeof arr_const;
