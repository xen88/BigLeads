/* eslint-disable no-undef */

import { browserHistory } from 'react-router';
import { Bert } from 'meteor/themeteorchef:bert';
import { upsertPetition } from '../api/documents/methods.js';
import './validation.js';

let component;

const handleUpsert = () => {
  const { doc } = component.props;
  // console.log(component.props);
  const confirmation = doc && doc._id ? 'Entry Updated!' : 'Thank You, Success!';
  const upsert = {
    first_name: document.querySelector('[name="First Name"]').value.trim(),
    last_name: document.querySelector('[name="Last Name"]').value.trim(),
    email_address: document.querySelector('[name="Email Address"]').value.trim(),
    city: document.querySelector('[name="City"]').value.trim(),
  };
  console.log(upsert);

  if (doc && doc._id) upsert._id = doc._id;

  upsertPetition.call(upsert, (error, response) => {
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      component.petitionEditorForm.reset();
      Bert.alert(confirmation, 'success');
      // browserHistory.push(`/fields/${response.insertedId || doc._id}`);
      browserHistory.push(`/thankyou`);
    }
  });
};

const validate = () => {
  $(component.petitionEditorForm).validate({
    rules: {
      title: {
        required: true,
      },
      fielddescription: {
        required: true,
      },
      fieldtype: {
        required: true,
      },
    },
    messages: {
      title: {
        required: 'Please enter a field name.',
      },
      fielddescription: {
        required: 'Please enter a field description.',
      },
      fieldtype: {
        required: 'Please select a field type.',
      },
    },
    submitHandler() { handleUpsert(); },
  });
};

export default function petitionEditor(options) {
  component = options.component;
  validate();
}
