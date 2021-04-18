import React from "react";

class CustomButton extends React.Component {
  constructor() {
    super();
    this.state = { clicked: true };
  }
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    console.log(this.state.clicked);
    let circleimg;
    if (this.state.clicked === true) {
      circleimg = "https://test.png";
    } else if (this.state.clicked === false) {
      circleimg = "https://test.png";
    }

    return (
      <div>
        <button onClick={this.handleClick}>
          {this.props.text} <img src={circleimg}></img>
        </button>
      </div>
    );
  }
}

export default CustomButton;
