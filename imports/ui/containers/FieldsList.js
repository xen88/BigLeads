import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import Fields from '../../api/fields/fields.js';
import FieldsList from '../components/FieldsList.js';
import Loading from '../components/Loading.js';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('fields.list');
  const owner = Meteor.userId();

  if (subscription.ready()) {
    const fields = Fields.find({
      'meta.owner': owner
    }).fetch();
    onData(null, { fields });
  }
};

export default composeWithTracker(composer, Loading)(FieldsList);
