import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';

const Petitions = new Mongo.Collection('Petitions');
export default Petitions;

Petitions.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Petitions.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

// Petitions.schema = new SimpleSchema({
//   title: {
//     type: String,
//     label: 'The title of the document.',
//   },
//   body: {
//     type: String,
//     label: 'The body of the document.',
//   },
// });
//
// Petitions.attachSchema(Petitions.schema);
//
// Factory.define('document', Documents, {
//   title: () => 'Factory Title',
//   body: () => 'Factory Body',
// });
