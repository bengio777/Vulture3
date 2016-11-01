import Moment from 'moment';
import { Controller } from 'angular-ecmascript/module-helpers';

export default class MembersCntrl  extends Controller {
  constructor() {
    super(...arguments);

    this.data = [
      {
        _id: 0,
        name: 'Ethan Gonzalez',
        picture: 'https://randomuser.me/api/portraits/thumb/men/1.jpg',
        lastMessage: {
          text: 'Feed Me A Stray Cat!',
          timestamp: Moment().subtract(1, 'hours').toDate()
        }
      },
      {
        _id: 1,
        name: 'Bryan Wallace',
        picture: 'https://randomuser.me/api/portraits/thumb/lego/1.jpg',
        lastMessage: {
          text: 'Its Your Mother. Call me!!!',
          timestamp: Moment().subtract(2, 'hours').toDate()
        }
      },
      {
        _id: 2,
        name: 'Avery Stewart',
        picture: 'https://randomuser.me/api/portraits/thumb/women/1.jpg',
        lastMessage: {
          text: 'You bet I work the pole!',
          timestamp: Moment().subtract(1, 'days').toDate()
        }
      },
      {
        _id: 3,
        name: 'Katie Peterson',
        picture: 'https://randomuser.me/api/portraits/thumb/women/2.jpg',
        lastMessage: {
          text: 'Meteor Paired w Ionic is a robust coupling of technologies I do say!',
          timestamp: Moment().subtract(4, 'days').toDate()
        }
      },
      {
        _id: 4,
        name: 'Ray Edwards',
        picture: 'https://randomuser.me/api/portraits/thumb/men/2.jpg',
        lastMessage: {
          text: 'Saaah Dude.',
          timestamp: Moment().subtract(2, 'weeks').toDate()
        }
      }
    ];
  }

 remove(member) {
   this.data.splice(this.data.indexOf(member), 1);
 }
}

MembersCntrl.$name = 'MembersCntrl';
