import React from 'react';
import { browserHistory } from 'react-router';
import { ListGroup, ListGroupItem, Alert } from 'react-bootstrap';

const handleNav = (_id) => {
  browserHistory.push(`/documents/${_id}`);
}

const DocumentsList = ({ documents }) => (
  documents.length > 0 ? <ListGroup className="DocumentsList">
    {documents.map(({ _id, title }) => (
      <ListGroupItem key={ _id } onClick={ () => handleNav(_id) }>
      <span className="roboto bold listItem">{ title }</span>
      </ListGroupItem>
    ))}
  </ListGroup> :
  <Alert bsStyle="warning">You have not created any promos yet.</Alert>
);

DocumentsList.propTypes = {
  documents: React.PropTypes.array,
};

export default DocumentsList;
