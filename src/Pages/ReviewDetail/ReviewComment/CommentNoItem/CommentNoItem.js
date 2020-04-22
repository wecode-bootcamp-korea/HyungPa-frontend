import React, { Component } from "react";
import "./CommentNoItem.scss";

class CommentNoItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { postUser } = this.props;
        return (
            <div className='CommentNoItem'>
                <div>{postUser} 님에게</div>
                <div>첫 댓글을 남겨주세요!</div>
            </div>
        );
    }
}

export default CommentNoItem;
