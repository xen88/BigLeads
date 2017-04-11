import React from 'react';
import { ListGroupItem } from 'react-bootstrap';

const Entry = ({ entry }) => (
  <ListGroupItem className="flex entry-item">
  { entry.data.map( (item) => (
      item.type === 'checkbox'
      ? <div key={item.id} className="flex entry-sub-item checkbox"><p>{item.value ? <span className="icon icon-compass true"></span> : <span className="icon icon-compass"></span>}</p></div>
      : item.type === 'textarea'
      ? <div key={item.id} className="flex entry-sub-item textarea"><p>{item.value}</p></div>
      : <div key={item.id} className="flex entry-sub-item text"><p>{item.value}</p></div>
  ))}
  </ListGroupItem>
);

Entry.propTypes = {
  entry: React.PropTypes.object
};

export default Entry;
