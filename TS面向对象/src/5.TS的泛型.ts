(function(){
//在定义函数或类时,遇到类型不明确的时候就可以使用泛型
//泛型会在调用时确定类型
//泛型可以同时指定多个
function fn<T,K> (a:T,b:K):T {
    console.log(b);
    return a;
};
//自动判断类型
fn(10,"hello");
//指定泛型的类型
fn<string,boolean>("hello",true);

interface Inter {
    length:number;
};
//泛型可以继承接口,就代表该泛型必须实现接口的规范
//或者说是表示泛型必须实现接口,或者子类
function fn2<T extends Inter>(a:T):number {
    return a.length;
};

console.log(fn2("hello"));
console.log(fn2({length:10}));
console.log(fn2([1,2,3]));


//类接收一个泛型
class Myclass<T> {
    name:T;
    constructor(name:T) {
        this.name = name;
    }
};
//可以为泛型指定类型
const swk:Myclass<string> = new Myclass("孙悟空");
const num:Myclass<number> = new Myclass(666);
// console.log(swk);
// console.log(num);
function fn3<T extends Myclass<string>> (a:T):string {
    return a.name;
}
console.log(fn3(swk));
// console.log(fn3(num));

})();
