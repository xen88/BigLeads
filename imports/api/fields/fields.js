import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
// import { Factory } from 'meteor/dburles:factory';

const Fields = new Mongo.Collection('Fields');
export default Fields;

Fields.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Fields.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

Fields.schema = new SimpleSchema({
  title: {
    type: String,
    label: 'Form field name.',
  },
  description: {
    type: String,
    label: 'Field description.',
  },
  type: {
    type: String,
    label: 'Form field input type.',
  },
  meta: {
    type: Object
  },
  'meta.owner': {
    type: String,
        optional: true
  },
  order: {
    type: Array,
        optional: true
  },
  'order.$': {
    type: Object,
        optional: true
  },
  'order.$.for': {
    type: String,
        optional: true
  },
  'order.$.position': {
    type: Number,
        optional: true

  }
});

Fields.attachSchema(Fields.schema);

// Factory.define('field', Fields, {
//   title: () => 'Factory Title',
//   body: () => 'Factory Body',
// });
