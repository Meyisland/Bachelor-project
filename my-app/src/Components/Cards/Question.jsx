import React from "react";
import "./Question.css";

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", showResultsBt: false };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let str = event.target.value;
    //ersetzt alle Zahlen von o-9 durch nichts
    let newDigits = str.replace(/[^0-9,]/g, "");
    this.setState({ value: newDigits });
  }

  handleSubmit(event) {
    event.preventDefault();
    let str = this.state.value;
    // console.log(event);
    if (
      // exact 2 kommas
      str.split(",").length - 1 == 2 &&
      // nicht zwie kommas hintereinander
      str.indexOf(",,") == -1 &&
      // Kein Komma am anfang
      str.indexOf(",") != 0 &&
      // kein komma am Ende
      str[str.length - 1] != ","
    ) {
      this.setState({ showResultsBt: true });
      console.log("right");
    } else {
      console.log("wrong");
    }
  }

  render() {
    const { questionText, setCardState, name } = this.props;
    const { showResultsBt } = this.state;

    return (
      <div>
        <p>{questionText}</p>

        <form onSubmit={this.handleSubmit}>
          <label>
            Result
            <input
              type="text"
              // pattern="{0,61,99}"
              required
              min="1"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Absenden" />
          {showResultsBt && (
            <div class="ShowAnswerButton">
              <a
                class="button"
                // href="#part_4"
                onClick={() => setCardState(name, "answer")}
              >
                Show Answer
              </a>
            </div>
          )}
        </form>
      </div>
    );
  }
}

export default Question;
