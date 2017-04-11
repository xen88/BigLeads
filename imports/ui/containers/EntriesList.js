import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import Entries from '../../api/entries/entries.js';
import EntriesList from '../components/entries/EntriesList.js';
import Loading from '../components/Loading.js';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('entries.list');
  const owner = Meteor.userId();
  if (subscription.ready()) {
    const entries = Entries.find({
      // 'meta.owner': owner
    }).fetch();
    onData(null, { entries });
  }

};

export default composeWithTracker(composer, Loading)(EntriesList);
