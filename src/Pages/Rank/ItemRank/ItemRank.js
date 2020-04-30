import React, { Component } from "react";
import StarRatingComponent from "react-star-rating-component";
import "./ItemRank.scss";

class ItemRank extends Component {
  render() {
    const { rankNum } = this.props;
    const { brand, productName, rate } = this.props.rankData;
    return (
      <div className="ItemRank">
        <div className="infoBox">
          <div className="image">
            <div className={`rankNum ${rankNum + 1 <= 3 ? "" : "disable"}`}>
              {rankNum + 1}
            </div>
          </div>
          <div className="info">
            <div className="brand">{brand}</div>
            <div className="productName">{productName}</div>
            <div className="rate">
              <div className="stars">
                <StarRatingComponent
                  name="rate"
                  value={rate[0]}
                  starCount={5}
                  editing={false}
                  starColor={"#ff5527"}
                />
              </div>
              <span>{rate[0]}</span>
              <div className="rateText">참여 {rate[1]}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemRank;
