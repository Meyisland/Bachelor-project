import "./Cards.css";
import React, { Component } from "react";
import Card from "./Card";

const democardstates = {
  default: "default",
  question: "question",
  answer: "answer",
  finish: "finish",
};

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "React",
      showDemo1: democardstates.question,
      cardStates: {
        confirmation: democardstates.default,
        consenus: democardstates.default,
        anchoring: democardstates.default,
      },
    };
  }

  setCardState(name, cardState) {
    console.log(name, cardState);
    this.setState((state) => ({
      cardStates: { ...state.cardStates, [name]: cardState },
    }));
  }

  render() {
    const { showDemo1, cardStates } = this.state;

    return (
      <div class="wrapper">
        <Card
          name={"confirmation"}
          status={cardStates.confirmation}
          title={"confirmation Bias"}
          questionText={"Führe dise Reihenfolge weiter.."}
          setCardState={(name, state) => this.setCardState(name, state)}
        />
        <Card
          name={"consenus"}
          status={cardStates.consenus}
          title={"False-consensus bias"}
        />
        <Card
          name={"anchoring"}
          status={cardStates.anchoring}
          title={"Anchoring bias"}
        />
        {/* <div class="card">
          <h3>False-consensus bias</h3>
          <p>insert fancy Grapic here</p>

          <button
            href="#part_4"
            onClick={() => this.hideComponent("showDemo1")}
          >
            Click to hide Demo1 component
          </button>
        </div>

        <div class="card">
          <h3>Anchoring bias</h3>
          <p>insert fancy Grapic here</p>
          <button>GO</button>
        </div> */}
      </div>
    );
  }
}
export default Cards;
