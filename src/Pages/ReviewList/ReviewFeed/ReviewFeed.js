import React, { Component } from 'react';
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
        const { userPicture } = this.props;
        const { userName } = this.props;
        const { userSkin } = this.props;
        const { feedTime } = this.props;
        const { producImg } = this.props;
        const { contentComment } = this.props;
        const { producBrand } = this.props;
        const { producName } = this.props;
        const { likeImg } = this.props;
        const { likeCount } = this.props;
        const { commentImg } = this.props;
        const { commentCount } = this.props;
        const { shareImg } = this.props;
        const { shareCount } = this.props;
        const { viewCount } = this.props;

        return (
            <div className='ReviewFeed'>
                <div className='feedContent' 
                onMouseEnter={this.isMouseOver}
                onMouseLeave={this.isMouseOver}
                >
                    <div className='userContain'>
                        <div className='userInfoBox'>
                            <div className='userImgBox'>
                                <img className='userImg' src={userPicture} alt="img"/>
                            </div>
                            <div className='userInfo'>
                                <div className='userName'>
                                    {userName}
                                </div>
                                <div className='skinType'>
                                    <span className='userSkin'>
                                        {userSkin}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='feedTime'>
                            {feedTime}
                        </div>
                    </div>
                    <div className='contentImgBox'>
                        <img className='contentImg' src={producImg}/>
                        <div className={this.state.isMouseOver ? 'contentComment contentCommentShow' : 'contentComment'}>
                            {contentComment}
                        </div>
                    </div>
                    <div className='productContain'>
                        <div className='producImgBox'>
                            <img className='producImg' src={producImg} alt="img"/>
                        </div>
                        <div className='producInfo'>
                            <div className='producBrand'>
                                {producBrand}
                            </div>
                            <div className='producName'>
                                {producName}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='feedInfo'>
                    <div className='iconBox'>
                        <div className='likeImgBox'>
                            <img className='likeImg' src={likeImg} alt="img"/>
                            <div className='likeCount'>
                                {likeCount}
                            </div>
                        </div>
                        <div className='commentImgBox'>
                            <img className='commentImg' src={commentImg} alt="img"/>
                            <div className='commentCount'>
                                {commentCount}
                            </div>
                        </div>
                        <div className='shareImgBox'>
                            <img className='shareImg' src={shareImg} alt="img"/>
                            <div className='shareCount'>
                                {shareCount}
                            </div>
                        </div>
                    </div>
                    <div className='viewCount'>
                        {viewCount}
                    </div>
                </div>
            </div>
        )
    }
}

export default ReviewFeed;