import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const APIKeys = new Mongo.Collection('api-keys');
export default APIKeys;

// APIKeys = new Meteor.Collection( 'api-keys' );

/*
* Allow
*/

APIKeys.allow({
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

APIKeys.deny({
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
APIKeys.schema = new SimpleSchema({
  owner: {
    type: String
  },
  key: {
    type: String
  }
});

APIKeys.attachSchema(APIKeys.schema);
