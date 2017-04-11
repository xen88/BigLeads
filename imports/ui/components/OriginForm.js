import React from 'react';
import originEditorForm from '../../modules/origin-editor.js';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

export default class OriginForm extends React.Component {
  componentDidMount() {
    originEditorForm({ component: this });
  }
  render() {
    return (
      <div className="mt5_">
        <form
          ref={ form => (this.originEditorForm = form) }
          onSubmit={ event => event.preventDefault() }
        >
          <FormGroup>
            <ControlLabel>Origin URL</ControlLabel>
              <div className="cf">
              <input
                className="f3 f3-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-75-l br2-ns br--left-ns"
                placeholder="http://yourdomain.com/promotion"
                type="text"
                name="origin"
                id="origin-url" />
              <input className="f5 f5-l ttu tracked button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-25-l br2-ns br--right-ns"
                type="submit"
                value="Add Origin" />
            </div>
          </FormGroup>
        </form>
      </div>
    )
  }
}
