import { Meteor } from 'meteor/meteor';
import { Controller } from 'angular-ecmascript/module-helpers';
import { Games, Tasks } from '../../../lib/collections';

export default class GameSetupCntrl extends Controller {
  constructor() {
    super(...arguments);

    this.gameId = this.$stateParams.gameId;

    this.helpers({
      data() {
        return Games.findOne(this.gameId);
      },
      tasks() {
        return Tasks.find({ gameId: this.gameId})
      }
    });
  }

  addNewTask() {
    // alert("Adding '"+this.newTaskContent+"' to game "+this.gameId);

    this.callMethod('newTask', this.newTaskContent, this.gameId, (err, taskId) => {
      if (err) return this.handleError(err);
    });

    delete this.newTaskContent;
  }

  createGame() {
    // alert("Creating Game "+this.gameId);
    this.callMethod('createGame', this.gameId, (err, gameId) => {
      if (err) return this.handleError(err);
      this.goToGame(gameId)
    });
  }


  cancelGame() {
    // alert("Cancelling Game "+this.gameId)
  }

  goToGame(gameId) {
    this.$state.go('tab.game', { gameId });
  }

  handleError(err) {
    this.$log.error('New game creation error ', err);

    this.$ionicPopup.alert({
      title: err.reason || 'New game creation failed',
      template: 'Please try again',
      okType: 'button-positive button-clear'
    });
  }
}

GameSetupCntrl.$name = 'GameSetupCntrl';
GameSetupCntrl.$inject = ['$stateParams', '$state', 'NewGame', '$ionicPopup', '$log'];
