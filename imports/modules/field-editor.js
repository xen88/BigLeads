/* eslint-disable no-undef */

import { browserHistory } from 'react-router';
import { Bert } from 'meteor/themeteorchef:bert';
import { upsertField } from '../api/fields/methods.js';
import './validation.js';

let component;

const handleUpsert = () => {
  const { doc } = component.props;
  const confirmation = doc && doc._id ? 'Field updated!' : 'Field added!';
  const upsert = {
    title: document.querySelector('[type="text"][name="title"]').value.trim(),
    description: document.querySelector('[type="text"][name="description"]').value.trim(),
    type: document.querySelector('[type="text"][name="type"]').value.trim(),
    owner: document.querySelector('[type="text"][name="owner"]').value.trim()
  };

  if (doc && doc._id) upsert._id = doc._id;

  upsertField.call(upsert, (error, response) => {
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      component.fieldEditorForm.reset();
      Bert.alert(confirmation, 'success');
      browserHistory.push(`/fields/${response.insertedId || doc._id}`);
    }
  });
};

const validate = () => {
  $(component.fieldEditorForm).validate({
    rules: {
      title: {
        required: true,
      },
      description: {
        required: true,
      },
      type: {
        required: true,
      },
      owner: {
        required: true,
      },
      order: {
        required: false
      }
    },
    messages: {
      title: {
        required: 'Please enter a field name.',
      },
      description: {
        required: 'Please enter a field description.',
      },
      type: {
        required: 'Please select a field type.',
      },
      owner: {
        required: 'Owner required.',
      },
    },
    submitHandler() { handleUpsert(); },
  });
};

export default function fieldEditor(options) {
  component = options.component;
  validate();
}
