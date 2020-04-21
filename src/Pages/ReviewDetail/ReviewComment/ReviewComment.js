import React, { Component } from "react";
import "./ReviewComment.scss";

class ReviewComment extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { comment } = this.props;
        return (
            <div className='ReviewComment'>
                <div className='commentInput'>
                    <div className='commentText'>
                        <span>답글 </span>
                        <span className='countComment'>{comment.length}</span>
                    </div>
                    <form className='inputBox'>
                        <input type='text' placeholder='답글을 남겨보세요' />
                        <div className='inputIcons'>
                            <i className='xi-emoticon-smiley-o' />
                            <i className='xi-camera-o' />
                        </div>
                        <button type='submit'>등록하기</button>
                    </form>
                </div>
                <div className='sort'>
                    인기순 <i className='xi-caret-down-min' />
                </div>
            </div>
        );
    }
}

export default ReviewComment;
