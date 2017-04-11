import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import Settings from '../../api/documents/settings.js';
import ViewSettings from '../pages/ViewSettings.js';
import Loading from '../components/Loading.js';

const composer = ({ params }, onData) => {
  const subscription = Meteor.subscribe('settings.view', params._id);

  if (subscription.ready()) {
    const doc = Settings.findOne();
    console.log(doc);
    onData(null, { doc });
  }
};

export default composeWithTracker(composer, Loading)(ViewSettings);
