import React from 'react';
import APIKeys from '../../api/apikeys/apikeys.js';

const YourApiKey = (props) => (
  <div className="mt5_ mb6">
  <div className="section-header mt5">
    { !props.APIkey
      ? <button onClick={props.handleAPIkey} className=" btn btn-default btn-mini pull-right iconright btn-alt">
        Get API Key <span className="icon icon-plus"></span>
        </button>
      : <div></div>
     }


    <h4 className="f4 fw6 ttu tracked dark-red_">Your API Key <span className="icon icon-key dark-red"></span></h4>
    <p><span className="black-50">Keep it safe</span></p>
    <hr></hr>
    </div>
    <p><code className="apikey">{ props.APIkey }</code></p>
  </div>
)
YourApiKey.propTypes = {
  APIkey: React.PropTypes.string,
};
export default YourApiKey;
