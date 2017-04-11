/* eslint-disable no-undef */

import { browserHistory } from 'react-router';
import { Bert } from 'meteor/themeteorchef:bert';
import { upsertDocument } from '../api/documents/methods.js';
import { upsertFeature } from '../api/features/methods.js';
import './validation.js';

let component;

const handleUpsert = () => {
  const { data } = component.props;

  let checkedBoxes = [];
  if( data && data.fields !== undefined) {
    for(let item of data.fields) {
      let id = item._id;
      let isChecked = document.querySelector('input[id="' + id + '"]').checked;
      isChecked === true ? checkedBoxes.push(id) : '';
    }
  }

  const confirmation = data && data.doc && data.doc._id ? 'Promo updated!' : 'Promo added!';
  const upsert = {
    title: document.querySelector('[name="title"]').value.trim(),
    body: document.querySelector('[name="body"]').value.trim(),
    owner: document.querySelector('[name="owner"]').value.trim(),
    // features: _features,
    promofields: checkedBoxes,
    colorScheme: document.querySelector('[name="colorScheme"]').value.trim(),
    backgroundImage: document.querySelector('[name="backgroundImage"]').value.trim()
  };

  if (data && data.doc && data.doc._id) upsert._id = data.doc._id;
  // console.log(upsert);

  upsertDocument.call(upsert, (error, response) => {
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      upsert._id ? '' : upsert._id = response.insertedId;

      // Insert individual feature items & Add promo ID.

      // let _features = [];
      if( data && data.features !== undefined) {
        for(let feature of data.features) {
          // let id = item._id;
          feature.title = document.querySelector('fieldset[id="' + feature._id + '"] input[name="featureTitle"]').value;
          feature.description = document.querySelector('fieldset[id="' + feature._id + '"] textarea[name="featureDescription"]').value;
          // item.owner = item.owner;
          feature.doc = upsert._id;

          console.log(feature);

          upsertFeature.call(feature, (error, response) => {
              if(error) {
                // console.log('Error inserting Feature');
                console.log(error);
                  }
              else {
                // console.log('Feature inserted successfully.');
                console.log(response);
              }
          })
          // _features.push(id);
        }
      }


      Meteor.call('orderFieldInitial', upsert, function(e,r) {
        if(e) {
          console.log(e)
        }
        else {
          // console.log(r);
          component.documentEditorForm.reset();
          Bert.alert(confirmation, 'success');
          browserHistory.push(`/documents/${response.insertedId || data.doc._id}`);
        }
      });
    }
  });
};

const validate = () => {
  $(component.documentEditorForm).validate({
    rules: {
      title: {
        required: true,
      },
      body: {
        required: true,
      },

    },
    messages: {
      title: {
        required: 'Need a title in here, Seuss.',
      },
      body: {
        required: 'This needs a description, please.',
      },
    },
    submitHandler() { handleUpsert(); },
  });
};

export default function documentEditor(options) {
  component = options.component;
  validate();
}
