type ComponentOptions = {selector:string};
//装饰器
function Pipe(constructor:Function) {
    console.log("pipe decorators called.");
    constructor.prototype.pipe = true;
};
//装饰器工厂
function Component(options:ComponentOptions) {
    //装饰器
    return (constructor:Function) => {
        console.log("Component decorator called.");
        constructor.prototype.uniqueId = Date.now();
        constructor.prototype.options = options;
        constructor.prototype.mount = function(parent:HTMLElement | null) {
            console.log(`mounting ${parent}`);
        }
    }
};


//类装饰器,调用顺序从下到上
@Component({selector:"#root"})
@Pipe
class ProfileComponent {}

const component = new ProfileComponent();
console.log(component);
// component.mount(null);

function Log(target:any,methodName:string,descriptor:PropertyDescriptor) {
    console.log("Log decorator called.");
    console.log("#",descriptor);
    const original = target[methodName] as Function;
    target[methodName] = function(...rest:any):any {
        console.log("当前时间为: "+ new Date());
        return original.call(this,...rest);
    };
};
//参数,原型对象和方法名,以及描述符
function Capitalize(target:any,methodName:string,descriptor:PropertyDescriptor) {
    console.log("Capitalize decorator called.");
    const original = descriptor.get;
    descriptor.value = function() {
        const result = original?.call(this);
        return typeof result === "string" ? result.toUpperCase : result;
    }
};

//属性装饰器,参数：原型对象和属性名
function MinLength(length:number) {
    console.log("MinLength decorator called.");
    return (target:any,propName:string) => {
        let value:string;
        const descriptor:PropertyDescriptor = {
            get():string | undefined {
                return value;
            },
            set(v:string) {
                if(v.length >= 1) {
                    value = v;
                }else {
                    throw new Error(`${propName} should be at least ${length}!`);
                }
            },
            configurable:true,
            enumerable:true
        };
        Object.defineProperty(target,propName,descriptor);
    }
}

type WatchedParameter = {
    methodName:string;
    parameterIndex:number;
};
const WatchedParameters:WatchedParameter[] = [];
//参数装饰器
function Watch(target:any,methodName:string,parameterIndex:number) {
    WatchedParameters.push({methodName,parameterIndex});
};

class Dog {
    @MinLength(1)
    firstName:string;
    constructor(firstName:string,public lastName:string) {
        this.firstName = firstName;
    }
    //getter装饰器
    // @Capitalize
    get fullName():string {
        return `${this.firstName} ${this.lastName}`;
    }
    //方法装饰器,实例方法时target是原型对象,静态方法时是构造函数
    @Log
    bark() {
        console.log("bark...");
    }
    @Log
    static whetherKill(@Watch isKill:boolean) {
        if(isKill) 
            console.log("Dog already endangered.");
        else
            console.log("Dog also good living...");
    }
}

const dog = new Dog("mosh","hamedani");
// console.log(dog.firstName);
console.log(WatchedParameters);

// dog.bark();
// Dog.whetherKill(false);


