"use strict";
(function () {
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        ;
    }
    ;
    class Dog extends Animal {
        constructor(name, age, sound) {
            //调用父类构造函数
            super(name, age);
            this.sound = sound;
        }
        //对父类方法进行重写
        Bark() {
            console.log(`狗叫:“${this.sound}”。`);
        }
    }
    ;
    class Cat extends Animal {
        constructor(name, age, sound) {
            //调用父类构造函数
            super(name, age);
            this.sound = sound;
        }
        Bark() {
            console.log(`猫叫:“${this.sound}”。`);
        }
    }
    ;
    ;
    const dog = new Dog("旺财", 5, "汪汪汪");
    const cat = new Cat("大饼", 3, "喵喵喵");
    console.log(dog);
    dog.Bark();
    console.log(cat);
    cat.Bark();
    ;
    ;
    //以合并的接口为准
    const obj = {
        name: "米锅",
        age: 11,
        sound: "汪汪汪"
    };
    console.log(obj);
})();
