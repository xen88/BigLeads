import React from 'react';
import { Grid, ListGroup, ListGroupItem, ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import { Bert } from 'meteor/themeteorchef:bert';
import { editSetting } from '../../api/documents/methods.js';

const handleEdit = (_id) => {
  browserHistory.push(`/settings/${_id}/edit`);
}

const ViewSettings = ({ doc }) => (
  <Grid>
      <div className="ViewSettings">
        <div className="page-header clearfix">
          <h4 className="f3 pull-left pageTitle ttu tracked">{ doc && doc.type }</h4>
          <ButtonToolbar className="pull-right">
            <ButtonGroup bsSize="small">
              <Button onClick={ () => handleEdit(doc._id) }>Edit</Button>
            </ButtonGroup>
          </ButtonToolbar>
        </div>
        <ListGroup bsClass="list-group altFont settingsItem">
          <ListGroupItem header="App Name">{ doc && doc.app_name }</ListGroupItem>
          <ListGroupItem header="App Hero Title">{ doc && doc.app_title }</ListGroupItem>
          <ListGroupItem header="App Hero Subtitle">{ doc && doc.app_subtitle }</ListGroupItem>
          <ListGroupItem header="App Logo">{ doc && doc.app_logo }</ListGroupItem>
        </ListGroup>
      </div>
  </Grid>
);

ViewSettings.propTypes = {
  doc: React.PropTypes.object,
};

export default ViewSettings;
