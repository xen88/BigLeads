import React from 'react';
import { browserHistory } from 'react-router';
import { ListGroup, ListGroupItem, Alert } from 'react-bootstrap';
import Entry from './entry';

const handleNav = (_id) => {
  browserHistory.push(`/entries/${_id}`);
}

const EntriesList = ({ entries }) => (
  entries.length > 0
  ? <ListGroup className="EntriesList">
    { entries.map( (entry) => (
        <Entry entry={entry} key={entry._id}  />
    ))}
  </ListGroup>
  : <Alert bsStyle="warning">No entries yet.</Alert>
);

EntriesList.propTypes = {
  documents: React.PropTypes.array,
};

export default EntriesList;
