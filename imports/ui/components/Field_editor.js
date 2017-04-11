/* eslint-disable max-len, no-return-assign */

import React from 'react';
import { Grid, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import petitionfieldEditor from '../../modules/field-editor.js';

export default class FieldEditor extends React.Component {
  componentDidMount() {
    petitionfieldEditor({ component: this });
    setTimeout(() => { document.querySelector('[name="title"]').focus(); }, 0);
  }

  render() {
    const { doc } = this.props;
    const owner = Meteor.userId();
    return (
      <form
      ref={ form => (this.fieldEditorForm = form) }
      onSubmit={ event => event.preventDefault() }
    >
      <FormGroup>
        <ControlLabel>Title</ControlLabel>
        <FormControl
          type="text"
          name="title"
          defaultValue={ doc && doc.title }
          placeholder="Field Name"
        />
      </FormGroup>
      <FormGroup>
        <ControlLabel>Description</ControlLabel>
        <FormControl
          type="text"
          name="description"
          defaultValue={ doc && doc.description }
          placeholder="Field Description"
        />
      </FormGroup>
      <FormGroup>
        <ControlLabel>Type</ControlLabel>
        <FormControl
          type="text"
          name="type"
          defaultValue={ doc && doc.type }
          placeholder="Select a field type"
        />
      </FormGroup>
      <FormGroup className="hidden">
        <ControlLabel>Owner</ControlLabel>
        <FormControl
          type="text"
          name="owner"
          defaultValue={ owner }
        />
      </FormGroup>
      <p className="mb3"><small>To enforce better User Experience for your users, all form fields are 'required' by default. Any 'optional' fields should not be on the form.</small></p>

      <hr></hr>
      <Button type="submit" className=" btn-lg ">
        <span className="roboto_ white_ bold_ uppercase_">
        { doc && doc._id ? 'Save Changes ' : 'Add Field' }
         <i className="mrx mrx-arrow-right"></i>
        </span>
      </Button>

    </form>

  );
  }
}

FieldEditor.propTypes = {
  doc: React.PropTypes.object,
};
