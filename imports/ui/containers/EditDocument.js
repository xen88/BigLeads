import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import Documents from '../../api/documents/documents.js';
import Fields from '../../api/fields/fields.js';
import Features from '../../api/features/features.js';
import EditDocument from '../pages/EditDocument.js';
import Loading from '../components/Loading.js';

const composer = ({ params }, onData) => {
  // Edit existing document (params)
  if(params !== undefined) {
    console.log(params);
      const sub_docs = Meteor.subscribe('documents.view', params._id);
      const sub_fields = Meteor.subscribe('fields.list');
      const sub_features = Meteor.subscribe('features.list');
      const owner = Meteor.userId();
      const _doc = params._id;

      if (sub_docs.ready() && sub_fields.ready() && sub_features.ready() ) {
        const doc = Documents.findOne();
        const features = Features.find({doc:_doc}).fetch();
        const fields = Fields.find({
          'meta.owner': owner
        }).fetch();
        const data = {
          doc, fields, features
        }
        onData(null, { data });
      }
  }
  // Add new document (no params)
  else {
    const sub_fields = Meteor.subscribe('fields.list');
    const sub_features = Meteor.subscribe('features.list');
    const owner = Meteor.userId();

    if (sub_fields.ready() && sub_features.ready()) {
      const fields = Fields.find({
        'meta.owner': owner
      }).fetch();
      const features = Features.find({doc: 'pending'}).fetch();
      const data = {
        fields, features
      }
      onData(null, { data });
    }
  }
};

export default composeWithTracker(composer, Loading)(EditDocument);
