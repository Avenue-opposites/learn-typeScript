//定义人类
class Person {
    constructor(public firstName:string,public lastName:string) {}
    get fullName():string {
        return this.firstName + " " + this.lastName;
    }
    walk():void {
        console.log("walking...");
    }
    speak():void {
        console.log("speaking...");
    }
}
//extends继承
class Student extends Person {
    constructor(public studentId:number,firstName:string,lastName:string) {
        //调用父类的构造器
        super(firstName,lastName);
    }
    learnCourse(lesson:string):void {
        console.log("have a " + lesson);
    }
}

class Teacher extends Person {
    //override重写
    override get fullName():string {
        //在这里有一个问题,super指向父类的实例,但是使用了父类的属性丢失了
        // console.log("#",this.firstName,super.firstName);
        // super["firstName"] = this.firstName;
        // super["lastName"] = this.lastName;
        //调用父类的getter来进行重写
        return "Professor " + super.fullName;
    }
}



//polymorphism 多态:接受属于Person即以下的类
function printNames(people:Person[]):void {
  for (const person of people) {
    console.log(person.fullName);
  };
};
const Jack = new Student(1,"Jack","Smith");
const John = new Teacher("John","Smith");
// console.log(John);
// console.log(John.fullName);
printNames([Jack,John]);

export {
    Person,
    Student,
    Teacher
}
