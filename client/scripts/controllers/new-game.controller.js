import { Meteor } from 'meteor/meteor';
import { Controller } from 'angular-ecmascript/module-helpers';
import { Games } from '../../../lib/collections';

export default class NewGameCntrl extends Controller {
  constructor() {
    super(...arguments);
  }

  newGame(userId) {
    // let game = Games.findOne({ userIds: { $all: [this.currentUserId, userId] } });
    // alert("User "+userId+" is trying to create a game called "+newGameTitle);
    // if (game) {
    //   this.hideNewGameModal();
    //   return this.goToGame(game._id);
    // }
    if (!this.newGameTitle) return false;

    this.callMethod('newGame', this.newGameTitle, userId, (err, gameId) => {
      this.hideNewGameModal();
      if (err) return this.handleError(err);
      this.goToSetup(gameId);
    });
  }

  hideNewGameModal() {
    this.NewGame.hideModal();
  }

  goToGame(gameId) {
    this.$state.go('tab.game', { gameId });
  }

  goToSetup(gameId) {
    alert("Game id: "+gameId)
    this.$state.go('tab.setup', { gameId });
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

NewGameCntrl.$name = 'NewGameCntrl';
NewGameCntrl.$inject = ['$state', 'NewGame', '$ionicPopup', '$log'];
