import React from 'react';
import { Link } from 'react-router';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import ReactModal from 'react-modal';

import APIKeys from '../../api/apikeys/apikeys.js';
import YourApiKey from '../containers/YourApiKey.js';
import YourOrigins from '../components/YourOrigins.js';
import OriginForm from '../components/OriginForm.js';

class Settings extends React.Component {
  constructor () {
     super();
     this.state = {
       showModal: false
     };

     this.handleOpenModal = this.handleOpenModal.bind(this);
     this.handleCloseModal = this.handleCloseModal.bind(this);
   }

   handleOpenModal () {
     this.setState({ showModal: true });
   }

   handleCloseModal () {
     this.setState({ showModal: false });
   }
   handleAPIkey () {
     let user = Meteor.userId();
     Meteor.call('initAPIKey', user, (err,res) => {
       if(err){ console.log(err);alert(err.reason) }
     });
   }

   render() {

     return (
       <div>
       <section className="header">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
<div className="-page-header clearfix">
  <h4 className="f3 pull-left pageTitle ttu tracked ">
  <span className="icon icon-cog blue"></span> Settings</h4>

  </div>
</div>
</div>
</div>


</section>
    <section className="section-wrapper">
        <Grid>
          <div className="Settings">
            <Row>
              <Col xs={ 12 }>
                <div className="page-header clearfix">
                    <h4 className="f3 pull-left pageTitle ttu tracked">
                    <span className="icon icon-cog blue"></span> Settings
                    </h4>
                </div>

                <YourApiKey handleAPIkey={this.handleAPIkey} />
                <YourOrigins handleOpenModal={this.handleOpenModal} />

              </Col>
            </Row>
          </div>
        </Grid>

              <ReactModal
               isOpen={this.state.showModal}
               contentLabel="Add Origin"
               onRequestClose={this.handleCloseModal}
               className="originModal animated fadeIn"
               overlayClassName="modalOverlay animated fadeIn">

                <button onClick={this.handleCloseModal} className="close btn btn-default pull-right">x</button>
                <OriginForm />

              </ReactModal>
      </section>
      </div>
  )
}
}

export default Settings;
