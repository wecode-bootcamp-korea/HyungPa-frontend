import React from "react";
import "./Signin.scss";

class Signin extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  handleID = (event) => {
    // console.log(event.target.value)
    this.setState({
      email: event.target.value,
    });
  };

  handlePW = (event) => {
    console.log("pwvalue : ", event.target.value);
    this.setState({
      password: event.target.value,
    });
  };

  handleLogin = () => {
    // console.log("button clicked")
    console.log("this.state : ", this.state);
  };

  render() {
    return (
      <div className="Signin">
        <div className="containersignin">
          <div className="userform">
            <div className="textcenter">
              <img
                className="textimg"
                alt="textimg"
                src="https://www.unpa.me/assets/images_v2/img_signup_logo.png"
              />
            </div>
            <div className="fieldset">
              <div className="emailadress">
                <div className="span-container">
                  <span>이메일 주소</span>
                </div>
                <div className="emailinput">
                  <input
                    onChange={this.handleID}
                    type="email"
                    class="underline"
                    name="email"
                    placeholder="e-mail"
                  />
                </div>
              </div>
              <div className="passwordline">
                <div className="passwordline-span">
                  <span class="title">비밀번호</span>
                </div>
                <div className="passwordinput">
                  <input
                    onChange={this.handlePW}
                    type="password"
                    class="underline"
                    name="password"
                    placeholder="password"
                  />
                </div>
                <div className="login">
                  <button onClick={this.handleLogin} type="submit">
                    {" "}
                    로그인
                  </button>
                </div>
                <div className="threelogin">
                  <span className="threetext">
                    비회원 구매조회 / 아이디 찾기 / 비번 찾기
                  </span>
                </div>
                <div className="orline">
                  <div className="linediv"></div>
                  <div className="ortextdiv">
                    <span>또는</span>
                  </div>
                  <div className="linediv"></div>
                  <div className="kakaolog"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signin;
