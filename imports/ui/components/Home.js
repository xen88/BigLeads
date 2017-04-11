import React from 'react';
import { Grid } from 'react-bootstrap';
import Stats from '../components/stats.js';
import LoggedOut from '../components/LoggedOut.js';

const Home = ({ hasUser }) => (
  <div className="Index mw-100">
    { hasUser ? <Grid className="mt5"><Stats /></Grid> : <LoggedOut className=""/> }
  </div>
)
export default Home;
