//所谓 is 关键字其实更多用在函数的返回值上，用来表示对于函数返回值的类型保护。
function isString(target:unknown):target is string {
    return typeof target === "string";
}

function setBracket<T extends string | number>(value:T):string {
    //类型保护,在该块下会获得string类型的方法和属性
    if(isString(value)) {
        return `{${value}}`;
    }
    // //剩下的就是number类型
    return "{" + value.toFixed() + "}";
}
setBracket<number>(1);
//所以，通常我们使用 is 关键字（类型谓词）在函数的返回值中，从而对于函数传入的参数进行类型保护。

//练习判断对象类型
function isObject(target: unknown): target is object {
    if (typeof target === "object" && target !== null) {
      return String(target) === "[object Object]";
    }
    return false;
}
