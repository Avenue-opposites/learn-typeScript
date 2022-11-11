var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//装饰器
function Pipe(constructor) {
    console.log("pipe decorators called.");
    constructor.prototype.pipe = true;
}
;
//装饰器工厂
function Component(options) {
    //装饰器
    return function (constructor) {
        console.log("Component decorator called.");
        constructor.prototype.uniqueId = Date.now();
        constructor.prototype.options = options;
        constructor.prototype.mount = function (parent) {
            console.log("mounting ".concat(parent));
        };
    };
}
;
//类装饰器,调用顺序从下到上
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent = __decorate([
        Component({ selector: "#root" }),
        Pipe
    ], ProfileComponent);
    return ProfileComponent;
}());
var component = new ProfileComponent();
console.log(component);
// component.mount(null);
function Log(target, methodName, descriptor) {
    console.log("Log decorator called.");
    console.log("#", descriptor);
    var original = target[methodName];
    target[methodName] = function () {
        var rest = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            rest[_i] = arguments[_i];
        }
        console.log("当前时间为: " + new Date());
        return original.call.apply(original, __spreadArray([this], rest, false));
    };
}
;
//参数,原型对象和方法名,以及描述符
function Capitalize(target, methodName, descriptor) {
    console.log("Capitalize decorator called.");
    var original = descriptor.get;
    descriptor.value = function () {
        var result = original === null || original === void 0 ? void 0 : original.call(this);
        return typeof result === "string" ? result.toUpperCase : result;
    };
}
;
//属性装饰器,参数：原型对象和属性名
function MinLength(length) {
    console.log("MinLength decorator called.");
    return function (target, propName) {
        var value;
        var descriptor = {
            get: function () {
                return value;
            },
            set: function (v) {
                if (v.length >= 1) {
                    value = v;
                }
                else {
                    throw new Error("".concat(propName, " should be at least ").concat(length, "!"));
                }
            },
            configurable: true,
            enumerable: true
        };
        Object.defineProperty(target, propName, descriptor);
    };
}
var WatchedParameters = [];
//参数装饰器
function Watch(target, methodName, parameterIndex) {
    WatchedParameters.push({ methodName: methodName, parameterIndex: parameterIndex });
}
;
var Dog = /** @class */ (function () {
    function Dog(firstName, lastName) {
        this.lastName = lastName;
        this.firstName = firstName;
    }
    Object.defineProperty(Dog.prototype, "fullName", {
        //getter装饰器
        // @Capitalize
        get: function () {
            return "".concat(this.firstName, " ").concat(this.lastName);
        },
        enumerable: false,
        configurable: true
    });
    //方法装饰器,实例方法时target是原型对象,静态方法时是构造函数
    Dog.prototype.bark = function () {
        console.log("bark...");
    };
    Dog.whetherKill = function (isKill) {
        if (isKill)
            console.log("Dog already endangered.");
        else
            console.log("Dog also good living...");
    };
    __decorate([
        MinLength(1)
    ], Dog.prototype, "firstName");
    __decorate([
        Log
    ], Dog.prototype, "bark");
    __decorate([
        Log,
        __param(0, Watch)
    ], Dog, "whetherKill");
    return Dog;
}());
var dog = new Dog("mosh", "hamedani");
// console.log(dog.firstName);
console.log(WatchedParameters);
// dog.bark();
// Dog.whetherKill(false);
