import React, { Component, createRef } from "react";
import { HomeData, Events } from "../../Config";
import Modal from "../../Components/Modal/Modal";
import SlideEvent from "./SlideEvnet/SlideEvent";
import QNA from "./QNA/QNA";
import HomeReview from "./HomeReview/HomeReview";
import HomePost from "./HomePost/HomePost";
import ItemRank from "../Rank/ItemRank/ItemRank";
import BottomBanner from "./BottomBanner/BottomBanner";
import "./Home.scss";

class Home extends Component {
  constructor(props) {
    super(props);
    this.scroll = createRef();
    this.state = {
      modalOn: false,
      eventLoading: false,
      isLoading: false,
      bottomBanner: [
        {
          img: [
            "https://www.unpa.me/assets/images_v2/ic_home_review_category_normal.png",
            "https://www.unpa.me/assets/images_v2/ic_home_review_category_pressed.png",
          ],
          title: "카테고리별 리뷰",
        },
        {
          img: [
            "https://www.unpa.me/assets/images_v2/ic_home_review_brands_normal.png",
            "https://www.unpa.me/assets/images_v2/ic_home_review_brands_pressed.png",
          ],
          title: "브랜드별 리뷰",
        },
        {
          img: [
            "https://www.unpa.me/assets/images_v2/ic_home_award_normal.png",
            "https://www.unpa.me/assets/images_v2/ic_home_award_pressed.png",
          ],
          title: "뷰티 리뷰 위너스",
        },
        {
          img: [
            "https://www.unpa.me/assets/images_v2/ic_home_mpick_normal.png",
            "https://www.unpa.me/assets/images_v2/ic_home_mpick_pressed.png",
          ],
          title: "형님의 신상픽",
        },
      ],
      events: [],
      data: {
        reviewData: [],
        rankData: [],
        bottomBanner: [],
      },
    };
  }

  componentDidMount = () => {
    fetch(Events)
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          eventLoading: true,
          events: res.Events,
        })
      );
    fetch(HomeData)
      .then((res) => res.json())
      .then((res) => {
        this.setState({ data: res });
      })
      .then(this.setState({ isLoading: true }));
  };

  modalHandler = (isOn) => {
    this.setState({ modalOn: isOn });
  };

  render() {
    const { reviewData, rankData } = this.state.data;
    const { modalOn, isLoading, events, bottomBanner } = this.state;

    return (
      <>
        {modalOn ? (
          <Modal modalHandler={this.modalHandler}>
            {events.map((eventItem) => (
              <img
                key={eventItem}
                className="eventImg"
                src={eventItem}
                alt="eventItem"
              />
            ))}
          </Modal>
        ) : (
          window.scrollTo(0, 0)
        )}
        <div
          className="Home"
          style={{
            overflow: modalOn ? "hidden" : "auto",
            height: modalOn ? "100vh" : "auto",
          }}
        >
          {isLoading && (
            <SlideEvent events={events} modalHandler={this.modalHandler} />
          )}
          <div className="notice">
            <div className="Leftwrap">
              <span>공지</span>언파스토어 상품평 포인트 지급액 변경안내
            </div>
            <div className="Rightwrap">20.04.21</div>
          </div>
          <QNA />
          {isLoading && <HomeReview reviewData={reviewData} />}
          <div className="banner" />
          {isLoading && <HomePost postData={reviewData} />}
          <div className="banner2" />
          <div className="itemRank">
            <div className="title"># 이달의 틴트 랭킹</div>
            {isLoading
              ? rankData.map((rankData, index) => (
                  <ItemRank key={index} rankData={rankData} rankNum={index} />
                ))
              : ""}
          </div>
          <div className="bottomBannerWrap">
            {isLoading
              ? bottomBanner.map((data, index) => (
                  <BottomBanner key={index} bannerData={data} />
                ))
              : ""}
          </div>
        </div>
      </>
    );
  }
}

export default Home;
