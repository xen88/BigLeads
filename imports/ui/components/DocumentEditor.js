/* eslint-disable max-len, no-return-assign */

import React from "react";
import {
  Grid,
  FormGroup,
  ControlLabel,
  FormControl,
  Checkbox,
  Row,
  Col,
  Button
} from "react-bootstrap";
import documentEditor from "../../modules/document-editor.js";
import Color from "./Color.js";
// import Features from '';

export default class DocumentEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorScheme: (
        props && props.data && props.data.doc && props.data.doc.colorScheme ||
          "#fff"
      ),
      data: props && props.data
    };
    this.colorSchemeHandler = this.colorSchemeHandler.bind(this);
    this.addFeature = this.addFeature.bind(this);
  }
  componentDidMount() {
    documentEditor({ component: this });
  }
  colorSchemeHandler(color) {
    const _color = color.hex;
    this.setState({ colorScheme: _color });
  }
  colorChange() {
  }
  addFeature(evt) {
    evt.preventDefault();
    // console.log(this.state);
    if(this.state.data && this.state.data.doc && this.state.data.doc._id){
      let feature = {
        owner: Meteor.userId(),
        doc: this.state.data.doc._id
      }
      Meteor.call('insertFeature', feature);
    }
    else {
      let feature = {
        owner: Meteor.userId(),
        doc: 'pending'
      }
      Meteor.call('insertFeature', feature);
    }


  }
  componentDidUpdate(r, t) {
  }
  render() {
    const { data } = this.props;
    const owner = Meteor.userId();
    const fields = data && data.doc ? data.doc.promofields : [];
    const features = data && data.doc ? data.doc.features : [];
    const colorScheme = this.state.colorScheme;

    return (
      <form
        ref={form => this.documentEditorForm = form}
        onSubmit={event => event.preventDefault()}
      >
        <Row>

          <Col xs={12} sm={8} md={9}>
            <FormGroup>
              <ControlLabel>Title</ControlLabel>
              <FormControl
                type="text"
                name="title"
                defaultValue={data && data.doc && data.doc.title}
                placeholder="Promo title"
              />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Body</ControlLabel>
              <FormControl
                type="textarea"
                componentClass="textarea"
                name="body"
                defaultValue={data && data.doc && data.doc.body}
                placeholder="Promo description"
              />
            </FormGroup>
            <FormGroup className="hidden">
              <ControlLabel>Owner</ControlLabel>
              <FormControl type="text" name="owner" defaultValue={owner} />
            </FormGroup>
            <FormGroup className="hidden">
              <ControlLabel>Color Scheme</ControlLabel>
              <FormControl
                type="text"
                name="colorScheme"
                value={this.state.colorScheme}
                onChange={this.colorChange}
              />
            </FormGroup>
            <FormGroup className="hidden_">
              <ControlLabel>Header Background Image</ControlLabel>
              <FormControl
                type="text"
                name="backgroundImage"
                defaultValue={data && data.doc && data.doc.backgroundImage}
              />

            </FormGroup>
            <img src={data && data.doc && data.doc.backgroundImage} className="img thumbnail headerImage-preview" />

          </Col>
          <Col xs={12} sm={4} md={3}>
            <FormGroup className="fieldSelection">
              <ControlLabel>Select fields</ControlLabel>

              {data !== undefined
                ? data.fields.map(({ _id, title }) => (
                    <div className="roundedOne" id={_id} key={_id}>
                      <input
                        type="checkbox"
                        id={_id}
                        name="check"
                        defaultChecked={
                          _.contains(fields, _id) ? "checked" : ""
                        }
                      />
                      <label htmlFor="roundedOne">
                        <span className="check-label">{title}</span>
                      </label>

                    </div>
                  ))
                : ""}

            </FormGroup>

          </Col>

          <Col xs={12} sm={12} md={12}>
            <div className="page-header clearfix">
              <h4 className="f4 pull-left pageTitle ttu tracked">Color Scheme</h4>
            </div>
            <FormGroup>
              <ControlLabel>Select a color scheme</ControlLabel>

              <Color colorSchemeHandler={this.colorSchemeHandler} />

            </FormGroup>

            <div className="page-header clearfix mt4">
              <h4 className="f4 pull-left pageTitle ttu tracked">Features</h4>
              <a className="btn btn-default pull-right" onClick={this.addFeature}>Add Feature +</a>
            </div>

            <Row>
            {data !== undefined
              ? data.features.map(({ _id, title, description }) => (
                <Col xs={12} sm={4} md={4} key={_id}>
                  <fieldset className="feature" id={_id} >
                      <FormGroup className="hidden_">
                        <ControlLabel>Title</ControlLabel>
                        <FormControl
                          type="text"
                          name="featureTitle"
                          defaultValue={title}
                        />
                      </FormGroup>
                      <FormGroup className="hidden_">
                        <ControlLabel>description</ControlLabel>
                        <FormControl

                          componentClass="textarea"
                          name="featureDescription"
                          defaultValue={description}
                        />
                      </FormGroup>
                  </fieldset>
                </Col>
                ))
              : ""}
              </Row>
          </Col>

          <Col xs={12} sm={12} md={12}>
            <p className="mb3"><small>To enforce better User Experience for your users, all form fields are 'required' by default. Any 'optional' fields should not be on the form.</small></p>

<hr></hr>

          <Button type="submit" className=" btn-lg ">
              {data && data.doc && data.doc._id
                ? "Save Changes"
                : "Add Document"}
          </Button>

          </Col>
          <style type="text/css">
            {
              `
        div[title="` +
                colorScheme +
                `"] {
      transform: scale(1.5);
      border: 5px solid #DDD;
    }

      `
            }
          </style>
        </Row>
      </form>
    );
  }
}

DocumentEditor.propTypes = {
  data: React.PropTypes.object
};
