interface Options {
    speed:number;
}
export default class Snake {
    //定义蛇头
    protected head:HTMLElement;
    //定义蛇的身体
    protected bodies:HTMLCollection;
    //定义蛇的容器
    protected snakeEle:HTMLElement;
    //定义蛇是否死亡
    public isLive:boolean = true;
    //定义蛇的速度
    protected speed:number;
    constructor(options:Options) {
        this.snakeEle = document.getElementById("snake")!;
        this.head = document.querySelector("#snake > span")!;
        this.bodies = this.snakeEle.children;
        this.speed = options.speed;
    };
    //获取蛇头的X坐标
    get X():number {
        return this.head.offsetLeft;
    };
    //获取蛇头的Y坐标
    get Y():number {
        return this.head.offsetTop;
    };
    //设置蛇头的X坐标
    set X(value:number) {
        //如果坐标没有发生变化就直接返回
        if(this.X === value) {
            return
        };
        //判断是否掉头
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
            //判断方向在左,如果向右掉头
            if(value > this.X) {
                //让方向接着向左
                value = this.X - this.speed ;
            }else {
                value = this.X + this.speed;
            };
        };
        //判断撞墙
        if(this.X < 0 || this.X > 290) {
            //撞墙就代表死亡
            this.kill();
            //并且返回
            return
        };
        //判断有没有撞到自己
        if(this.checkHeadBody()) {
            this.kill();
        };
         //蛇头的位置改变之前,让蛇的身体先移动到这个位置
        this.moveBody();
        //修改最新的移动坐标
        this.head.style.left = `${value}px`;
    };
    //设置蛇头的Y坐标
    set Y(value:number) {
        //如果坐标没有发生变化就直接返回
        if(this.Y === value) {
            return
        };
        //判断是否掉头
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
            //判断方向在左,如果向右掉头
            if(value > this.Y) {
                //让方向接着向左
                value = this.Y - this.speed ;
            }else {
                value = this.Y + this.speed;
            };
        };
        //判断是否撞墙
        if(this.Y < 0 || this.Y > 290) {
            //撞墙就代表死亡
            this.kill();
            //并且返回
            return
        };
         //判断有没有撞到自己
        if(this.checkHeadBody()) {
            this.kill();
        };
        //蛇头的位置改变之前,让蛇的身体先移动到这个位置
        this.moveBody();
        //修改最新的移动坐标
        this.head.style.top = `${value}px`;
    };
    //定义蛇身体变长的方法
    addLength():void {
        this.snakeEle.insertAdjacentHTML( "beforeend","<span></span>");
    };
    //定义蛇移动方法,参数:移动速度,移动方向
    move(speed:number,direction:string):void {
        //枚举所有移动方向
        enum Direction {
            up = "w",
            down = "s",
            right = "d",
            left = "a",
            arrowUp = "ArrowUp",
            arrowDown = "ArrowDown",
            arrowLeft = "ArrowLeft",
            arrowRight = "ArrowRight"
        };
            //保存蛇当前的坐标
            let x = this.X;
            let y = this.Y;
            //根据键盘的值改变方向和修改坐标
            switch(direction) {
                //向上移动
                case Direction.up:
                    y -= speed;
                    break;
                case Direction.arrowUp:
                    y -= speed;
                    break;
                //向下移动
                case Direction.down:
                    y += speed;
                    break;
                case Direction.arrowDown:
                    y += speed;
                    break;
                //向左移动
                case Direction.left:
                    x -= speed;
                    break;
                case Direction.arrowLeft:
                    x -= speed;
                    break;
                case Direction.right:
                    x += speed;
                    break;
                case Direction.arrowRight:
                    x += speed;
                    break;   
                    
            };     
            //设置坐标
            this.X = x;
            this.Y = y;
    };
    moveBody():void {
        //将后面的身体的位置设置为前一个身体的位置
        //逆向修改
        for(let i = this.bodies.length -1; i >= 1;i--) {
            //因为HTMLElement是Element的子类,所以可以断言
            let preX = (this.bodies[i-1] as HTMLElement).offsetLeft;
            let preY = (this.bodies[i-1] as HTMLElement).offsetTop;
            (this.bodies[i] as HTMLElement).style.left = `${preX}px`;
            (this.bodies[i] as HTMLElement).style.top = `${preY}px`;
        };
    };
    //定义蛇与蛇身的相撞
    checkHeadBody():boolean {
        for(let i = 1;i < this.bodies.length;i++) {
            let body = this.bodies[i] as HTMLElement;
            if(this.X === body.offsetLeft && this.Y === body.offsetTop) {
                return true;
            };
        };
        return false;
    };
    //定义让蛇死亡的方法
    kill():void {
        this.isLive = false;
        //清空身体
        this.cleanBody();
        //然后恢复原位
        this.head.style.left = "0px";
        this.head.style.top = "0px";
    };
    //定义清空身体的方法
    cleanBody():void {
        for(let i = 1;i<this.bodies.length;i++) {
            this.bodies[i].remove();
        }
    };
};