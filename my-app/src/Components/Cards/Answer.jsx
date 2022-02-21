import React, { Component } from "react";

class Answer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstAnnahme: "",
      submitedFirst: "",
    };
  }

  inputChange = (e) => {
    const firstAnnahme = e.target.value;
    this.setState(() => ({ firstAnnahme }));
  };
  displayNameHandler = () => {
    this.props.submitFirstAnnahme(this.state.firstAnnahme);
  };

  render() {
    return (
      <div>
        <form>
          <label>Gebe die weiterführende Regel ein</label>
          <input type="text" name="firstAnnahme" onChange={this.inputChange} />
          <button type="button" onClick={this.displayNameHandler}>
            Submit
          </button>
          <p></p>
        </form>
      </div>
    );
  }
}
export default Answer;
