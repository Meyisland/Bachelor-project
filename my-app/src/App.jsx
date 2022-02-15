import "./App.css";
import React, { Component } from "react";
import Input from "./Components/Input";
import Menu from "./Components/Menu";
import Cards from "./Components/Cards";
import Question from "./Components/Cards/Question";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitedFirstAnnahme: "",
    };
  }

  render() {
    return (
      <div className="App">
        <Menu />
        <section id="part_1" tabIndex="1">
          <h2>Unterbewusste Vorurteile</h2>
          <p>Unterbewusste Vorurteile betreffen jeden Designer</p>
          <ul>
            <li>
              <a href="#part_2">Info</a>{" "}
            </li>
            <li>
              <a href="#part_3">Annhamen</a>{" "}
            </li>
            <li>
              <a href="#part_4">Prinzipien</a>
            </li>
          </ul>
          <p></p>
        </section>
        <section id="part_2" tabIndex="2">
          <h2>Erste Annahmen</h2>
          <div>
            <Input
              submitFirstAnnahme={(annahme) =>
                this.setState({ submitedFirstAnnahme: annahme })
              }
            />
          </div>
        </section>
        <section id="part_3" tabIndex="3">
          <h2>Wähle einen Bias</h2>
          <div>
            <Cards />
          </div>
        </section>
        <section id="part_4" tabIndex="4">
          <h2>Test</h2>
          <div></div>
        </section>
        <section id="part_5" tabIndex="5">
          <h2>Test</h2>
          {this.state.submitedFirstAnnahme}
        </section>
        <section id="part_6" tabIndex="6">
          <h2>Annahmen</h2>
        </section>
      </div>
    );
  }
}

export default App;
