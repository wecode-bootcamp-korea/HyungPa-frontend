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

  isBtnClick = () => {
    this.setState({
      isBtnClick: this.state.isBtnClick,
    });
  };

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
      return (
        <Link key={data.id} to={`/Review/Detail/${data.id}`}>
          <ReviewFeed
            key={data.id}
            userPicture={""}
            userName={""}
            userSkin={""}
            feedTime={data.published_at.slice(0, 10)}
            producImg={data.first_image}
            producBrand={data.brand}
            producName={`${data.first_comment.slice(0, 20)}...`}
            contentComment={`${data.first_comment.slice(0, 100)}...`}
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
