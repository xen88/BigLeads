import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import Fields from '../../api/fields/fields.js';
import Sortable from '../components/Sortable.js';
import Loading from '../components/Loading.js';

  const composer = (params, onData) => {

  const subscription = Meteor.subscribe('fields.list');
  const owner = Meteor.userId();
  const id = params.params._id;
  const fields = params.params.promofields;

  if(subscription.ready()) {
    Meteor.call('getFieldsSortable', id, fields, function(e,r){
      if(r) {

        let promofields = r;
        onData(null, { promofields });

      }

    });
  }
};

export default composeWithTracker(composer)(Sortable);
