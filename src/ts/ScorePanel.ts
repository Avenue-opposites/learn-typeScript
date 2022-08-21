//定义配置对象接口
interface Options {
    maxLevel:number;
    upScore:number;
};
export default class ScorePanel implements Options {
    //定义得分和等级的值
    score:number;
    level:number;
    //定义HTML的元素
    private scoreEle:HTMLElement;
    private levelEle:HTMLElement;
    //设置最大等级
    readonly maxLevel:number;
    readonly upScore: number;
    constructor(options:Options) {
        this.scoreEle = document.getElementById("score")!;
        this.levelEle = document.getElementById("level")!;
        this.score = 0;
        this.level = 1;
        this.maxLevel = options.maxLevel;
        this.upScore = options.upScore;
    };
    //定义一个加分的方法
    addScore():void {
          //自增
          this.score++;
          this.scoreEle.innerText = `${this.score}`;
          if(this.score % this.upScore === 0) {
            this.levelUp();
          }
    };
    //定义升级的方法
    protected levelUp():void {
        if(this.level >= this.maxLevel) return;
        //自增
        this.level++;
        this.levelEle.innerText = `${this.level}`;
    }
    //定义得分清零的方法
    scoreClearZero():void {
        this.score = 0;
        this.scoreEle.innerText = `${this.score}`
    };
    //定义等级清除的方法
    levelClear():void {
        this.level = 1;
        this.levelEle.innerText = `${this.level}`
    };
};