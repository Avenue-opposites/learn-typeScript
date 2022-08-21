//使用class关键字来定义一个类
enum Gender {
    man = 1,
    woman = 0
}
class Person {
    //实现属性必须先声明
    name:string;
    age:number;
    gender:Gender;
    //构造函数 new的时候自动调用
    constructor(name:string,age:number,gender:Gender) {
        //定义实例属性
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    //定义只读属性,只能通过实例读取,不能通过类读取
    readonly habit:string = "左撇子";
    //静态属性(类属性)
    static readonly Name:string = "Person";
    //定义实例方法
    sayHello(name:string):void {
        console.log(`hello,${name}`);
        
    };
    //静态方法(类方法)
    static sayHello():void {
        console.log(`hello,I'm ${this.Name}`);
        
    };
};
const people = new Person("我即是道",18,Gender.man);
const xiaoxiao = new Person("笑笑",16,Gender.woman);

console.log(people);
console.log(xiaoxiao);

// console.log(Person.Name);
// console.log(people.read);
Person.sayHello();
people.sayHello(xiaoxiao.name);
xiaoxiao.sayHello(people.name);



