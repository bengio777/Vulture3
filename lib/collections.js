import { Mongo } from 'meteor/mongo';

export const Games = new Mongo.Collection('games');
export const Tasks = new Mongo.Collection('tasks');
export const Images = new Mongo.Collection('images');
