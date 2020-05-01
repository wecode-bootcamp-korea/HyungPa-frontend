import React, { Component } from 'react';
import PostFeed from './PostFeed/PostFeed';
import PlusMore from '../ReviewList/PlusMore/PlusMore';
import PostAllView from './PostAllView/PostAllView';
import './Post.scss';

class Post extends Component {
    constructor() {
        super();

        this.state = {
            editorData: []
        };
    }

    componentDidMount = () => {
        this.editorData();
    };

    editorData = () => {
        fetch("http://localhost:3000/editorData/editorData.json")
            .then((response) => response.json())
            .then((response) => {
                this.setState({editorData: response.EditorData})
            })
    }

    render() {
        let EditorList = this.state.editorData.map((ed) => {
            return <PostFeed
            userPicture={ed.user.picture} 
            userName={ed.user.name}
            userSkin={ed.user.skinType}
            feedTime={ed.user.feedTime}
            producImg={ed.product.image}
            producBrand={ed.product.brand}
            producName={ed.product.name}
            likeImg={ed.feedInfo.likeImg}
            likeCount={ed.feedInfo.likeCount}
            commentImg={ed.feedInfo.commentImg}
            commentCount={ed.feedInfo.commentCount}
            shareImg={ed.feedInfo.shareImg}
            shareCount={ed.feedInfo.shareCount}
            viewCount={ed.viewCount.view}
            />
        })
        return (
            <div className='Post'>
                <div className='postAllViewBox'>
                    <PostAllView />
                </div>
                <div className='postFeedBox'>
                    {EditorList}
                </div>
                <div className='plusMore'>
                    <PlusMore />
                </div>
            </div>
        )
    }
}

export default Post;