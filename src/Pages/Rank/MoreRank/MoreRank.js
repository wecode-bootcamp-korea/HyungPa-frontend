import React, { Component } from "react";
import ItemRank from "../ItemRank/ItemRank";
import "./MoreRank.scss";

class MoreRank extends Component {
  constructor(props) {
    super(props);
    this.state = {
      picked: 1,
      pickedTitle: 1,
      category: [
        ["전체", 1],
        ["베이스 메이크업", 2],
        ["색조 메이크업", 3],
        ["기초케어", 4],
        ["선케어", 5],
        ["마스크팩", 6],
        ["클랜징", 7],
        ["바디", 8],
        ["헤어", 9],
        ["향수", 10],
        ["기타", 11],
      ],
      moreRankDate: [
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
    };
  }
  picked = (index) => {
    this.setState({
      picked: this.state.category[index][1],
      pickedTitle: index,
    });
  };
  componentDidUpdate() {
    //this.state.category[index][1] 이거를 api주소에 붙여서 fetch,
    //값을 setState로 state에 바꿔주기.
  }
  render() {
    const { picked, pickedTitle, moreRankDate, category } = this.state;
    return (
      <div className="MoreRank">
        <div className="MoreRankWrap">
          <div className="category">
            {category.map((item, index) => (
              <span
                key={item[1]}
                className={item[1] === picked ? "picked" : ""}
                onClick={() => {
                  this.picked(index);
                }}
              >
                {item[0]}
              </span>
            ))}
          </div>
          <div className="categoryTitle">
            <div className="title">{`# ${
              pickedTitle === 0
                ? "이번주 인기 제품 랭킹"
                : category[pickedTitle][0]
            }`}</div>
            <div className="sortRank">
              랭킹순 <i className="xi-angle-down-min" />
            </div>
          </div>
          {moreRankDate.map((rankData, index) => (
            <ItemRank key={index} rankData={rankData} rankNum={index} />
          ))}
        </div>
      </div>
    );
  }
}

export default MoreRank;
