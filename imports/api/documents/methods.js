import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import rateLimit from '../../modules/rate-limit.js';

import Documents from './documents';

export const upsertDocument = new ValidatedMethod({
  name: 'documents.upsert',
  validate: new SimpleSchema({
    _id: { type: String, optional: true },
    title: { type: String, optional: true },
    body: { type: String, optional: true },
    owner: { type: String, optional: false },
    colorScheme: { type: String, optional: false },
    backgroundImage: { type: String, optional: false },
    // features: { type: Array, optional: true },
    // 'features.$': { type: String, optional: true },
    promofields: { type: Array, optional: true },
    'promofields.$': { type: String, optional: true }
  }).validator(),
  run(document) {
    let doc_ = {};
    doc_._id = document._id;
    doc_.title = document.title;
    doc_.body = document.body;
    doc_.colorScheme = document.colorScheme;
    doc_.backgroundImage = document.backgroundImage;
    doc_.meta = {};
    doc_.meta.owner = document.owner;
    doc_.promofields = document.promofields;
    // doc_.features = document.features;
    return Documents.upsert({ _id: document._id }, { $set: doc_ });
  },
});
export const removeDocument = new ValidatedMethod({
  name: 'documents.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    Documents.remove(_id);
  },
});
rateLimit({
  methods: [
    upsertDocument,
    removeDocument
  ],
  limit: 5,
  timeRange: 1000,
});

// export const upsertPetition = new ValidatedMethod({
//   name: 'petitions.upsert',
//   validate: new SimpleSchema({
//     // _id: { type: String, optional: true },
//     first_name: { type: String, optional: true },
//     last_name: { type: String, optional: true },
//     email_address: { type: String, optional: true },
//     city: { type: String, optional: true },
//   }).validator(),
//   run(document) {
//     // console.log(document);
//       return Petitions.upsert({ _id: document._id }, { $set: document });
//   },
// });


// export const upsertSettings = new ValidatedMethod({
//   name: 'settings.upsert',
//   validate: new SimpleSchema({
//     _id: { type: String, optional: true },
//     app_name: { type: String, optional: true },
//     app_title: { type: String, optional: true },
//     app_subtitle: { type: String, optional: true },
//     app_logo: { type: String, optional: true },
//   }).validator(),
//   run(setting) {
//     console.log('Settings Upsert Triggered')
//     console.log(setting)
//     return Settings.upsert({ _id: setting._id }, { $set: setting });
//   },
// });
//
// export const removeSettings = new ValidatedMethod({
//   name: 'settings.remove',
//   validate: new SimpleSchema({
//     _id: { type: String },
//   }).validator(),
//   run({ _id }) {
//     Settings.remove(_id);
//   },
// });
