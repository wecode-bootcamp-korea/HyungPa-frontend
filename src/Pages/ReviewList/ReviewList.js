import React, { Component } from 'react';
import {Link} from "react-router-dom";
import ReviewFeed from './ReviewFeed';
import './ReviewList.scss';
import AnotherRev from './AnotherRev';
import PlusMore from './PlusMore';

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
            userName={el.user.name}
            userSkin={el.user.skinType} 
            feedTime={el.user.feedTime}
            producBrand={el.product.brand}
            producName={el.product.name}
            contentComment={el.content.contentComment}
            likeCount={el.feedInfo.likeCount}
            commentCount={el.feedInfo.commentCount}
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