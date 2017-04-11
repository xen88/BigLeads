import React from 'react';
import { browserHistory } from 'react-router';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';



const Toolbar = () => (
<header className="container toolbar toolbar-header pa0">
    <div className="flex-toolbar-actions">
      <div className="flex-btn-group">
        <IndexLinkContainer to="/">

            <Button className={" btn btn-flex " }>
              <span className="icon icon-home nav-icon"></span>
              <span className="f5 fw1 ttu nav-text">Home</span>
            </Button>

        </IndexLinkContainer>
        <LinkContainer to="/settings">

          <Button className={( window.location.pathname === "/settings" ? " active " : " " ) + " btn btn-flex " }>
            <span className="icon icon-cog nav-icon"></span>
            <span className="f5 fw1 ttu nav-text">Settings</span>
          </Button>

        </LinkContainer>
        <LinkContainer to="/documents">

          <Button className={( window.location.pathname === '/documents' ? 'active' : '' ) + " btn btn-flex"}>
            <span className="icon icon-rocket nav-icon"></span>
            <span className="f5 fw1 ttu nav-text">Promos</span>
          </Button>

        </LinkContainer>
        <LinkContainer to="/fields">

          <Button className={( window.location.pathname === '/fields' ? 'active' : '' ) + " btn btn-flex"}>
            <span className="icon icon-list nav-icon"></span>
            <span className="f5 fw1 ttu nav-text">Fields</span>
          </Button>

        </LinkContainer>

        <LinkContainer to="/entries">

          <Button className={( window.location.pathname === '/entries' ? 'active' : '' ) + " btn btn-flex"}>
            <span className="icon icon-docs nav-icon"></span>
            <span className="f5 fw1 ttu nav-text">Entries</span>
          </Button>

        </LinkContainer>
      </div>
    </div>
</header>

)

export default Toolbar;
