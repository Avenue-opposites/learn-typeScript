(function() {;
//定义动物类
//在类名之前写abstract表示抽象类 抽象类就是用来被继承的类,不能使用new关键字实例化
abstract class Animal {
    name:string;
    age:number;
    constructor(name:string,age:number) {
        this.name = name;
        this.age = age;
    }
    //定义抽象方法,方法“Bark”不能具有实现，因为它标记为抽象。
    //抽象方法只能在抽象类中,而且子类必须对象父类的抽象方法进行重写
    abstract Bark():void;
}
//定义继承子类
//子类实例的原型是父类的实例,所以子类实例的原型的原型就是父类的原型
class Dog extends Animal {
    sound:string;
    constructor(name:string,age:number,sound:string) {
        //调用父类构造函数
        super(name,age);
        this.sound = sound;
    }
    //对父类方法进行重写
    Bark():void {
        console.log(`狗叫:“${this.sound}”。`);
    }
}
class Cat extends Animal {
    sound:string;
    constructor(name:string,age:number,sound:string) {
        //调用父类构造函数
        super(name,age);
        this.sound = sound;
    }
    Bark():void {
        console.log(`猫叫:“${this.sound}”。`);
        
    }
}
const dog:Dog = new Dog("旺财",5,"汪汪汪");
const cat:Cat = new Cat("大饼",3,"喵喵喵");
console.log(dog);
dog.Bark();
console.log(cat);
cat.Bark();

})();



