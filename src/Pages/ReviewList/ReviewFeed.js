import React, { Component } from 'react';
import Chuu from './Images/Chuu.jpeg';
import Maskara from './Images/Maskara.png';
import Heart from './Images/Heart.png';
import Comment from './Images/Comment.png';
import Share from './Images/Share.png';
import './ReviewFeed.scss';

class ReviewFeed extends Component {
    constructor() {
        super();

        this.state = {
            isMouseOver : false        
        }
    }

    isMouseOver = () => {
        this.setState({
            isMouseOver: !this.state.isMouseOver
        })
    }
    render() {
        return (
            <div className='reFeedBox'>
                <div className='feedContent' 
                onMouseEnter={this.isMouseOver}
                onMouseLeave={this.isMouseOver}
                >
                    <div className='userContain'>
                        <div className='userInfoBox'>
                            <div className='userImgBox'>
                                <img className='userImg' src={Chuu}/>
                            </div>
                            <div className='userInfo'>
                                <div className='userName'>
                                    {this.props.userName}
                                </div>
                                <div className='skinType'>
                                    <span className='userSkin'>
                                        {this.props.userSkin}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='feedTime'>
                            {this.props.feedTime}
                        </div>
                    </div>
                    <div className='contentImgBox'>
                        <div className='contentImg'>
                            <div className={this.state.isMouseOver ? 'contentComment contentCommentShow' : 'contentComment'}>
                                {this.props.contentComment}
                            </div>
                        </div>
                    </div>
                    <div className='productContain'>
                        <div className='producImgBox'>
                            <img className='producImg' src={Maskara}/>
                        </div>
                        <div className='producInfo'>
                            <div className='producBrand'>
                                {this.props.producBrand}
                            </div>
                            <div className='producName'>
                                {this.props.producName}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='feedInfo'>
                    <div className='iconBox'>
                        <div className='likeImgBox'>
                            <img className='likeImg' src={Heart}/>
                            <div className='likeCount'>
                                {this.props.likeCount}
                            </div>
                        </div>
                        <div className='commentImgBox'>
                            <img className='commentImg' src={Comment}/>
                            <div className='commentCount'>
                                {this.props.commentCount}
                            </div>
                        </div>
                        <div className='shareImgBox'>
                            <img className='shareImg' src={Share}/>
                            <div className='shareCount'>
                                {this.props.shareCount}
                            </div>
                        </div>
                    </div>
                    <div className='viewCount'>
                        {this.props.viewCount}
                    </div>
                </div>
            </div>
        )
    }
}

export default ReviewFeed;