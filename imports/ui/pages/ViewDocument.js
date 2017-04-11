import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, ButtonToolbar, ButtonGroup, Badge, Button } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import { Bert } from 'meteor/themeteorchef:bert';
import { removeDocument } from '../../api/documents/methods.js';
import FieldsListMin2 from '../containers/FieldsListMin2.js';
import Sortable from '../containers/Sortable.js';

const handleEdit = (_id) => {
  browserHistory.push(`/documents/${_id}/edit`);
}

const handleRemove = (_id) => {
  if (confirm('Are you sure? This is permanent!')) {
    removeDocument.call({ _id }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert('Document deleted!', 'success');
        browserHistory.push('/documents');
      }
    });
  }
};

const ViewDocument = ({ doc }) => (
  <section className="section-wrapper">
  <Grid>
      <div className="ViewDocument">
        <div className="page-header clearfix">
          <h4 className="f3 pull-left pageTitle ttu tracked">{ doc && doc.title }</h4>
          <ButtonToolbar className="pull-right">
            <ButtonGroup bsSize="medium">
              <Button onClick={ () => handleEdit(doc._id) }>Edit</Button>
              <Button onClick={ () => handleRemove(doc._id) } className="text-danger">Delete</Button>
            </ButtonGroup>
          </ButtonToolbar>
        </div>

        { doc && doc.body }

        <br></br>

        <div className="section-header mt5">
          <h4 className="f4 fw6 ttu tracked blue">Selected Fields</h4>
          <p><span className="black-50">Drag to reorder <span className="icon icon-arrow-combo"></span></span></p>
          <hr></hr>
        </div>
        <div className="sortable-wrapper">
          <Sortable params={ doc } />
        </div>

      </div>
  </Grid>
  </section>
);

ViewDocument.propTypes = {
  doc: React.PropTypes.object,
};

export default ViewDocument;
