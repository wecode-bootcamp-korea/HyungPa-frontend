import React, { Component } from "react";
import Aheader from "./Aheader/Aheader";
import Abody from "./Abody/Abody";
import "./ReviewDetail.scss";

class ReviewDetail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='ReviewDetail'>
                <article>
                    <div className='articleWrap'>
                        <Aheader />
                        <Abody />
                    </div>
                </article>
                <div className='rightProfile'>
                    <div className='profileWrap'>test</div>
                </div>
            </div>
        );
    }
}

export default ReviewDetail;
