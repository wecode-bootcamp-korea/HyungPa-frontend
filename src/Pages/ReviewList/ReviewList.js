import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ReviewMain } from "../../Config";
import "./ReviewList.scss";
import ReviewFeed from "./ReviewFeed/ReviewFeed";
import AnotherRev from "./AnotherRev/AnotherRev";
import PlusMore from "./PlusMore/PlusMore";

class ReviewList extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: false,
      times: 0,
      limit: 9,
      Data: [],
    };
  }

  componentDidMount = () => {
    this.getData();
  };

  async getData() {
    const { times, limit } = this.state;
    const res = await fetch(
      `${ReviewMain}?limit=${limit}&offset=${times * limit + 1}`
    );
    const json = await res.json();
    this.setState({
      Data: [...this.state.Data, ...json.review_main],
      times: times + 1,
      isLoading: true,
    });
  }

  render() {
    let reviewList = this.state.Data.map((data) => {
      const arg = /[a-z0-9]|[ \[\]{}()<>?|`~!@#$%^&*-_+=,.;:\"'\\]/g;
      return (
        <Link key={data.id} to={`/Review/Detail/${data.id}`}>
          <ReviewFeed
            key={data.id}
            userPicture={""}
            userName={""}
            userSkin={""}
            feedTime={data.postdate.slice(0, 10)}
            producImg={data.product_img}
            producBrand={data.brand}
            producName={data.product}
            contentComment={`${data.description
              .replace(arg, "")
              .slice(0, 50)}...`}
            viewCount={data.view_number}
          />
        </Link>
      );
    });
    return (
      <div className="ReviewList">
        <div className="anotherRevContain">
          <AnotherRev />
        </div>
        <div className="reFeedContain">
          {this.state.isLoading ? reviewList : ""}
        </div>
        <div className="plusMore">
          <PlusMore
            more={() => {
              this.getData();
            }}
          />
        </div>
      </div>
    );
  }
}

export default ReviewList;
