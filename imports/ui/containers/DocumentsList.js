import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import Documents from '../../api/documents/documents.js';
import DocumentsList from '../components/DocumentsList.js';
import Loading from '../components/Loading.js';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('documents.list');
  const owner = Meteor.userId();

  if (subscription.ready()) {
    const documents = Documents.find({
      'meta.owner': owner
    }).fetch();

    onData(null, { documents });
  }

};

export default composeWithTracker(composer, Loading)(DocumentsList);
