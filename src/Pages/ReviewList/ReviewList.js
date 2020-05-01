import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './ReviewList.scss';
import ReviewFeed from './ReviewFeed/ReviewFeed';
import AnotherRev from './AnotherRev/AnotherRev';
import PlusMore from './PlusMore/PlusMore';

class ReviewList extends Component {
  constructor() {
    super();

    this.state = {
      userData: [],
      newData: [],
      isBtnClick: false
    };
  }

  isBtnClick = () => {
    this.setState({
      isBtnClick: this.state.isBtnClick
    })
  }

  componentDidMount = () => {
    this.userData();
    this.newData();
  };

  userData = () => {
    fetch("http://10.58.0.129:8000/reviewdetail/main/1")
      .then((response) => response.json())
      .then((response) => {
        this.setState({ userData: response.UserData });
      });
  };

  newData = () => {
    fetch("")
      .then((res) => res.json())
      .then((res) => {
        this.setState({userData: this.state.newData.concat()})
      })
  }
  render() {
    let UserList = this.state.userData.map((el) => {
      return (
        <Link key={el.id} to={`/Review/Detail/${el.id}`}>
          <ReviewFeed
            key={el.id}
            userPicture={el.user.picture}
            userName={el.user.name}
            userSkin={el.user.skinType}
            feedTime={el.user.feedTime}
            producImg={el.product.image}
            producBrand={el.product.brand}
            producName={el.product.name}
            contentComment={el.content.contentComment}
            likeImg={el.feedInfo.likeImg}
            likeCount={el.feedInfo.likeCount}
            commentImg={el.feedInfo.commentImg}
            commentCount={el.feedInfo.commentCount}
            shareImg={el.feedInfo.shareImg}
            shareCount={el.feedInfo.shareCount}
            viewCount={el.viewCount.view}
          />
        </Link>
      );
    });
    return (
      <div className="ReviewList">
        <div className="anotherRevContain">
          <AnotherRev />
        </div>
        <div className="reFeedContain">{UserList}</div>
        <div className="plusMore">
          <PlusMore onClick={this.newData} />
        </div>
      </div>
    );
  }
}

export default ReviewList;
