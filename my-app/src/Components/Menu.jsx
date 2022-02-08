import './Menu.css';
import React, { Component } from "react";

class Menu extends Component {
  constructor(props) {
      super(props)
    this.state = {
      didScroll: false,
      activeSection: 1,
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", () => {
      this.setState({
        didScroll: true,
      });
    });

    setInterval( () => {
      if (this.state.didScroll) {
        this.setState({
          didScroll: false,
        });
        let activeSection;

        const scroll = window.scrollY;

        const screenHeight = window.innerHeight;

        //Same that all the if else statements
        // switch (true) {
        //   case scroll >= 0 && scroll <= screenHeight:
        //     activeSection = 1;
        //     break;
        //   case scroll >= screenHeight && scroll <= screenHeight*2:
        //     activeSection = 2;
        //     break;
        //   case scroll >= screenHeight*2 && scroll <= screenHeight*3:
        //     activeSection = 3;
        //     break;
        //   case scroll >= 2970:
        //     activeSection = 4;
        //     break;
        //   //   default:
        //   //scroll<=590
        // }

        activeSection = Math.floor(scroll/screenHeight) + 1
        

        this.setState({
          activeSection,
        });
      }
    }, 50);
  }
  render() {
    let activeSection = this.state.activeSection;

    return (
      <nav>
        <ul id="navigation">
          <li className={activeSection == 1 ? "active" : ""}>
            <a href="#part_1">Startseite</a>
          </li>
          <li className={activeSection == 2 ? "active" : ""}>
            <a href="#part_2">Info</a>
          </li>
          <li className={activeSection == 3 ? "active" : ""}>
            <a href="#part_3">Annahmen</a>
          </li>
          <li className={activeSection == 4 ? "active" : ""}>
            <a href="#part_4">Prinzipien</a>
          </li>
          <li className={activeSection == 5 ? "active" : ""}>
            <a href="#part_5">Methodiken</a>
          </li>
          <li className={activeSection == 6 ? "active" : ""}>
            <a href="#part_6">Ende</a>
          </li>
        </ul>
      </nav>
    );
  }
}
export default Menu;