import React from 'react';
import DocumentEditor from '../components/DocumentEditor.js';
import { Grid } from 'react-bootstrap';

const EditDocument = ({ data }) => (
  <section className="section-wrapper">
    <Grid>
        <div className="EditDocument">

          <header className="fn clearfix">
              <time className="f5 ttu tracked gray">{ data && data.doc ? 'Editing' : 'New Document' }</time>
              <h1 className="mb3 mt0 lh-title">{ data && data.doc ? data.doc.title : '' }</h1>
              <hr></hr>
            </header>


          {/*-- <div className="page-header clearfix">
              <h4 className="f3 pull-left pageTitle ttu tracked">{ data && data.doc ? 'Editing ' + data.doc.title : 'New Document' }</h4>
          </div> --*/}

            <DocumentEditor data={ data } />
        </div>
    </Grid>
  </section>
);

EditDocument.propTypes = {
  data: React.PropTypes.object
};

export default EditDocument;
