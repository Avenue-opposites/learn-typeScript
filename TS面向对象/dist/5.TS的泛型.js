"use strict";
(function () {
    //在定义函数或类时,遇到类型不明确的时候就可以使用泛型
    //泛型会在调用时确定类型
    //泛型可以同时指定多个
    function fn(a, b) {
        console.log(b);
        return a;
    }
    ;
    //自动判断类型
    fn(10, "hello");
    //指定泛型的类型
    fn("hello", true);
    ;
    //泛型可以继承接口,就代表该泛型必须实现接口的规范
    //或者说是表示泛型必须实现接口,或者子类
    function fn2(a) {
        return a.length;
    }
    ;
    console.log(fn2("hello"));
    console.log(fn2({ length: 10 }));
    console.log(fn2([1, 2, 3]));
    //类接收一个泛型
    class Myclass {
        constructor(name) {
            this.name = name;
        }
    }
    ;
    //可以为泛型指定类型
    const swk = new Myclass("孙悟空");
    const num = new Myclass(666);
    // console.log(swk);
    // console.log(num);
    function fn3(a) {
        return a.name;
    }
    console.log(fn3(swk));
    // console.log(fn3(num));
})();
