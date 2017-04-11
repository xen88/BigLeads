/* eslint-disable no-undef */

import { browserHistory } from 'react-router';
import { Bert } from 'meteor/themeteorchef:bert';
import { upsertOrigin } from '../api/origins/methods.js';
import './validation.js';

let component;

const handleUpsert = () => {

  const { doc } = component.props;
  const confirmation = doc && doc._id ? 'Origin updated!' : 'Origin added!';
  const upsert = {
    origin: document.querySelector('[name="origin"]').value.trim(),
    owner: Meteor.userId()
  };
  if (doc && doc._id) upsert._id = doc._id;

  upsertOrigin.call(upsert, (error, response) => {
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      component.originEditorForm.reset();
      Bert.alert(confirmation, 'success');
    }
  });


};

const validate = () => {
  $(component.originEditorForm).validate({
    rules: {
      origin: {
        required: true,
      }
    },
    messages: {
      origin: {
        required: 'Origin URL required',
      }
    },
    submitHandler() { handleUpsert(); },
  });
};

export default function originEditorForm(options) {
  component = options.component;
  validate();
}
