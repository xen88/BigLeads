import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import Fields from '../../api/fields/fields.js';
import FieldsListMin from '../components/FieldsListMin.js';
import Loading from '../components/Loading.js';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('fields.list');
  if (subscription.ready()) {
    const fields = Fields.find().fetch();
    onData(null, { fields });
  }
};

export default composeWithTracker(composer)(FieldsListMin);
