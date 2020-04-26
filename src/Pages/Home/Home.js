import React, { Component, createRef } from "react";
import SlideEvent from "./SlideEvnet/SlideEvent";
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
    };
  }
  render() {
    const { events } = this.state;
    return (
      <div className="Home">
        <SlideEvent events={events} />
      </div>
    );
  }
}

export default Home;
