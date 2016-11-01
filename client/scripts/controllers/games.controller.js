import Moment from 'moment';
import { Controller } from 'angular-ecmascript/module-helpers';
import { Games } from '../../../lib/collections';

export default class GamesCntrl extends Controller {
  constructor() {
    super(...arguments);

    this.helpers({
      data() {
        return Games.find();
      }
    })
  }

  showNewGameModal() {
    this.NewGame.showModal();
  }

  remove(game) {
    this.data.splice(this.data.indexOf(game), 1);
  }
}

GamesCntrl.$name = 'GamesCntrl';
GamesCntrl.$inject = ['NewGame'];
