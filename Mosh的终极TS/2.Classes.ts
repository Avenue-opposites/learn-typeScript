/** @format */

//定义账户类
class Account {
  // //定义属性类型和权限
  // readonly id:number;//只能读取
  // owner:string;
  // private _balance:number;//只能在该类内部进行访问
  // nickname?:string;
  // //构造器
  // constructor(id:number,owner:string,balance:number) {
  //     this.id = id;
  //     this.owner = owner;
  //     this._balance = balance;
  // }

  /* 简写自动生成构造语句 */
  nickname?: string;
  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number
  ) {}
  //定义存钱的方法
  deposit(amount: number): void {
    if (amount > 0) this._balance += amount;
    else throw new Error("Invalid amount");
  }
  //定义查看存款的方法
  //   getBalance(): number {
  //     return this._balance;
  //   }

  /* 使用getter访问 */
  get balance():number {
    return this._balance;
  }
  //计算税收的方法
  private calculateTax(): number {
    const { _balance: balance } = this;
    return balance > 5000 ? balance * 0.05 : 0;
  }
}

const pzjTheAccount = new Account(1, "pzj", 27.4);
pzjTheAccount.nickname = "我即是道";
pzjTheAccount.deposit(100);
console.log("balance:" + pzjTheAccount.balance + "￥");
console.log(pzjTheAccount);
