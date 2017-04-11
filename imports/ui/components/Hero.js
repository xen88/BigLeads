import React from 'react';
import { Jumbotron } from 'react-bootstrap';

const Hero = () => (

  <Jumbotron className="text-center bgBlue br0 jumbotron vh-100 w-100 dt">
    <div className="dtc v-mid">
      <div className="mw8 m0a">
        <h2><span className="roboto bold white">Small business lead generation made simple.</span></h2>
        <p className="mw7 m0a"><span className="roboto light white">Set up accessible, mobile friendly lead generation mini-sites in a few clicks.</span></p>
      </div>
  </div>
  </Jumbotron>

);

Hero.propTypes = {
  doc: React.PropTypes.object,
};

export default Hero;
