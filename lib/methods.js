import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Games, Tasks, Requirements, Images } from '../lib/collections';

Meteor.methods({
  newGame(name, user) {
    // if (!this.userId) {
    //   throw new Meteor.Error('not-logged-in', 'Must be logged in to send message.');
    // }
    const gameId = Games.insert({
      name: name,
      owner: user
    });

    return gameId
  },

  newTask(content, gameId) {
    const taskId = Tasks.insert({
      gameId: gameId,
      content: content
    })
    return taskId
  },

  createGame(gameId) {
      Games.update({
        "_id": gameId
      },{
        $set: {
          "isCreated": true
        }
      })
      return gameId;
  },

  cancelGame(gameId) {
      Games.delete({
        "_id": gameId
      })
      return true;
  }


});
