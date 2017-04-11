import React from 'react';
// import { Jumbotron } from 'react-bootstrap';

const Sidebar = ({ doc }) => (

  <ul className="list-group">
    <li className="list-group-header">
      <input className="form-control" type="text" placeholder="Search for someone" />
    </li>
    <li className="list-group-item">
      <img className="img-circle media-object pull-left" src="/assets/img/avatar.jpg" width="32" height="32" />
      <div className="media-body">
        <strong>List item title</strong>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    </li>
    <li className="list-group-item">
      <img className="img-circle media-object pull-left" src="/assets/img/avatar2.png" width="32" height="32" />
      <div className="media-body">
        <strong>List item title</strong>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    </li>

  </ul>

);

Sidebar.propTypes = {
  doc: React.PropTypes.object,
};

export default Sidebar;
