import React, { Component } from "react";
import { CardBody, Row } from "reactstrap";

class ResultBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "",
      radioButton: ""
    };
    this.setRadioButton = this.setRadioButton.bind(this);
  }

  render() {
    return (
      <div className="h-100  ResultBox">
      <Row className="form-group">
        <CardBody>
          <div className="ResultBoxText">
            <input
              type="radio"
              value="Sum"
              name="result"
              checked={this.state.radioButton === "Sum"}
              onChange={this.setRadioButton}
            />
            <label class="form-check-label" for="result">
              Sum
            </label>
          </div>
          <div class="form-check">
            <input
              type="radio"
              value="Multiply"
              name="result"
              checked={this.state.radioButton === "Multiply"}
              onChange={this.setRadioButton}
            />
            <label class="form-check-label" for="result">
              Multiply
            </label>
              <p>Result: {this.state.result}</p>
          </div>
        </CardBody>
        </Row>
      </div>
    );
  }

  calculateValue(value) {
    const { value1, value2, value3 } = this.props.parentStateValues;

    if (value === "Sum") {
      let sum = Number(value1) + Number(value2) + Number(value3);
      this.setResultState(sum);
    }
    if (value === "Multiply") {
      let multiply = value1 * value2 * value3;
      this.setResultState(multiply);
    }
  }

  setResultState(state) {
    this.setState({ result: state });
  }

  setRadioButton(event) {
    this.setState({ radioButton: event.target.value });
    this.calculateValue(event.target.value);
  }
}

export default ResultBox;
