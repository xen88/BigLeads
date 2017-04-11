import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import APIKeys from '../../api/apikeys/apikeys.js';
import YourApiKey from '../components/YourApiKey.js';
import Loading from '../components/Loading.js';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('apikeys.view', Meteor.userId());
  if (subscription.ready()) {
    const apikey = APIKeys.findOne();
    const APIkey = apikey && apikey.key;
    onData(null, { APIkey });
  }
};

export default composeWithTracker(composer, Loading)(YourApiKey);
