import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import Fields from '../../api/fields/fields.js';
import FieldsListMin2 from '../components/FieldsListMin2.js';
import Loading from '../components/Loading.js';

const composer = (params, onData) => {
  const fields = params.params.promofields;
  const subscription = Meteor.subscribe('fields.list');
  const owner = Meteor.userId();

  if (subscription.ready()) {
    const fields = Fields.find({
      _id: {
        $in: fields
      },
      'meta.owner': owner
    }).fetch();
    onData(null, { fields });
  }
};

export default composeWithTracker(composer)(FieldsListMin2);
