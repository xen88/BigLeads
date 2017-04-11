import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import rateLimit from '../../modules/rate-limit.js';

import Features from './features';

export const upsertFeature = new ValidatedMethod({
  name: 'features.upsert',
  validate: new SimpleSchema({
    _id: { type: String, optional: true },
    title: { type: String, optional: true },
    description: { type: String, optional: true },
    doc: { type: String, optional: false },
    owner: { type: String, optional: false }
    // order: { type: Array, optional: true },
    // 'order.$': { type: Object, optional: true },
    // 'order.$.for': { type: String, optional: true },
    // 'order.$.position': { type: Number, optional: true }
  }).validator(),
  run(feature) {

    // let doc_ = {};
    // let meta = {
    //   owner: field.owner
    // };
    // doc_.title = field.title;
    // doc_.description = field.description;
    // doc_.type = field.type;
    // doc_.meta = meta;
    // doc_.order = field.order;

    return Features.upsert({ _id: feature._id }, { $set: feature });
  },
});

export const removeFeature = new ValidatedMethod({
  name: 'feature.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    Features.remove(_id);
  },
});


rateLimit({
  methods: [
    upsertFeature,
    removeFeature
  ],
  limit: 12,
  timeRange: 1000,
});
