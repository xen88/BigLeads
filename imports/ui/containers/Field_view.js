import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import Fields from '../../api/fields/fields.js';
import FieldView from '../pages/Field_view.js';
import Loading from '../components/Loading.js';

const composer = ({ params }, onData) => {
  const subscription = Meteor.subscribe('fields.view', params._id);
  if (subscription.ready()) {
    const doc = Fields.findOne();
    onData(null, { doc });
  }
};

export default composeWithTracker(composer, Loading)(FieldView);
