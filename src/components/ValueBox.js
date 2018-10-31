import React, { Component } from "react";
import { Row, CardBody } from 'reactstrap';


class ValueBox extends Component {
  render() {
    return (
      <div className="card h-100 ValueBox">
      <Row className="form-group">
        <CardBody>
        <div>
          <label>{this.props.name}</label>
          <input
            className="InputLine"
            type="number"
            value={this.props.value}
            onChange={event => this.props.parentState(event.target.value)}
          />
          </div>
        </CardBody>
        </Row>
      </div>
    );
  }
}

export default ValueBox;
