import React from 'react';

const Header = ({ doc }) => (

  <header className="toolbar toolbar-header">
    <div className="toolbar-actions">
      <div className="btn-group">
        <button className="btn btn-default">
          <span className="icon icon-home"></span>
        </button>
        <button className="btn btn-default">
          <span className="icon icon-folder"></span>
        </button>
        <button className="btn btn-default active">
          <span className="icon icon-cloud"></span>
        </button>
        <button className="btn btn-default">
          <span className="icon icon-popup"></span>
        </button>
        <button className="btn btn-default">
          <span className="icon icon-shuffle"></span>
        </button>
      </div>
      <div className="btn-group pull-right">
        <button className="btn btn-default">
          <span className="icon icon-popup"></span>
        </button>
        <button className="btn btn-default">
          <span className="icon icon-shuffle"></span>
        </button>
      </div>
    </div>
  </header>

);

Header.propTypes = {
  doc: React.PropTypes.object,
};

export default Header;
