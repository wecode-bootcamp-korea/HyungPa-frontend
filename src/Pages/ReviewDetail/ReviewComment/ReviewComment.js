import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { WriteReviewComment, PostDetailCommentWrite } from "../../../Config";
import CommentNoItem from "./CommentNoItem/CommentNoItem";
import CommentList from "./CommentList/CommentList";
import "./ReviewComment.scss";

class ReviewComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentData: "",
    };
  }
  sumbitComment = (e) => {
    e.preventDefault();
    const { commentData } = this.state;
    fetch(`${WriteReviewComment}`, {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        comment: commentData,
        review_id: "1",
        user_id: "1",
        is_original: "True",
      }),
    }).then((res) => {
      this.setState({ commentData: "" });
      res.status === 200
        ? this.props.handleModal(false)
        : this.props.handleModal(true);
    });
  };

  render() {
    const { commentData } = this.state;
    const { postUser, comment } = this.props;
    return (
      <div className="ReviewComment">
        <div className="commentInput">
          <div className="commentText">
            <span>답글 </span>
            <span className="countComment">{comment.length}</span>
          </div>
          <form className="inputBox">
            <input
              type="text"
              placeholder="답글을 남겨보세요 !"
              value={commentData}
              onChange={(e) => {
                this.setState({
                  commentData: e.target.value,
                });
              }}
            />
            <div className="inputIcons">
              <i className="xi-emoticon-smiley-o" />
              <i className="xi-camera-o" />
            </div>
            <button type="submit" onClick={this.sumbitComment}>
              등록하기
            </button>
          </form>
        </div>
        <div className="sortContainer">
          <div className="sort">
            인기순 <i className="xi-caret-down-min" />
          </div>
        </div>
        <div className="commentListBox">
          {comment.length === 0 ? (
            <CommentNoItem postUser={postUser} />
          ) : (
            comment.map((commentItem, index) => (
              <CommentList key={index} comment={commentItem} />
            ))
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(ReviewComment);
