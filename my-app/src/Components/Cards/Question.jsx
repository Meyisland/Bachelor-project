// import React, { Component } from "react";

// class Question extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "React",
//     };
//   }

//   render() {
//     return (
//       <div>
//         <p>This is Question component</p>

//         <button>
//           <a
//             class="button"
//             href="#part_3"
//             onClick={() => this.hideComponent("showHid Question")}
//           >
//             finish
//           </a>{" "}
//         </button>
//       </div>
//     );
//   }
// }

import React from "react";

class Question extends React.Component {
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
    this.setCardState(this.props.name, "answer");
    event.preventDefault();
  }

  render() {
    const { questionText } = this.props;
    return (
      <div>
        <p>{questionText}</p>

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

export default Question;
