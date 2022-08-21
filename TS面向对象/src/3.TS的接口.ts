(function() {
    abstract class Animal implements Animal {
        name:string;
        age:number;
        constructor(name:string,age:number) {
            this.name = name;
            this.age = age;
        };
        // abstract Bark():void;
    };
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
    };
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
    };
    //接口就是在定义类的时候去限制类的结构,接口中所有的属性和方法都不能有实际的值,类似于一个抽象大纲,只负责类型结构
    //接口可以重复定义,最终会以合并接口为准
    //接口也可以当成type的类型声明去使用
    interface Animal {
        name:string;
        age:number;
        Bark():void;
    };
    const dog:Dog = new Dog("旺财",5,"汪汪汪");
    const cat:Cat = new Cat("大饼",3,"喵喵喵"); 
    console.log(dog);
    dog.Bark();
    console.log(cat);
    cat.Bark();

    
    interface myInterface {
        name:string;
        age:number;
    };
    interface myInterface {
        sound:string;
    };
    //以合并的接口为准
    const obj:myInterface = {
        name:"米锅",
        age:11,
        sound:"汪汪汪"
    };
    console.log(obj);
    
})();