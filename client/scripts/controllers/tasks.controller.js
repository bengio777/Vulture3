import Moment from 'moment';
import { Controller } from 'angular-ecmascript/module-helpers';

export default class TasksCntrl extends Controller {
  constructor() {
    super(...arguments);

    this.data = [
      {
        _id: 0,
        name: 'A Sushi Roll',
      },
      {
        _id: 1,
        name: 'A Mural (wildstyle)',
      },
      {
        _id: 2,
        name: 'A Craft Brewery',
      },
      {
        _id: 3,
        name: 'A Gratuitious Beard',
      },
      {
        _id: 4,
        name: 'A Commodo Dradon',
      }
    ];
  }
  remove(task) {
    this.data.splice(this.data.indexOf(task), 1);
  }
}

TasksCntrl.$name = 'TasksCntrl';
