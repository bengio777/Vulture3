import Moment from 'moment';
import { Meteor } from 'meteor/meteor';
import { Controller } from 'angular-ecmascript/module-helpers';
import { Games, Tasks } from '../../../lib/collections';
export default class GamesCntrl extends Controller {
  constructor() {
    super(...arguments);

    this.helpers({
      data() {
        let gameData = Games.find();
        gameData.forEach((game, i, gameData) => {
          game.tasks = [];
          let taskCollection = Tasks.find({ gameId: game._id })
          taskCollection.forEach((task) => {
            game.tasks.push(task)
          })
          game.num_tasks = game.tasks.length;
          gameData[i] = game;
        })
        console.log(gameData);
        return gameData
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
