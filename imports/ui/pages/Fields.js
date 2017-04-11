import React from 'react';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';
import FieldsList from '../containers/FieldsList.js';

const Fields = () => (
  <section className="section-wrapper">
      <Grid >
          <div className="Fields">
            <Row>
              <Col xs={ 12 }>
                <div className="page-header clearfix">
                  <h4 className="f3 pull-left pageTitle ttu tracked"><span className="icon icon-list blue"></span> Fields</h4>
                      <Link to="/fields/new">
                        <button className=" btn btn-default btn-mini btn-rounded_ pull-right iconright btn-alt">
                          Add Field
                          <span className="icon icon-plus"></span>
                        </button>
                      </Link>

                    <div className="section-header mt5">
                      <h4 className="f4 fw6 ttu tracked blue">A list of all your fields</h4>
                      <p><span className="black-50">You can select individual fields on promo pages</span></p>
                    </div>
                </div>

                <FieldsList />

              </Col>
            </Row>
          </div>
      </Grid>
  </section>
);

export default Fields;
