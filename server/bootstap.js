import { Meteor } from 'meteor/meteor';
import { Games, Tasks, Requirements, Images } from '../lib/collections';

Meteor.startup(function() {
  Games.insert([{
    _id: 0,
    name: 'Twerk or Treat'
  }]);
  Games.insert([{
    _id: 1,
    name: 'Lazer Brigade'
  }]);
  Games.insert([{
    _id: 2,
    name: 'FireFart'
  }]);
  Games.insert([{
    _id: 3,
    name: 'Red'
  }]);
  Games.insert([{
    _id: 4,
    name: 'Seek and Destroy'
  }]);
});
