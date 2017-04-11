import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
// import { Factory } from 'meteor/dburles:factory';

const Settings = new Mongo.Collection('Settings');
export default Settings;

Settings.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Settings.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

Settings.schema = new SimpleSchema({
  type: {
    type: String,
    label: 'Settings Type',
  },
  app_name: {
    type: String,
    label: 'App name',
  },
  app_title: {
    type: String,
    label: 'App title',
  },
  app_subtitle: {
    type: String,
    label: 'App subtitle',
  },
  hero_bg_image: {
    type: String,
    label: 'Hero Background Image',
  },
});

Settings.attachSchema(Settings.schema);

// Factory.define('setting', Settings, {
//   title: () => 'Factory Title',
//   body: () => 'Factory Body',
// });
