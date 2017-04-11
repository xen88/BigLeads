import React from 'react';
import { browserHistory } from 'react-router';
import { ListGroup, ListGroupItem, Alert } from 'react-bootstrap';

const handleNav = (_id) => {
  browserHistory.push(`/fields/${_id}`);
}

const FieldsList = ({ fields }) => (
  fields.length > 0 ? <ListGroup className="FieldsList">
    {fields.map(({ _id, title }) => (
      <ListGroupItem key={ _id } onClick={ () => handleNav(_id) }>
        <span className="roboto bold listItem">{ title }</span>
      </ListGroupItem>
    ))}
  </ListGroup> :
  <Alert bsStyle="warning">You have not created any fields yet.</Alert>
);

FieldsList.propTypes = {
  documents: React.PropTypes.array,
};

export default FieldsList;
