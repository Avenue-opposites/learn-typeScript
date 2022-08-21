//定义Food类
export default class Food {
    //定义一个属性表示食物的元素
    protected element:HTMLElement;
    constructor() {
        //获取页面中id为foodHTML元素,并将其赋值给element属性
        this.element = document.getElementById("food")!;
    };
    //定义获取食物X坐标的方法
    get X():number {
        return this.element.offsetLeft;
    };
    //定义获取食物Y坐标的方法
    get Y():number {
        return this.element.offsetTop;
    };
    //定义改变位置的方法
    public change():void {
        //304减去食物自身大小10px,还有两侧边框4px等于290
        //因为蛇移动一次是10px,所以食物的位置必须是整10
        //因为这里是向下取整,所以要多乘1,不然取不到29
        const x = Math.floor(Math.random() * 30) * 10;
        const y = Math.floor(Math.random() * 30) * 10;

        this.element.style.left = `${x}px`;
        this.element.style.top = `${y}px`;

    };
};
