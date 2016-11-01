import Moment from 'moment';
import { Controller } from 'angular-ecmascript/module-helpers';

export default class GameCntrl  extends Controller {
  constructor() {
    super(...arguments);

    this.data = [
      {
        _id: 0,
        name: 'Task 0',
        // picture: 'https://randomuser.me/api/portraits/thumb/men/1.jpg',
        // timestamp: Moment().subtract(1, 'hours').toDate()
      },
      {
        _id: 1,
        name: 'Task 1',
        // picture: 'https://randomuser.me/api/portraits/thumb/lego/1.jpg',
          // timestamp: Moment().subtract(2, 'hours').toDate()
      },
      {
        _id: 2,
        name: 'Task 2',
        // picture: 'https://randomuser.me/api/portraits/thumb/women/1.jpg',
          // timestamp: Moment().subtract(1, 'days').toDate()
      },
      {
        _id: 3,
        name: 'Task 3',
        // picture: 'https://randomuser.me/api/portraits/thumb/women/2.jpg',
          // timestamp: Moment().subtract(4, 'days').toDate()
      },
      {
        _id: 4,
        name: 'Task 4',
        // picture: 'https://randomuser.me/api/portraits/thumb/men/2.jpg',
        // timestamp: Moment().subtract(2, 'weeks').toDate()
      }
    ];
  }
  remove(task) {
    this.data.splice(this.data.indexOf(task), 1);
  }
}

GameCntrl.$name = 'GameCntrl'
