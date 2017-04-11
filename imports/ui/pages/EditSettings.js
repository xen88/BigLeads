import React from 'react';
import SettingsEditor from '../components/SettingsEditor.js';
import { Grid } from 'react-bootstrap';

const EditSettings = ({ doc }) => (
  <Grid>
    <div className="EditSettings">
      <h4 className="f3 pull-left pageTitle ttu tracked">{ doc.type } Settings</h4>
      <SettingsEditor doc={ doc } />
    </div>
  </Grid>
);

EditSettings.propTypes = {
  doc: React.PropTypes.object,
};

export default EditSettings;
