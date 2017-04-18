import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router';
import PublicNavigation from './PublicNavigation.js';
import AuthenticatedNavigation from './AuthenticatedNavigation.js';
import Toolbar from './Toolbar.js';

const renderNavigation = hasUser => (hasUser ? <AuthenticatedNavigation /> : <PublicNavigation />);
const renderNavigationToolbar = hasUser => (hasUser ? <Toolbar /> : '' );

const AppNavigation = ({ hasUser }) => (
<div className="appNav">
  <Navbar className=" noMargin altStyle br0 bg-blue none">
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/"><span className="white montserrat bold uppercase_ opacity50 lsn">big</span><span className="white light opacity50">leads</span></Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      { renderNavigation(hasUser) }
    </Navbar.Collapse>
  </Navbar>
  { renderNavigationToolbar(hasUser) }
</div>
);

AppNavigation.propTypes = {
  hasUser: React.PropTypes.object,
};

export default AppNavigation;
