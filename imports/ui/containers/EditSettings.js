import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import Settings from '../../api/documents/settings.js';
import EditSettings from '../pages/EditSettings.js';
import Loading from '../components/Loading.js';

const composer = ({ params }, onData) => {
  const subscription = Meteor.subscribe('settings.view', params._id);

  if (subscription.ready()) {
    const doc = Settings.findOne();
    onData(null, { doc });
  }
};

export default composeWithTracker(composer, Loading)(EditSettings);
