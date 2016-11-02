import Moment from 'moment';
import { Controller } from 'angular-ecmascript/module-helpers';

export default class TaskCntrl  extends Controller {
  constructor() {
    super(...arguments);

    this.data = [
      {
        _id: 0,
        name: 'Requirement 0',
        // picture: 'https://randomuser.me/api/portraits/thumb/men/1.jpg',
        // timestamp: Moment().subtract(1, 'hours').toDate()
      },
      {
        _id: 1,
        name: 'Requirement 1',
        // picture: 'https://randomuser.me/api/portraits/thumb/lego/1.jpg',
          // timestamp: Moment().subtract(2, 'hours').toDate()
      },

    ];
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
