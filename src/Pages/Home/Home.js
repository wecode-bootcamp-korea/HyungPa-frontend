import React, { Component, createRef } from "react";
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
      events: [
        "https://d33ur1yh5ph6b5.cloudfront.net/abe33a8a-d9dc-4a53-ad1e-715500b9fe4e-mid",
        "https://d33ur1yh5ph6b5.cloudfront.net/61e91d4d-7fc6-4481-8fd4-456aa3696967-mid",
        "https://d33ur1yh5ph6b5.cloudfront.net/54a55749-2a26-4537-9d9d-78f376cafa59-mid",
        "https://d33ur1yh5ph6b5.cloudfront.net/640f1bc3-3779-4e61-a3fa-67d1fea51667-mid",
        "https://d33ur1yh5ph6b5.cloudfront.net/fcf12371-438b-435b-aa36-f888c85ed420-mid",
        "https://d33ur1yh5ph6b5.cloudfront.net/684d8d8b-ed1e-4d1f-b67a-8a2aae4c4072-mid",
      ],
      reviewData: [
        {
          id: 1,
          img:
            "https://d33ur1yh5ph6b5.cloudfront.net/cbc3d8ba-ad30-4e83-832b-fc6d39eacd8b-small",
          title: "매일 매일 손이가요~ 새우깡",
          brand: "더 퓨티풀 팩터",
        },
        {
          id: 2,
          img:
            "https://d33ur1yh5ph6b5.cloudfront.net/cbc3d8ba-ad30-4e83-832b-fc6d39eacd8b-small",
          title: "매일 매일 손이가요~ 새우깡",
          brand: "더 퓨티풀 팩터",
        },
        {
          id: 3,
          img:
            "https://d33ur1yh5ph6b5.cloudfront.net/cbc3d8ba-ad30-4e83-832b-fc6d39eacd8b-small",
          title: "매일 매일 손이가요~ 새우깡",
          brand: "더 퓨티풀 팩터",
        },
        {
          id: 4,
          img:
            "https://d33ur1yh5ph6b5.cloudfront.net/cbc3d8ba-ad30-4e83-832b-fc6d39eacd8b-small",
          title: "매일 매일 손이가요~ 새우깡",
          brand: "더 퓨티풀 팩터",
        },
        {
          id: 5,
          img:
            "https://d33ur1yh5ph6b5.cloudfront.net/cbc3d8ba-ad30-4e83-832b-fc6d39eacd8b-small",
          title: "매일 매일 손이가요~ 새우깡",
          brand: "더 퓨티풀 팩터",
        },
        {
          id: 6,
          img:
            "https://d33ur1yh5ph6b5.cloudfront.net/cbc3d8ba-ad30-4e83-832b-fc6d39eacd8b-small",
          title: "매일 매일 손이가요~ 새우깡",
          brand: "더 퓨티풀 팩터",
        },
      ],
      rankData: [
        {
          brand: "이니스프리",
          productName: "노세범 미네랄 파우더",
          rate: [4.0, 20],
        },
        {
          brand: "이니스프리",
          productName: "노세범 미네랄 파우더",
          rate: [4.0, 20],
        },
        {
          brand: "이니스프리",
          productName: "노세범 미네랄 파우더",
          rate: [4.0, 20],
        },
        {
          brand: "이니스프리",
          productName: "노세범 미네랄 파우더",
          rate: [4.0, 20],
        },
      ],
      bottomBanner: [{ img: ["https://www.unpa.me/assets/images_v2/ic_home_review_category_normal.png", "https://www.unpa.me/assets/images_v2/ic_home_review_category_pressed.png"], title: "카테고리별 리뷰" },
      { img: ["https://www.unpa.me/assets/images_v2/ic_home_review_brands_normal.png", "https://www.unpa.me/assets/images_v2/ic_home_review_brands_pressed.png"], title: "브랜드별 리뷰" },
      { img: ["https://www.unpa.me/assets/images_v2/ic_home_award_normal.png", "https://www.unpa.me/assets/images_v2/ic_home_award_pressed.png"], title: "뷰티 리뷰 위너스" },
      { img: ["https://www.unpa.me/assets/images_v2/ic_home_mpick_normal.png", "https://www.unpa.me/assets/images_v2/ic_home_mpick_pressed.png"], title: "형님의 신상픽" }
    ],
      isFocus: false,
    };
  }
  focus = () => {
    this.setState({ isFocus: true });
  };
  focusOut = () => {
    this.setState({ isFocus: false });
  };
  render() {
    const { events, reviewData, rankData, bottomBanner } = this.state;
    return (
      <div className="Home">
        <SlideEvent events={events} />
        <div className="notice">
          <div className="Leftwrap">
            <span>공지</span>언파스토어 상품평 포인트 지급액 변경안내
          </div>
          <div className="Rightwrap">20.04.21</div>
        </div>
        <QNA />
        <HomeReview reviewData={reviewData} />
        <div
          className="banner"
          style={{
            backgroundImage: `url("https://www.unpa.me/assets/images_v2/banner_check.png")`,
          }}
        />
        <HomePost postData={reviewData} />
        <div
          className="banner2"
          style={{
            backgroundImage: `url("https://d33ur1yh5ph6b5.cloudfront.net/7838873b-dfeb-4cc1-b6a1-95fea96b1f21-mid")`,
          }}
        />
        <div className="itemRank">
          <div className="title"># 이달의 틴트 랭킹</div>
          {rankData.map((rankData, index) => (
            <ItemRank key={index} rankData={rankData} rankNum={index} />
          ))}
        </div>
        <div className="bottomBannerWrap">
        {bottomBanner.map((data,index)=><BottomBanner key={index} bannerData={data}/>)}
        </div>
      </div>
    );
  }
}

export default Home;
