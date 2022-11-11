import { Teacher,Person } from "./6.extends";
//Generics(泛型)
//泛型类
class KeyValuePair<K,V> {
    constructor(public key:K,public value:V) {}
}
//在使用时指定类型
const pair1 = new KeyValuePair<number,string>(1,"Apple");
const pair2 = new KeyValuePair<string,string>("2","pear");

//泛型函数
class ArrayUtils {
    static wrapInArray<T>(...rest:T[]):T[] {
        return rest;
    }
}

const arr = ArrayUtils.wrapInArray<number>(1,2,3,4,5,6,7,8,9,10);
console.log(arr);

//泛型接口
interface ResponseResult<T> {
    data:T | null;
    error:string | null;
}
interface User {
    username:string;
    password:string;
}
interface Product {
    brand:string;
    name:string;
    price:number
}
function fetch<T>(url:string):ResponseResult<T> {
    console.log(`fetching --> ${url}`);
    return {
        data:null,
        error:null
    }
}

const user = fetch<User>("https://www.bilibili.com/video");
const product = fetch<Product>("https://www.bilibili.com/video");
user.data?.username;
product.data?.brand;

//泛型约束
type SN = string | number;
function echo<T extends SN | User| Person | null>(value:T):T {
    console.log(value);
    return value;
};
echo<number>(1);
echo<User>({username:"pzj",password:"123456789"});
echo<Person>(new Teacher("只","因"));


//泛型类和继承
class Store<T> {
    protected _shelfGoods:T[] = [];
    get shelfGoods():T[] {
        return this._shelfGoods;
    }
    add(goods:T):void {
        this.shelfGoods.push(goods);
    }
    //泛型限制
    find(property:keyof T,value:unknown):T | undefined {
        return this._shelfGoods.find(goods => goods[property] === value);
    }
}
class CompressibleStore<T> extends Store<T> {
    compress() {
        console.log("compressing...");
    }
}
//泛型扩展
class SearchableStore<T extends {name:string}> extends Store<T> {
    override find(name:keyof T):T | undefined {
        return this._shelfGoods.find(goods => goods.name === name);
    }
}

const store = new Store<Product>();
store.add({brand:"Apple",name:"iPhone13",price:5400});
console.log(store.find("brand","Apple"));


//类型映射(type Map)
interface IdCard {
    id:string;
    host:string;
}

type ReadOnlyIdCard = {
    //使用 in keyof获取接口的属性和类型
    readonly [Property in keyof IdCard]:IdCard[Property];
}

let idCard:IdCard = {
    id:"123",
    host:"pzj",
};
//可以修改
idCard.host= "555";
//赋值给另一个只读类型
let readonlyIdCard:ReadOnlyIdCard = idCard;

