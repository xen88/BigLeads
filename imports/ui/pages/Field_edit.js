import React from 'react';
import FieldEditor from '../components/Field_editor.js';
import { Grid } from 'react-bootstrap';

const FieldEdit = ({ doc }) => (
  <section className="section-wrapper">
      <Grid>
        <div className="EditPetitionField">
          <div className="page-header clearfix">
              <h4 className="f3 pull-left pageTitle ttu tracked">{ doc ? 'Editing ' + doc.title : 'New Field' }</h4>
          </div>

          <FieldEditor doc={ doc } />

        </div>
      </Grid>
  </section>
);

FieldEdit.propTypes = {
  doc: React.PropTypes.object,
};

export default FieldEdit;
