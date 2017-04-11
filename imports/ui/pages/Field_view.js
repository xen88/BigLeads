import React from 'react';
import { Grid, ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import { Bert } from 'meteor/themeteorchef:bert';
import { removePetitionField } from '../../api/documents/methods.js';

const handleEdit = (_id) => {
  browserHistory.push(`/fields/${_id}/edit`);
}
const goBack = () => {
  browserHistory.push(`/fields/`);
}

const handleRemove = (_id) => {
  if (confirm('Are you sure? This is permanent!')) {
    removePetitionField.call({ _id }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert('Document deleted!', 'success');
        browserHistory.push('/fields');
      }
    });
  }
};

const FieldView = ({ doc }) => (
  <section className="section-wrapper">
  <Grid>
  <div className="ViewPetitionField">
    <div className="page-header clearfix">
      <h4 className="f3 pull-left pageTitle ttu tracked">{ doc && doc.title }</h4>
      <ButtonToolbar className="pull-right">
        <ButtonGroup bsSize="small">
          <Button onClick={ () => goBack() }>Back</Button>
          <Button onClick={ () => handleEdit(doc._id) }>Edit</Button>
          <Button onClick={ () => handleRemove(doc._id) } className="text-danger">Delete</Button>
        </ButtonGroup>
      </ButtonToolbar>
    </div>
    <p className=""><strong>Label: </strong>{ doc && doc.description}</p>
    <p className=""><strong>Type: </strong>{ doc && doc.type}</p>
  </div>
</Grid>
</section>
);

FieldView.propTypes = {
  doc: React.PropTypes.object,
};

export default FieldView;
