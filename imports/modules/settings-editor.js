/* eslint-disable no-undef */

import { browserHistory } from 'react-router';
import { Bert } from 'meteor/themeteorchef:bert';
// import { upsertPetitionField } from '../api/documents/methods.js';
import { upsertSettings } from '../api/documents/methods.js';
import './validation.js';

let component;

const handleUpsert = () => {
  console.log('Upsert triggered')
  const { doc } = component.props;
  const confirmation = doc && doc._id ? 'Document updated!' : 'Document added!';
  const upsert = {
    app_name: document.querySelector('[name="app_name"]').value.trim(),
    app_logo: document.querySelector('[name="app_logo"]').value.trim(),
    app_title: document.querySelector('[name="app_title"]').value.trim(),
    app_subtitle: document.querySelector('[name="app_subtitle"]').value.trim()
  };

  if (doc && doc._id) upsert._id = doc._id;

  upsertSettings.call(upsert, (error, response) => {
    console.log('upsertSettings.call')
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      component.settingsEditorForm.reset();
      Bert.alert(confirmation, 'success');
      browserHistory.push(`/settings/${response.insertedId || doc._id}`);
    }
  });
};

const validate = () => {
  $(component.fieldEditorForm).validate({
    rules: {
      app_name: {
        required: true,
      },
      app_logo: {
        required: true,
      },
      app_title: {
        required: true,
      },
      app_subtitle: {
        required: true,
      },
    },
    messages: {
      app_name: {
        required: 'Please enter your App name.',
      },
      app_logo: {
        required: 'Please provide a URL to your logo.',
      },
      app_title: {
        required: 'Please provide a header title.',
      },
      app_subtitle: {
        required: 'Please provide a header subtitle.',
      }
    },
    submitHandler() { handleUpsert(); },
  });
};

export default function settingsEditor(options) {
  component = options.component;
  validate();
}
