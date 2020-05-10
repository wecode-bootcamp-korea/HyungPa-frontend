import React, { Component } from "react";
import { PostMain } from "../../Config";
import { Link } from "react-router-dom";
import PostFeed from "./PostFeed/PostFeed";
import PlusMore from "../ReviewList/PlusMore/PlusMore";
import PostAllView from "./PostAllView/PostAllView";
import "./Post.scss";

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      times: 0,
      limit: 9,
      isLoading: false,
      Data: [],
    };
  }

  componentDidMount = () => {
    this.getData();
  };

  async getData() {
    const { times, limit } = this.state;
    const getPostData = await fetch(
      `${PostMain}?limit=${limit}&offset=${times * limit + 1}`
    );
    const json = await getPostData.json();
    this.setState({
      Data: [...this.state.Data, ...json.post_main],
      times: this.state.times + 1,
      isLoading: true,
    });
  }

  render() {
    const { isLoading, Data } = this.state;
    let EditorList = Data.map((data) => {
      return isLoading ? (
        <Link key={data.id} to={`/post/detail/${data.id}`}>
          <PostFeed
            key={data.id}
            userPicture={
              "https://d33ur1yh5ph6b5.cloudfront.net/dd9b208b-714d-4d53-8203-17e1a3b88b2d-thumbnail"
            }
            userName={"언파에디터"}
            userSkin={"건성, 21호"}
            feedTime={data.published_at.slice(0, 10)}
            producImg={data.first_image}
            text={data.first_text}
            producName={""}
            likeImg={""}
            title={data.title}
            likeCount={""}
            commentImg={""}
            commentCount={""}
            shareImg={""}
            shareCount={0}
            viewCount={data.view_number}
          />
        </Link>
      ) : (
        ""
      );
    });

    return (
      <div className="Post">
        <div className="postAllViewBox">
          <PostAllView />
        </div>
        <div className="postFeedBox">{EditorList}</div>
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

export default Post;
