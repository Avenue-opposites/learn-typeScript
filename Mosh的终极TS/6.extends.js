"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Teacher = exports.Student = exports.Person = void 0;
//定义人类
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Object.defineProperty(Person.prototype, "fullName", {
        get: function () {
            return this.firstName + " " + this.lastName;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.walk = function () {
        console.log("walking...");
    };
    Person.prototype.speak = function () {
        console.log("speaking...");
    };
    return Person;
}());
exports.Person = Person;
//extends继承
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(studentId, firstName, lastName) {
        var _this = 
        //调用父类的构造器
        _super.call(this, firstName, lastName) || this;
        _this.studentId = studentId;
        return _this;
    }
    Student.prototype.learnCourse = function (lesson) {
        console.log("have a " + lesson);
    };
    return Student;
}(Person));
exports.Student = Student;
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Teacher.prototype, "fullName", {
        //override重写
        get: function () {
            //在这里有一个问题,super指向父类的实例,但是使用了父类的属性丢失了
            // console.log("#",this.firstName,super.firstName);
            // super["firstName"] = this.firstName;
            // super["lastName"] = this.lastName;
            //调用父类的getter来进行重写
            return "Professor " + _super.prototype.fullName;
        },
        enumerable: false,
        configurable: true
    });
    return Teacher;
}(Person));
exports.Teacher = Teacher;
//polymorphism 多态:接受属于Person即以下的类
function printNames(people) {
    for (var _i = 0, people_1 = people; _i < people_1.length; _i++) {
        var person = people_1[_i];
        console.log(person.fullName);
    }
    ;
}
;
var Jack = new Student(1, "Jack", "Smith");
var John = new Teacher("John", "Smith");
// console.log(John);
// console.log(John.fullName);
printNames([Jack, John]);
