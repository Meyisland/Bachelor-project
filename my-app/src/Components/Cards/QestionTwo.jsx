import React from "react";
import "./Question.css";

class QuestionTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { firstCHoise: "", secondChoise: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.firstChoise]: event.target.value,
      [event.target.firstsecondChoice]: event.target.value,
    });

    // let str = event.target.value;
    // let newDigits = str.replace(/[^0-9,]/g, "");
    // this.setState({ value: newDigits });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    // const { questionText, setCardState, name } = this.props;
    // const { showResultsBt } = this.state;

    return (
      <div>
        <p>
          As you are leaving your neighborhood supermarket a man in a business
          suit asks you whether you like shopping in that store. You reply quite
          honestly that you do like shopping there and indicate that in addition
          to being close to your home the supermarket seems to have very good
          meats and produce at reasonably low prices. The man then reveals that
          a videotape crew has filmed your comments and asks you to sign a
          release allowing them to use the unedited film for a TV commercial
          that the supermarket chain is preparing.
        </p>

        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              What % of your peers do you estimate would sign the release?
            </label>
            <input
              name="firstChoise"
              //   placeholder="Email"
              value={this.state.firstCHoise}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>What % would refuse to sign it?</label>
            <input
              name="secondChoise"
              //   placeholder="Name"
              value={this.state.secondChoise}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default QuestionTwo;
