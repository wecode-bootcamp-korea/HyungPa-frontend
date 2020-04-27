import React from "react";

class CustomButton extends React.Component {
  constructor() {
    super();
    this.state = {
      clicked: <img src="https://img.icons8.com/material-rounded/24/000000/circled.png"/>
    };
  }
  handleClick = () => {
    this.setState({ clicked: <img src="https://img.icons8.com/material-sharp/24/000000/checked.png"/>
    });
  };

  render() {
    return (
      <div>
      <button onClick={this.handleClick}>
        {this.props.text}{this.state.clicked}
      </button>
      </div>
    );
  }
}

export default CustomButton;