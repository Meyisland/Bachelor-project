import "./Cards.css";
import React, { Component } from "react";
import Demo1 from "./Demo1";

import { render } from "@testing-library/react";
import NameForm from "./Demo1";

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "React",
      showHideDemo1: false,
    };
    this.hideComponent = this.hideComponent.bind(this);
  }

  hideComponent(name) {
    console.log(name);
    switch (name) {
      case "showHideDemo1":
        this.setState({ showHideDemo1: !this.state.showHideDemo1 });
      default:
    }
  }

  render() {
    const { showHideDemo1 } = this.state;

    return (
      <div class="wrapper">
        <div class="card">
          <h3>Confirmation bias</h3>
          <p>insert fancy Grapic here</p>
          {showHideDemo1 && <NameForm />}
          <a
            class="button"
            // href="#part_4"
            onClick={() => this.hideComponent("showHideDemo1")}
          >
            GO
          </a>{" "}
          {/* <button onclick="href = #part_2"> GO</button>{" "} */}
        </div>

        <div class="card">
          <h3>False-consensus bias</h3>
          <p>insert fancy Grapic here</p>

          <button
            href="#part_4"
            onClick={() => this.hideComponent("showHideDemo1")}
          >
            Click to hide Demo1 component
          </button>
        </div>

        <div class="card">
          <h3>Anchoring bias</h3>
          <p>insert fancy Grapic here</p>
          <button>GO</button>
        </div>
      </div>
    );
  }
}
export default Cards;
