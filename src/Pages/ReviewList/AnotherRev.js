import React, { Component } from 'react';
import Filter from './Images/Filter.png';
import Button from './Images/Button.png';
import './AnotherRev.scss';

class AnotherRev extends Component {
    render() {
        return (
            <div className='feedTopMenu'>
                <div className='moreRevLeft'>
                    <div className='powerRev'>파워리뷰</div>
                    <div className='miniRev'>미니리뷰</div>
                    <div className='beautyTip'>뷰티팁</div>
                </div>
                <div className='moreRevRight'>
                    <div className='filter'>
                        <img className='filterImg' src={Filter}/>
                        <div className='filterText'>필터</div>
                    </div>
                    <div className='slideBox'>
                        <div className='slideMenu'>
                            최신순
                        </div>
                        <img className='moreBtn' src={Button}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default AnotherRev;