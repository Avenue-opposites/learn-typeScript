# TypeScript(类型脚本)
* TypeScript其实是JavaScript的超集,把JavaScript的动态类型,变成了静态类型
    - 可以在任何支持JavaScript的平台执行
    - TS不能被JS解析器直接执行 
* TS编译器的使用方法
    - 编译一个TS文件 tsc xxx.ts
* TS的类型
    - 基本类型
        - number 任意数字
        - string 任意字符串
        - boolean 任意布尔值
        - any 任意类型 相当于对这个类型变量关闭了TS的类型检查
        - unknown 表示未知类型,类型安全的any
        - void 空值或undefined
        - never 没有值,并且不能是任何值
        - object 任意的js对象
        - Array 任意的js数组
        - tuple 元素,TS新增类型,固定长度数组
        - enum 枚举,TS中新增类型
        - 字面量 字面量类型就是必须和你写的值一样,例如:let a:10;a = 10 => a = 11;//报错
    - 复合类型
        - 联合类型  可以使用 | 来连接多个类型,例如:a:string | number;
            - 语法:变量:类型/字面量 | 类型/字面量;
        - 满足类型 可以使用 & 来连接多个类型,例如:a:string & number;
            - 语法:变量:类型/字面量 & 类型/字面量;  
        - 字面量对象 可以指定{}中必须有什么类型的属性,属性名后加?表示可选的例如:
            a:{name:string,age:number,gender?:boolean};
            [propName:类型]:类型 表示之后添加的属性名为什么类型,属性值为什么类型,例如:a:{name:string,[propName:string]:unknown};
            - 语法:变量:{属性值:属性值类型,[属性名:属性名类型]:属性值类型};
        - 函数类型结构 可以规定函数的形参个数和类型,以及返回值的类型 
            - 语法:变量:(形参:类型,形参:类型) => 类型; 
        - 类型数组 数组的元素必须为指定类型
            -  语法:变量:类型[]; 或者 变量:Array<类型>;
        - tuple(元组) 元组就是一个固定长度和元素类型的数组
            - 语法:变量:[类型,类型];
        - enum(枚举) 就是把所有情况表示出来
            - 语法:enum 枚举名 {属性 = 值,属性 = 值};
        - type(类型别名) 或者说是自定义类型
            - 语法:type 类型别名 = 类型;
        - 泛型:在定义函数或类时,遇到类型不明确的时候就可以使用泛型,泛型会在调用时确定类型
            - 泛型可以继承接口,就代表该泛型必须实现接口的规范
            - 泛型也可以继承类,类也可以使用泛型
            - 语法:
                1. 函数:function fn<泛型 extends 接口名> (参数:类型(可以是泛型)):类型(可以是泛型) {}
    - 类型断言
        - 会对值进行类型判断,判断通过再赋值(或者说是告诉编译器这个值是什么类型的)
            - 语法:变量 as 类型; 或者 <类型>变量;
* TS的配置文件
    - include(包含) 可以指定TS编译器要编译哪些文件
    - exclude(排除) 告诉TS编译器哪些文件不需要编译
        - 默认值:["node_modules","bower_components","jspm_packages"];
    - extends(继承) 可以指定继承配置文件  
    - compilerOptions(编译器选项) 
        - target(目标) 用来指定TS编译器编译的js文件的ES版本
        - module(模块) 用来指定模块化的语法,例如:commonJS,ES  
        - lib(库) 用来指定浏览器中需要使用的库 例如:dom,webworker
            - 默认值:[ES5、ES6/ES2015、ES7/ES2016、ES2017、ES2018、ES2019、ES2020、ESNext、D0M、
                WebWorker,ScriptHost,...];
        - outDir 用来指定编译之后的文件目录
        - outFile 用来指定编译之后的合并文件
        - allowJs 是否对JS文件进行编译
            - 默认值:false;
        - checkJs 是否对JS文件进行错误检查
            - 默认值:false;
        - removeComments 编译的文件是否保留注释
            - 默认值:false;
        - onEmit 不生成输出文件
            - 默认值:false;
        - onEmitOnError 报错时不生成输出文件
            - 默认值:false;
        - alwayScript 以严格模式解析并为每个源文件生成"use strict"语句
            - 默认值:false;
        - noImplicitAny 在表达式和声明上有隐含的any类型时报错。
            - 默认值:false;      
        - noImplicitThis 当this表达式的值为any类型的时候,生成一个错误。
            - 默认值:false;
        - strictNullChecks 严格检查空值     
            - 默认值:false;
        - strict 严格检查的总开关
            - 默认值:false;
* TS面向对象
    - 所谓面向对象就是所有操作需要通过对象来完成,在程序中一切皆对象
    - class(类)
        - 类就是对象的模型,通过类可以实例化对象
        - 语法:
            class 类名 {
                属性名:类型;
                constructor(参数:类型) {
                    this.属性名 = 参数;
                }
                方法名() {
                    //code
                }
                //定义实例只读属性(类访问无效)
                readonly 属性名:类型 = 属性值;
                //定义静态属性(类属性,实例访问无效)
                static 属性名:类型 = 属性值;
                //静态只读属性(只能通过类访问,且只读)
                static readonly 属性名:类型 = 属性值;
            };
            //子类继承
            class 类名 extends 类名 {
                属性名:类型;
                constructor(属性名:类型) {
                    //调用父类构造函数,并传参
                    super(属性名);
                    this.属性名 = 属性值;
                }
                方法名() {

                }
            };
        - readonly(只读) 
            - 语法:readonly 属性名:类型 = 属性值;
        - static(静态)
        - extends(继承):使用继承后子类会拥有父类的属性和方法
            - 语法:class 子类名 extends 父类名 {}
        - super(超类) 
            - 在子类实例的方法中super代表父类,super.的方式使用
            - 在子类构造函数中代表父类构造函数,super(属性名)的方式使用
        - abstract(抽象) 
            - 抽象类:抽象类就是用来被继承的类,不能使用new关键字实例化
                - 语法:abstract 类名 {}
            - 抽象方法:抽象方法只能在抽象类中,并且不能有具体实现,而且子类必须对象父类的抽象方法进行重写
                - 语法:abstract 方法名():void;
        - interface(接口):接口就是在定义类的时候去限制类的结构
            - 接口可以重复定义,最终会以合并接口为准
            - 接口也可以当成type的类型声明去使用
            - 接口中所有的属性和方法都不能有实际的值,类似于一个抽象大纲,只负责类型结构
            - 语法:interface 接口名 {}; 或者给类实现接口 class 类名 implements(实现) 接口名 {}
        - public(公共的):使用这个修饰符的属性和方法,可以随意更改,如果没有使用修饰符,默认加上public
            - public可以在任意位置访问包括子类
            语法:public 属性名:类型; 或者 public 方法名():类型 {};
        - private(私有的):使用这个修饰符的属性和方法,只能在当前类的内部修改和访问,子类也不可访问
            - 语法:private _属性名:类型; 或者 private _方法名():类型 {};
        - protected(保护):只能在当前类和子类中使用
            - 语法:protected 属性名:类型; 或者 protected 方法名():类型 {};
        - getter(访问器)
            - 我们可以在类的内部定义访问器方法来使得外部可以访问私有的属性和方法
            - 语法:get 属性/方法():类型 {
                return this._私有属性名/私有方法名
            };
        - setter(设置器)
            - 我们可以在类的内部定义设置器方法来使得外部可以修改私有的属性和方法
            - 语法:set 属性/方法(参数:类型):类型 {
                this._私有属性名/_私有方法名 = 参数;
            };