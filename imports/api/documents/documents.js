import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
// import { Factory } from 'meteor/dburles:factory';

const Documents = new Mongo.Collection('Documents');
export default Documents;

Documents.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Documents.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

Documents.schema = new SimpleSchema({
  title: {
    type: String,
    label: 'The title of the document.',
  },
  body: {
    type: String,
    label: 'The body of the document.',
  },
  colorScheme: {
    type: String,
    label: 'Your Form Color Scheme'
  },
  backgroundImage: {
    type: String,
    label: 'Header Background Image'
  },
  promofields: {
    type: Array,
    label: 'Promo Fields'
  },
  'promofields.$': {
    type: String,
    label: 'Field'
  },
  // features: {
  //   type: Array,
  //   label: 'Features'
  // },
  // 'features.$': {
  //   type: String,
  //   label: 'Feature'
  // },
  meta: {
    type: Object
  },
  'meta.owner': {
    type: String,
    label: 'Owner'
  }
});

Documents.attachSchema(Documents.schema);
//
// Factory.define('document', Documents, {
//   title: () => 'Factory Title',
//   body: () => 'Factory Body',
// });
