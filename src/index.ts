import './less/init.less';
import './less/container.less';

import GameControl from './ts/GameControl';

const gameControl:GameControl = new GameControl({maxLevel:10,upScore:2,speed:10});
gameControl.init();




















