/* eslint-disable max-len, no-return-assign */

import React from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import settingsEditor from '../../modules/settings-editor.js';

export default class SettingsEditor extends React.Component {
  componentDidMount() {
    settingsEditor({ component: this });
    setTimeout(() => { document.querySelector('[name="app_title"]').focus(); }, 0);
  }

  render() {
    const { doc } = this.props;
    return (
      <form
      ref={ form => (this.settingsEditorForm = form) }
      onSubmit={ event => event.preventDefault() } >
      <FormGroup>
        <ControlLabel>App Name</ControlLabel>
        <FormControl
          type="text"
          name="app_name"
          defaultValue={ doc && doc.app_name }
          placeholder="App Name"
        />
      </FormGroup>
      <FormGroup>
        <ControlLabel>Hero Title</ControlLabel>
        <FormControl
          type="text"
          name="app_title"
          defaultValue={ doc && doc.app_title }
          placeholder="Hero Title"
        />
      </FormGroup>
      <FormGroup>
        <ControlLabel>Hero Subtitle</ControlLabel>
        <FormControl
          type="text"
          name="app_subtitle"
          defaultValue={ doc && doc.app_subtitle }
          placeholder="Hero Subtitle"
        />
      </FormGroup>
      <FormGroup>
        <ControlLabel>App Logo</ControlLabel>
        <FormControl
          type="text"
          name="app_logo"
          defaultValue={ doc && doc.app_logo }
          placeholder="App Logo URL"
        />
      </FormGroup>

      <Button type="submit" className="btn btn-primary btn-block btn-xxl fixed-bottom ">
        <span className="roboto white bold uppercase">
        { doc && doc._id ? 'Save Changes' : 'Add Field' }
        <i className="mrx mrx-arrow-right"></i>
        </span>
      </Button>

    </form>);
  }
}

SettingsEditor.propTypes = {
  doc: React.PropTypes.object,
};
