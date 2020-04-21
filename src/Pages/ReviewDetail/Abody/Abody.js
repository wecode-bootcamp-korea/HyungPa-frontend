import React, { Component } from "react";
import "./Abody.scss";

class Abody extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='Abody'>
                <div className="container">
                    여기에 메인 정보가 들어갑니다.
                </div>
                <div className="aInfo">
                    <div className="requestLike">
                        <div className="likeText">질문에 공감한다면 ♡를 눌러주세요!</div>
                        <div className="giveLove"><i className="xi-heart" />6</div>
                    </div>
                    <div className="info">

                    </div>
                </div>
            </div>
        );
    }
}

export default Abody;