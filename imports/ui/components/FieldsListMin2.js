/* eslint-disable max-len, no-return-assign */

import React from 'react';
import { Grid, Panel, ListGroup, ListGroupItem, FormGroup, ControlLabel, FormControl, Checkbox, Button } from 'react-bootstrap';

export default class FieldsListMin2 extends React.Component {
  componentDidMount() {

  }

  render() {
    const { fields } = this.props;
    return (
      <Panel collapsible defaultExpanded header="Fields" className="mt5">
        <ListGroup fill>
          {fields.map(({ _id, title, fielddescription, fieldtype }) => (

            <ListGroupItem key={_id} id={_id}>
              <span>{ title }</span>
            </ListGroupItem>

          ))}
        </ListGroup>
      </Panel>
    );
  }
}

FieldsListMin2.propTypes = {
  fields: React.PropTypes.array
};
