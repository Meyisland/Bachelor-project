
import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
    FirstAnnahme: "",
      submitedFirst: ""
    };
  }

  inputChange = e => {
    const firstAnnahme = e.target.value;
    this.setState(() => ({ firstAnnahme }));
  };
  displayNameHandler = () => {
    this.setState(prevState => ({ submitedFirstAnnahme: prevState.firstAnnahme }));
  };

  render() {
    return (
      <div>
        <form>
          <label>Enter the Name</label>
          <input type="text" name="firstAnnahme" onChange={this.inputChange} />
          <button type="button" onClick={this.displayNameHandler}>
            Submit
          </button>
          <p>
            {this.state.submitedFirstAnnahme && this.state.submitedFirstAnnahme}
          </p>
        </form>
      </div>
    );
  }
}
export default Input;