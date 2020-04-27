import React, { Component } from 'react';
import ReviewFeed from './ReviewFeed';
import './ReviewList.scss';
import AnotherRev from './AnotherRev';
import Nav from '../../Components/Nav/Nav';
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
                console.log(
                    'response.UserData :', response.UserData
                );
                this.setState({userData: response.UserData});
            })
    }
    render() {
        let UserList = this.state.userData.map((el) => {
            return <ReviewFeed 
            userName={el.user.name}
            userSkin={el.user.skinType} 
            feedTime={el.user.feedTime}
            producBrand={el.product.brand}
            producName={el.product.name}
            contentComment={el.content.contentComment}
            likeCount={el.feedInfo.likeCount}
            commentCount={el.feedInfo.commentCount}
            shareCount={el.feedInfo.shareCount}
            viewCount={el.viewCount.view}/>
        });
        console.log(this.state.userData)
        return (
            <div className='reMainContain'>
                <Nav/>
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