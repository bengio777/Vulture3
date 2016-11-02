import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Games, Tasks, Requirements, Images } from '../lib/collections';

Meteor.methods({


});



// },
//  updatePicture(data) {
//    if (!this.userId) {
//      throw new Meteor.Error('not-logged-in',
//        'Must be logged in to update his picture.');
//    }
//
//    check(data, String);
//
//    return Meteor.users.update(this.userId, { $set: { 'profile.picture': data } });
