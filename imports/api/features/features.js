import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
// import { Factory } from 'meteor/dburles:factory';

const Features = new Mongo.Collection('Features');
export default Features;

Features.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Features.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

Features.schema = new SimpleSchema({
  title: {
    type: String,
    label: 'Feature name',
    optional: true
  },
  description: {
    type: String,
    label: 'Field description',
    optional: true
  },
  doc: {
    type: String
  },
  owner: {
    type: String
  },
  // order: {
  //   type: Array,
  //       optional: true
  // },
  // 'order.$': {
  //   type: Object,
  //       optional: true
  // },
  // 'order.$.for': {
  //   type: String,
  //       optional: true
  // },
  // 'order.$.position': {
  //   type: Number,
  //       optional: true
  //
  // }
});

Features.attachSchema(Features.schema);

// Factory.define('field', Fields, {
//   title: () => 'Factory Title',
//   body: () => 'Factory Body',
// });
