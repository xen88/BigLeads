import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import rateLimit from '../../modules/rate-limit.js';
// import { Factory } from 'meteor/dburles:factory';

const Origins = new Mongo.Collection('Origins');
export default Origins;

// APIKeys = new Meteor.Collection( 'api-keys' );

/*
* Allow
*/

Origins.allow({
  insert: function(){
    // Disallow inserts on the client by default.
    return false;
  },
  update: function(){
    // Disallow updates on the client by default.
    return false;
  },
  remove: function(){
    // Disallow removes on the client by default.
    return false;
  }
});

/*
* Deny
*/

Origins.deny({
  insert: function(){
    // Deny inserts on the client by default.
    return true;
  },
  update: function(){
    // Deny updates on the client by default.
    return true;
  },
  remove: function(){
    // Deny removes on the client by default.
    return true;
  }
});
Origins.schema = new SimpleSchema({
  owner: {
    type: String
  },
  origin: {
    type: String
  },
  // 'origins.$': {
  //   type: String
  // }
});

Origins.attachSchema(Origins.schema);
