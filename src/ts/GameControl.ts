import Food from './Food';
import ScorePanel from './ScorePanel';
import Snake from './Snake';
//定义配置对象接口
interface Options {
    maxLevel:number;
    upScore:number;
    speed:number,
};
//定义游戏控制器类
export default class GameControl {
    //定义食物
    protected food:Food;
    //定义记分牌
    protected scorePanel:ScorePanel;
    //定义蛇
    protected snake:Snake;
    //定义蛇的方向
    protected direction:string = 'd';
    //定义配置蛇移动的速度
    protected speed:number;
    //定义游戏是否结束
    protected isLive:boolean = true;
    //定义移动定时器
    protected timer:unknown = null;
    //定义游戏页面
    protected document:HTMLElement = document.documentElement;
    constructor(options:Options) {
        //设置默认值
        options.maxLevel = options.maxLevel || 10;
        options.upScore = options.upScore || 10;
        this.food = new Food();
        this.scorePanel = new ScorePanel({maxLevel:options.maxLevel,upScore:options.upScore});
        this.snake = new Snake({speed:options.speed});
        this.speed = options.speed || 10;
        //实例化后自动初始化
        this.init();
    };
    //定义游戏初始化
    init():void {
        //食物随机出现
        this.food.change();
        //为页面绑定键盘按下事件,因为是document调用的所以要修改this的指向,并且返回这个函数
        document.addEventListener("keydown",this.keyDownHandler.bind(this));
        //每隔一段时间检查游戏的状态,并且保存这个定时器
        this.timer = setInterval(() => {
            //判断蛇是否死亡
            if(!this.snake.isLive) {
                //如果蛇死亡就修改游戏结束
                this.isLive = this.snake.isLive;
            };
            //判断游戏是否结束
            if(this.isLive) {
                //游戏没有结束就让蛇根据方向移动
                this.snake.move(this.speed,this.direction);
                //判断蛇是否吃到食物
                this.snakeEatFood(this.food.X,this.food.Y);
                return;
            }else {
                //游戏结束,就告诉玩家蛇撞墙了
                alert("蛇撞墙了,Game Over!");
                //清除定时器,结束蛇的移动
                clearInterval(this.timer as number);
                //把游戏状态复原,以便下次初始化
                this.isLive = true;
                //把蛇的状态复原
                this.snake.isLive = true;
                //清空初始移动方向
                this.direction = 'd';
                //游戏初始化,可以接着玩
                this.init();
            }
        },300 - (this.scorePanel.level -1) * 30);
        
    };
    //定义键盘按下处理器
    protected keyDownHandler(event:KeyboardEvent):void {
        //当键盘按下是修改方向
        this.direction = event.key;
        //设置长按加速
        this.snake.move(this.speed,this.direction);
    };
    //定义检查蛇是否吃到食物的方法
    snakeEatFood(X:number,Y:number):void {
        if(X === this.snake.X  && Y === this.snake.Y) {
            //吃到就改变食物的位置
            this.food.change();
            //并且加一分
            this.scorePanel.addScore();
            //蛇变长一节
            this.snake.addLength();
        };
        
    };

};