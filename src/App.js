import React, { Component } from "react";
import { Row } from "reactstrap";
import ValueBox from './components/ValueBox';
import ResultBox from './components/ResultBox';

import "./App.css";

class App extends Component {

  constructor(props) {
    super(props);
      this.state = {
        value1: "",
        value2: "",
        value3: ""
      };
  }

  render() {

    return (
      <div className="App">
        <Row className="form-group">
        <div className="BoxesInMiddle">
        <div className="row">
          <div className="BoxSize col-12  col-sm">
            <ValueBox name="Value 1:" parentState={(value1) => this.setState({value1})}/>
          </div>
          <div className="BoxSize col-12  col-sm">
            <ValueBox name="Value 2:" parentState={(value2) => this.setState({value2})}/>
          </div>
          <div className="BoxSize col-12  col-sm">
            <ValueBox name="Value 3:" parentState={(value3) => this.setState({value3})}/>
          </div>
          <div className="BoxSize col-12  col-sm">
            <ResultBox parentStateValues={this.state}/>
          </div>
          </div>
          </div>
        </Row>
        </div>
    );
  }

}

export default App;
