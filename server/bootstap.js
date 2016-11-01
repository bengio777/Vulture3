import { Meteor } from 'meteor/meteor';
import { Games, Tasks, Requirements, Images } from '../lib/collections';

Meteor.startup(function() {
  Games.insert([{
    _id: 0,
    name: 'Twerk or Treat'
  }]);
  Games.insert([{
    _id: 1,
    name: 'China Land'
  }])
});
