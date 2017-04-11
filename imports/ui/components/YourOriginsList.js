import React from 'react';
import { ListGroup, ListGroupItem, Alert } from 'react-bootstrap';

const YourOriginsList = ({origins}) => (
  <div className="mt5_">

    { origins.length > 0 ? <ListGroup className="OriginsList">
      {origins.map(({ _id, origin }) => (
          <p key={ _id }><code className="origin">{ origin }</code></p>
      ))}
      </ListGroup>

    :
    <Alert bsStyle="warning">No origins yet.</Alert>
}
  </div>
)

// YourOriginsList.propTypes = {
//   origins: React.PropTypes.Array
// };
export default YourOriginsList;
