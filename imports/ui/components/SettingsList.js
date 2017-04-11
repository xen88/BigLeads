import React from 'react';
import { browserHistory } from 'react-router';
import { ListGroup, ListGroupItem, Alert } from 'react-bootstrap';

const handleNav = (_id) => {
  browserHistory.push(`/settings/${_id}`);
}

const SettingsList = ({ settings }) => (
  settings.length > 0 ? <ListGroup className="SettingsList">
    {settings.map(({ _id, type, app_name, app_title, app_subtitle, app_logo }) => (
      <ListGroupItem key={ _id } onClick={ () => handleNav(_id) }>
          <strong>{ type } Settings</strong>
      </ListGroupItem>
    ))}
  </ListGroup> :
  <Alert bsStyle="warning">No documents yet.</Alert>
);

SettingsList.propTypes = {
  settings: React.PropTypes.array,
};

export default SettingsList;
