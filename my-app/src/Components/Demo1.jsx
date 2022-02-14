// import React, { Component } from "react";

// class Demo1 extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "React",
//     };
//   }

//   render() {
//     return (
//       <div>
//         <p>This is Demo1 component</p>

//         <button>
//           <a
//             class="button"
//             href="#part_3"
//             onClick={() => this.hideComponent("showHideDemo1")}
//           >
//             finish
//           </a>{" "}
//         </button>
//       </div>
//     );
//   }
// }

import React from "react";

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Das Ergebnis wurde abgeschickt: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <p>Setze diese Zahlenreienfolge fort: 2,4,6...</p>

        <form onSubmit={this.handleSubmit}>
          <label>
            Result
            <input
              type="number"
              pattern="{0,61,99}"
              required
              min="1"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Absenden" />
        </form>
      </div>
    );
  }
}

export default NameForm;
