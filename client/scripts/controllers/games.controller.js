import Moment from 'moment';
import { Controller } from 'angular-ecmascript/module-helpers';

export default class GamesCntrl  extends Controller {
  constructor() {
    super(...arguments);

    this.data = [
      {
        _id: 0,
        name: 'Team Twerk or Treat',
        // picture: 'https://randomuser.me/api/portraits/thumb/men/1.jpg',
        // timestamp: Moment().subtract(1, 'hours').toDate()
      },
      {
        _id: 1,
        name: 'Team Lazer Brigade',
        // picture: 'https://randomuser.me/api/portraits/thumb/lego/1.jpg',
          // timestamp: Moment().subtract(2, 'hours').toDate()
      },
      {
        _id: 2,
        name: 'Team FireFart',
        // picture: 'https://randomuser.me/api/portraits/thumb/women/1.jpg',
          // timestamp: Moment().subtract(1, 'days').toDate()
      },
      {
        _id: 3,
        name: 'Team Red Team',
        // picture: 'https://randomuser.me/api/portraits/thumb/women/2.jpg',
          // timestamp: Moment().subtract(4, 'days').toDate()
      },
      {
        _id: 4,
        name: 'Team The Destroyers',
        // picture: 'https://randomuser.me/api/portraits/thumb/men/2.jpg',
        // timestamp: Moment().subtract(2, 'weeks').toDate()
      }
    ];
  }
  remove(game) {
    this.data.splice(this.data.indexOf(game), 1);
  }
}

GamesCntrl.$name = 'GamesCntrl';
