/** @format */

//类型定义
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

const Make: Employee = {
  id: 1,
  name: "Make",
  //简写形式
  retire(data:Date) {
    console.log(data);
  }
};


//联合类型
type Weight = number | string;
function kg(weight:Weight) {
    //类型收窄
    return typeof weight === "number" ? weight / 2 : parseInt(weight) / 2;
};

//共用类型
type Draggable = {
    drag:() => void
};

type Resizable = {
    resize:() => void
};

type UIWidget = Draggable & Resizable;

const textBox:UIWidget = {
    drag() {},
    resize() {}
};

//字面量联合类型
type Quantity = 50 | 100;
type Metric = "cm" | "inch";

let amount:Quantity = 100;
let size:Metric = "inch";

//null的使用
function greet(name:string | null | undefined):void {
    if(name)
        console.log(`Hello,${name.toUpperCase()}!`);
    else
        console.log("Ola!");
};

greet("Make");
console.log("---------------------------------------------------------------");

//可选链操作符 ?.
type Customer = { birthday?:Date }; 
function getCustomer(id:number):Customer | null{
    return id ? { birthday:new Date() } : null; 
};
const customer = getCustomer(0);
console.log(customer);
//当customer不为null和undefined是访问之后的方法或者属性
console.log(customer?.birthday?.getFullYear());

const customers = [getCustomer(0),getCustomer(1)]; 
for(let i = 0;i < customers.length;i++) {
    console.log(customers?.[i]);
}
console.log("---------------------------------------------------------------");

//对函数也适用
let log:any = null; 
log?.('a');
log = (message:unknown) => {
    console.log(message);
    console.log(new Date());
};
log?.('a');
console.log("---------------------------------------------------------------");




