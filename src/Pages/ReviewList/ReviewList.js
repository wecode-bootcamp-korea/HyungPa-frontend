import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './ReviewList.scss';
import ReviewFeed from './ReviewFeed/ReviewFeed';
import AnotherRev from './AnotherRev/AnotherRev';
import PlusMore from './PlusMore/PlusMore';


class ReviewList extends Component {
    constructor() {
        super();

        this.state = {
            userData: []
        };
    }

    componentDidMount = () => {
        this.userData();
    };

    userData = () => {
        fetch('http://localhost:3000/userData/userData.json')
            .then((response) => response.json())
            .then((response) => {
                this.setState({userData: response.UserData});
            })
    }
    render() {
        let UserList = this.state.userData.map((el) => {
            return <Link key={el.id} to={`/Review/Detail/${el.id}`}><ReviewFeed 
            key={el.id}
            userPicture={el.user.picture}
            userName={el.user.name}
            userSkin={el.user.skinType} 
            feedTime={el.user.feedTime}
            producImg={el.product.image}
            producBrand={el.product.brand}
            producName={el.product.name}
            contentComment={el.content.contentComment}
            likeImg={el.feedInfo.likeImg}
            likeCount={el.feedInfo.likeCount}
            commentImg={el.feedInfo.commentImg}
            commentCount={el.feedInfo.commentCount}
            shareImg={el.feedInfo.shareImg}
            shareCount={el.feedInfo.shareCount}
            viewCount={el.viewCount.view}/></Link>
        });
        return (
            <div className='ReviewList'>
                <div className='anotherRevContain'>
                    <AnotherRev />
                </div>
                <div className='reFeedContain'>
                   {UserList}
                </div>
                <div className='plusMore'>
                    <PlusMore />
                </div>
            </div>
        );
    }
}

export default ReviewList;