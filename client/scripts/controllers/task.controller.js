import Moment from 'moment';
import { Controller } from 'angular-ecmascript/module-helpers';

export default class TaskCntrl  extends Controller {
  constructor() {
    super(...arguments);
  }
  showNewImageModal() {
    this.NewImage.showModal();
  }

  remove(task) {
    this.data.splice(this.data.indexOf(task), 1);
  }
}

TaskCntrl.$name = 'TaskCntrl';
TaskCntrl.$inject = ['NewImage'];
