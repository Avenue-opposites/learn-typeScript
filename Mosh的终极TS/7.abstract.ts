//抽象类
abstract class Shape {
    constructor(public color:string) {};
    //抽象方法,只能有描述,不能有实现
    abstract render():void;
}
//子类必须实现继承自抽象类的抽象属性和抽象方法
class Circle extends Shape {
    constructor(public radius:number,color:string) {
        super(color);
    }
    render() {
        console.log("rendering a circle.");
    }
}

// const shape = new Shape("red");
const circle = new Circle(100,"red");
circle.render();