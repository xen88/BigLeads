import React from 'react';
import { Link } from 'react-router';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import EntriesList from '../containers/EntriesList.js';

const Entries = () => (
  <div>
  <section className="section-wrapper">
  <Grid >
  <div className="Documents">
    <Row>
      <Col xs={ 12 }>
        <div className="page-header clearfix">
          <h4 className="f3 pull-left pageTitle ttu tracked"><span className="icon icon-docs blue"></span> Entries</h4>
        </div>

        <EntriesList />

      </Col>
    </Row>
  </div>
</Grid>
</section>
</div>
);

export default Entries;
