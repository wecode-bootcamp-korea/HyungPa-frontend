import React, { Component } from "react";
import { RankMoreData } from "../../../Config";
import ItemRank from "../ItemRank/ItemRank";
import "./MoreRank.scss";
import { Link } from "react-router-dom";

class MoreRank extends Component {
  constructor(props) {
    super(props);
    this.state = {
      picked: 0,
      limit: 30,
      times: 0,
      category: [
        ["전체"],
        ["베이스 메이크업", 1],
        ["색조 메이크업", 2],
        ["기초케어", 3],
        ["선케어", 4],
        ["마스크팩", 5],
        ["클랜징", 6],
        ["바디", 7],
        ["헤어", 8],
        ["향수", 9],
        ["기타", 10],
      ],
      moreRankDate: [],
    };
  }
  picked = (index) => {
    this.setState(
      {
        picked: index,
        pickedTitle: index,
        times: 0,
        moreRankDate: [],
      },
      () => {
        this.getRankData();
      }
    );
  };

  getRankData = () => {
    const { picked, category, limit, times, moreRankDate } = this.state;
    if (picked === 0) {
      fetch(`${RankMoreData}all?limit=${limit}&offset=${limit * times + 1}`)
        .then((res) => res.json())
        .then((res) =>
          this.setState({ moreRankDate: [...moreRankDate, ...res.products] })
        );
    } else {
      fetch(
        `${RankMoreData}?category=${
          category[picked][1]
        }&limit=${limit}&offset=${limit * times + 1}`
      )
        .then((res) => res.json())
        .then((res) =>
          this.setState({ moreRankDate: [...moreRankDate, ...res.products] })
        );
    }
  };

  scrollUpdate = () => {
    const { times } = this.state;
    if (window.scrollY > 2150 * (times + 1)) {
      this.setState({ times: times + 1 }, () => {
        this.getRankData();
      });
    }
  };

  componentDidMount() {
    this.getRankData();
    window.addEventListener("scroll", this.scrollUpdate);
  }
  render() {
    const { picked, moreRankDate, category } = this.state;
    return (
      <div className="MoreRank">
        <div className="MoreRankWrap">
          <div className="category">
            {category.map((item, index) => (
              <span
                key={item[0]}
                className={index === picked ? "picked" : ""}
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
              picked === 0 ? "이번주 인기 제품 랭킹" : category[picked][0]
            }`}</div>
            <div className="sortRank">
              랭킹순 <i className="xi-angle-down-min" />
            </div>
          </div>
          {moreRankDate.map((rankData, index) => (
            <Link key={rankData.id} to={`/Product/Detail/${rankData.id}`}>
              <ItemRank key={rankData.id} rankData={rankData} rankNum={index} />
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default MoreRank;
