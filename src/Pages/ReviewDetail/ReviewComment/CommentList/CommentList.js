import React, { Component } from "react";
import "./CommentList.scss";

class CommentList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { comment } = this.props;
        return (
            <div className='CommentList'>
                <div className="commentItem">
                    <div className="profileImg" />
                    <div className="commentInfo">
                        <div className="heart" >
                            10
                            <i className="xi-heart"/>
                        </div>
                        <div className="userNDate">{comment.name}<span>2020.04.18</span></div>
                        <div className="commentText">{comment.text}</div>
                        <div className="commentBtn">
                            <span>답글달기</span>
                            <i className="xi-ellipsis-h"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CommentList;
