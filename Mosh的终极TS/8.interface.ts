//接口方法可以使用简写
interface Calendar {
    name:string;
    addEvent():void;
    removeEvent():void;
}

interface CloudCalendar extends Calendar {
    sync():void;
}

class GoogleCalendar implements CloudCalendar {
    constructor(public name:string) {}
    sync(): void {}
    addEvent(): void {}
    removeEvent(): void {}
}