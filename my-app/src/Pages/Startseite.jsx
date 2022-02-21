import React, { Component } from "react";

class Startseite extends Component {
  state = {};
  render() {
    return (
      <section id="part_1" tabIndex="1">
        <h2>Unterbewusste Vorurteile</h2>
        <p>Unterbewusste Vorurteile betreffen jeden Designer</p>
        <ul>
          <li>
            <a href="#part_2">Info</a>
          </li>
          <li>
            <a href="#part_3">Annhamen</a>
          </li>
          <li>
            <a href="#part_4">Prinzipien</a>
          </li>
        </ul>
        <p></p>
      </section>
    );
  }
}

export default Startseite;
