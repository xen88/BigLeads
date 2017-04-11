import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
// import { Factory } from 'meteor/dburles:factory';

const Entries = new Mongo.Collection('Entries');
export default Entries;
//
Entries.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Entries.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});
//
// Entries.schema = new SimpleSchema({
//
// });
//
// Entries.attachSchema(Entries.schema);
//
// Factory.define('document', Documents, {
//   title: () => 'Factory Title',
//   body: () => 'Factory Body',
// });
