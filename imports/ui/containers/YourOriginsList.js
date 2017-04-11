import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import Origins from '../../api/origins/origins.js';

import YourOriginsList from '../components/YourOriginsList.js';
import Loading from '../components/Loading.js';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('origins.view', Meteor.userId());
  if (subscription.ready()) {
    const origins = Origins.find().fetch();
    onData(null, { origins });
  }
};

export default composeWithTracker(composer, Loading)(YourOriginsList);
