import React, { Component } from "react";
import "./HeaderItem.scss";

class HeaderItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMouseOver: false,
    };
  }
  isMouseOver = () => {
    this.setState({
      isMouseOver: !this.state.isMouseOver,
    });
  };
  render() {
    const { image, banner, title } = this.props.headerItem;

    return (
      <div
        className="HeaderItem"
        onMouseEnter={this.isMouseOver}
        onMouseLeave={this.isMouseOver}
      >
        <div
          className={`image ${this.state.isMouseOver ? "over" : ""}`}
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
        <div className={`banner ${this.state.isMouseOver ? "over" : ""}`}>
          {banner}
        </div>
        <div className={`title ${this.state.isMouseOver ? "over" : ""}`}>
          {title}
        </div>
      </div>
    );
  }
}

export default HeaderItem;
