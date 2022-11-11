class Vehicle {
    constructor(protected _engine:string) {}
    get engine():string {
        return "getter " + this._engine;
    }
    start():void {
        console.log(this.engine + " start");
    }
    stop():void {
        console.log(this.engine +" start");
    }
}

class Car extends Vehicle {
    wheel:number = 4;
    override start():void {
        console.log(this._engine);
        console.log(this.engine);
        //super会丢失属性
        console.log(super._engine);
        console.log(super.engine);
        super.start();
    }
}

const bc = new Car("bc");
bc.start();
// console.log(bc.engine);
// bc.stop();