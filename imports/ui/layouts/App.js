import React from 'react';
import { Grid } from 'react-bootstrap';
import AppNavigation from '../containers/AppNavigation.js';
import Toolbar from '../containers/Toolbar.js';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const App = ({ children }) => (
  <div>
    <AppNavigation />

    <Grid bsClass=" noPadding dark_ light container-fluid wrapper">
      { children }
    </Grid>
  </div>
);

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
