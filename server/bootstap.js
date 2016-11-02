import { Meteor } from 'meteor/meteor';
import { Games, Tasks, Requirements, Images } from '../lib/collections';

Meteor.startup(function() {
  Games.insert({
    name: 'Twerk or Treat'
  });
  Games.insert({
    name: 'Lazer Brigade'
  });
  Games.insert({
    name: 'FireFart'
  });
  Games.insert({
    name: 'Red'
  });
  Games.insert({
    name: 'Seek and Destroy'
  });
});
