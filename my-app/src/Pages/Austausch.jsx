import React, { Component } from "react";
import Match from "../Components/Match";

class Austausch extends Component {
  state = {};
  render() {
    return (
      <>
        <Match language={this.props.language} />
        <section id="part_5" tabIndex="5">
          <h2>Test</h2>
          {this.props.firstAnnahme}
          {this.props.language}
        </section>
      </>
    );
  }
}

export default Austausch;
