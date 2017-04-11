import React from 'react';
import { Link } from 'react-router';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import DocumentsList from '../containers/DocumentsList.js';

const Documents = () => (
  <div>
  <section className="section-wrapper">
  <Grid >
  <div className="Documents">
    <Row>
      <Col xs={ 12 }>
        <div className="page-header clearfix">
          <h4 className="f3 pull-left pageTitle ttu tracked"><span className="icon icon-rocket blue"></span> Promos</h4>
          <Link to="/documents/new">
            <button className=" btn btn-default btn-mini btn-rounded_ pull-right iconright btn-alt">
              New Promo
              <span className="icon icon-plus"></span>
            </button>
          </Link>
        </div>

        <DocumentsList />

      </Col>
    </Row>
  </div>
</Grid>
</section>
</div>
);

export default Documents;
