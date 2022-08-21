(function() {
    class Person{
        //私有属性只能在当前类中访问
        private _name:string;
        private _age:number;
        //protected 保护的属性,只能在当前类和子类中访问和修改
        protected protect:string;
        constructor(name:string,age:number) {
            this._name = name;
            this._age = age;
            this.protect = "保护";
        };
        //我们可以在类的内部定义方法来使得外部可以访问和修改私有的属性和方法
        //getter读取器
        get name():string {
            return this._name;
        };
        //setter(设置器)
        set name(value:string) {
            this._name = value;
        };
        get age():number {
            return this._age;
        };
        set age(value:number) {
            if(value < 0) {
                console.warn("age is not 负数");
                return;
            }
            this._age = value;
        };
    };
    class Student extends Person {
        constructor(name:string,age:number) {
            super(name,age);
        };
        _protect():void {
            console.log(this.protect);
        };
    }
    const swk:Person = new Person("孙悟空",18);
    const xxs:Student = new Student("小学生",9);
    xxs._protect();
    //swk的属性可以随意修改,可是我们不想让它可以被随意修改
    //如果对象中的属性可以随意修改,那么对象中的数据将会非常不安全
    // swk._name = "猪八戒";//属性“_name”为私有属性，只能在类“Person”中访问
    console.log(swk);
    swk.name = "猪八戒";
    swk.age = 38;
    console.log(swk);

    class A {
        //这样可以省略声明
        constructor(protected name:string,protected age:number) {
            this.name = name;
            this.age = age;
        };
    };
    const a:A = new A("a",1);
    console.log(a);
    
})();