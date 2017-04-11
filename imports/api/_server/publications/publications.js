import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import Documents from '../../documents/documents';
import Fields from '../../fields/fields';
import APIKeys from '../../apikeys/apikeys';
import Origins from '../../origins/origins';
import Entries from '../../entries/entries';
import Features from '../../features/features';

Meteor.publish('documents.list', () => Documents.find());
Meteor.publish('fields.list', () => Fields.find());
Meteor.publish('settings.list', () => Settings.find());
Meteor.publish('petitions.list', () => Settings.find());
Meteor.publish('apikeys.list', () => APIKeys.find());
Meteor.publish('origins.list', () => Origins.find());
Meteor.publish('entries.list', () => Entries.find());
Meteor.publish('features.list', () => Features.find());


Meteor.publish('documents.view', (_id) => {
  check(_id, String);
  return Documents.find(_id);
});
Meteor.publish('entries.view', (_id) => {
  check(_id, String);
  return Entries.find(_id);
});

Meteor.publish('apikeys.view', (_id) => {
  check(_id, String);
  // console.log(_id);
  return APIKeys.find({owner: _id});
});

Meteor.publish('origins.view', (_id) => {
  check(_id, String);
  // console.log(_id);
  return Origins.find({owner: _id});
});

Meteor.publish('fields.view', (_id) => {
  check(_id, String);
  return Fields.find(_id);
});
Meteor.publish('features.view', (_id) => {
  check(_id, String);
  return Features.find(_id);
});

Meteor.publish('settings.view', (_id) => {
  check(_id, String);
  return Settings.find(_id);
});
// Meteor.publish('petitions.view', (_id) => {
//   check(_id, String);
//   return Settings.find(_id);
// });
// Meteor.publish('origins.view', (_id) => {
//   check(_id, String);
//   return Settings.find(_id);
// });
