import "./Cards.css";
import React, { Component } from "react";
import Default from "./Cards/Default";
import Question from "./Cards/Question";

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, title, image, button, status, questionText, setCardState } =
      this.props;
    return (
      <div class="card">
        {status == "default" && (
          <Default
            name={name}
            title={title}
            image={image}
            button={button}
            setCardState={setCardState}
          />
        )}
        {status == "question" && (
          <Question
            name={name}
            title={title}
            questionText={questionText}
            setCardState={setCardState}
          />
        )}
      </div>
    );
  }
}

export default Card;
