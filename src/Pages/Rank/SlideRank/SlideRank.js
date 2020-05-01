import React, { Component } from "react";
import { Link } from "react-router-dom";
import SlideItem from "./SlideItem/SlideItem";
import "./SlideRank.scss";

class SlideRank extends Component {
  constructor(props) {
    super(props);
    this.scroll = React.createRef();
  }
  scrollMinus = () => {
    this.scroll.current.scrollLeft -= 259;
  };

  scrollPlus = () => {
    this.scroll.current.scrollLeft += 259;
  };
  render() {
    const { slideItem } = this.props;
    return (
      <div className="SlideRank">
        <div className="arrow" onClick={this.scrollMinus}>
          <i className="xi-angle-left" />
        </div>
        <div className="items" ref={this.scroll}>
          {slideItem.map((item) => (
            <Link key={item.id} to={`/Product/Detail/${item.id}`}>
              <SlideItem
                key={item.id}
                brand={item.brand}
                productImage={item.productImage}
                productName={item.productName}
              />
            </Link>
          ))}
        </div>
        <div className="arrow">
          <i className="xi-angle-right" onClick={this.scrollPlus} />
        </div>
      </div>
    );
  }
}

export default SlideRank;
