import React from 'react';
import { ListGroup, ListGroupItem, Alert } from 'react-bootstrap';
import YourOriginsList from '../containers/YourOriginsList.js';

const YourOrigins = (props) => (
  <div className="mt5_ mb6">
    <div className="section-header mt5">
      <button onClick={props.handleOpenModal} className=" btn btn-default btn-mini pull-right iconright btn-alt">
        Add Origin <span className="icon icon-plus"></span>
      </button>

      <h4 className="f4 fw6 ttu tracked dark-red_">Your Origins <span className="icon icon-network dark-red"></span></h4>
      <p><span className="black-50">Add any new origins to allow access to our API</span></p>
    </div>

    <hr></hr>

    <YourOriginsList />

  </div>
)
export default YourOrigins;
