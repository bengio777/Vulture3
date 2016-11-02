import Moment from 'moment';
import { Controller } from 'angular-ecmascript/module-helpers';
import { Tasks } from '../../../lib/collections';

export default class GameCntrl  extends Controller {
  constructor() {
    super(...arguments);

    this.gameId = this.$stateParams.gameId;

    this.helpers({
      tasks() {
        return Tasks.find({ gameId: this.gameId });
      }
    })
  }
  remove(task) {
    this.data.splice(this.data.indexOf(task), 1);
  }
}

GameCntrl.$name = 'GameCntrl'
GameCntrl.$inject = ['$stateParams', '$state', '$ionicPopup', '$log'];
