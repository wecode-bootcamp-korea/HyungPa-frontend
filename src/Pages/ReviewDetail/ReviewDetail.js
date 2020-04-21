import React, { Component } from "react";
import Aheader from "./Aheader/Aheader";
import Abody from "./Abody/Abody";
import ReviewComment from "./ReviewComment/ReviewComment";
import "./ReviewDetail.scss";

class ReviewDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment:[1,2,3,4,5],
        }
    }

    render() {
        const { comment } = this.state;
        return (
            <div className='ReviewDetail'>
                <article>
                    <div className='articleWrap'>
                        <Aheader />
                        <Abody />
                    </div>
                    <ReviewComment comment={comment}/>
                </article>
                <div className='rightProfile'>
                    <div className='profileWrap'>test</div>
                </div>
            </div>
        );
    }
}

export default ReviewDetail;
