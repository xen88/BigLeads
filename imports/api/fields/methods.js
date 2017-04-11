import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import rateLimit from '../../modules/rate-limit.js';

import Fields from './fields';

export const upsertField = new ValidatedMethod({
  name: 'fields.upsert',
  validate: new SimpleSchema({
    _id: { type: String, optional: true },
    title: { type: String, optional: false },
    description: { type: String, optional: false },
    type: { type: String, optional: false },
    owner: { type: String, optional: false },
    order: { type: Array, optional: true },
    'order.$': { type: Object, optional: true },
    'order.$.for': { type: String, optional: true },
    'order.$.position': { type: Number, optional: true }
  }).validator(),
  run(field) {

    let doc_ = {};
    let meta = {
      owner: field.owner
    };
    doc_.title = field.title;
    doc_.description = field.description;
    doc_.type = field.type;
    doc_.meta = meta;
    doc_.order = field.order;

    return Fields.upsert({ _id: field._id }, { $set: doc_ });
  },
});

export const removeField = new ValidatedMethod({
  name: 'fields.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    Fields.remove(_id);
  },
});


export const orderFields = new ValidatedMethod({
  name: 'fields.order',
  validate: new SimpleSchema({
    arr: { type: Array },
    'arr.$': { type: String }
  }).validator(),
  run({ arr }) {
    console.log(arr);
  },
});

rateLimit({
  methods: [
    upsertField,
    removeField
  ],
  limit: 5,
  timeRange: 1000,
});
