/* eslint-disable max-len, no-return-assign */

import React from 'react';
import { Grid, ListGroup, ListGroupItem, FormGroup, ControlLabel, FormControl, Checkbox, Button } from 'react-bootstrap';

export default class FieldsListMin extends React.Component {
  componentDidMount() {
  }

  render() {
    const { fields } = this.props;
    return (

      <ListGroup className="FieldsListMin">

        {fields.map(({ _id, title }) => (
        <Checkbox id={_id} key={_id} >
            { title }
          </Checkbox>
        ))}

      </ListGroup>
    );
  }
}

FieldsListMin.propTypes = {
  fields: React.PropTypes.array
};
