import Moment from 'moment';
import { Controller } from 'angular-ecmascript/module-helpers';
import { Images, Tasks } from '../../../lib/collections';

export default class GameCntrl  extends Controller {
  constructor() {
    super(...arguments);

    this.gameId = this.$stateParams.gameId;

    this.helpers({
      tasks() {
        let taskData = Tasks.find({ gameId: this.gameId });
        taskData.forEach((task, i, taskData) => {
          task.image = Images.findOne({ 'taskId' : task._id, 'userId': String(Meteor.userId())}, {data: 1});

          taskData[i] = task;

          console.log(task);
        })
        return taskData
      }
    })
  }
  remove(task) {
    this.data.splice(this.data.indexOf(task), 1);
  }
}

GameCntrl.$name = 'GameCntrl'
GameCntrl.$inject = ['$stateParams', '$state', '$ionicPopup', '$log'];
