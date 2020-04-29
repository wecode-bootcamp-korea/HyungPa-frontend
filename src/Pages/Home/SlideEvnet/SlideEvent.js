import React, { Component, createRef } from "react";
import "./SlideEvent.scss";
let autoSlide;
class SlideEvent extends Component {
  constructor(props) {
    super(props);
    this.scroll = createRef();
    this.state = {
      eventNum: 1,
    };
  }
  eventsPlus = () => {
    const { eventNum } = this.state;
    if (eventNum < 6) {
      this.setState(
        {
          eventNum: eventNum + 1,
        },
        () => {
          this.scroll.current.scrollLeft = 890 * eventNum;
        }
      );
    } else {
      this.setState({
        eventNum: 1,
      });
      this.scroll.current.scrollLeft = 0;
    }
  };
  eventsMinus = () => {
    const { eventNum } = this.state;
    if (eventNum === 1) {
      this.setState(
        {
          eventNum: 6,
        },
        () => {
          this.scroll.current.scrollLeft = 4450;
        }
      );
    } else {
      this.scroll.current.scrollLeft -= 890;
      this.setState({
        eventNum: eventNum - 1,
      });
    }
  };
  componentDidMount() {
    autoSlide = setInterval(this.eventsPlus, 5000);
  }
  componentWillUnmount() {
    clearInterval(autoSlide);
  }
  render() {
    const { eventNum } = this.state;
    const { events, modalHandler } = this.props;
    return (
      <div className="SlideEvent">
        <div className="count" onClick={modalHandler}>
          {eventNum} / 6 <i className="xi-plus-thin" />
        </div>
        <div className="arrow left" onClick={this.eventsMinus}>
          <i className="xi-angle-left" />
        </div>
        <div className="events" ref={this.scroll}>
          {events.map((eventItem, index) => (
            <img
              key={index}
              src={eventItem}
              alt="상남자 형님의 파우치 이벤트"
            />
          ))}
        </div>
        <div className="arrow right" onClick={this.eventsPlus}>
          <i name="plus" className="xi-angle-right" onClick={this.scrollPlus} />
        </div>
      </div>
    );
  }
}

export default SlideEvent;
