"use strict";
//使用class关键字来定义一个类
var Gender;
(function (Gender) {
    Gender[Gender["man"] = 1] = "man";
    Gender[Gender["woman"] = 0] = "woman";
})(Gender || (Gender = {}));
class Person {
    //构造函数 new的时候自动调用
    constructor(name, age, gender) {
        //定义只读属性,只能通过实例读取,不能通过类读取
        this.habit = "左撇子";
        //定义实例属性
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    //定义实例方法
    sayHello(name) {
        console.log(`hello,${name}`);
    }
    ;
    //静态方法(类方法)
    static sayHello() {
        console.log(`hello,I'm ${this.Name}`);
    }
    ;
}
//静态属性(类属性)
Person.Name = "Person";
;
const people = new Person("我即是道", 18, Gender.man);
const xiaoxiao = new Person("笑笑", 16, Gender.woman);
console.log(people);
console.log(xiaoxiao);
// console.log(Person.Name);
// console.log(people.read);
Person.sayHello();
people.sayHello(xiaoxiao.name);
xiaoxiao.sayHello(people.name);
