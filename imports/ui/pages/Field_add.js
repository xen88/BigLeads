import React from 'react';
import FieldEditor from '../components/Field_editor.js';
import { Grid, Row, Col, Button } from 'react-bootstrap';

const FieldAdd = () => (
  <section className="section-wrapper">
    <Grid>
      <div className="FieldAdd">

        <div className="page-header clearfix">
            <h4 className="f3 pull-left pageTitle ttu tracked">New Field</h4>
        </div>

      <FieldEditor />
      </div>
    </Grid>
  </section>
);

export default FieldAdd;
