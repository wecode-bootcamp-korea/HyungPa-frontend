import React from "react";
import { Login } from "../../Config";
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
    // console.log("this.state", this.state);
    fetch(`${Login}`, {
      method: "POST",
      // headers: {
      //   "token": localStorage.setItem("wtw-token")
      // },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.token) {
          localStorage.setItem("token", response.token);
          alert("로그인에 성공하셨습니다.");
          this.props.history.push("/");
        }
      });
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
                  <span className="emaildwelling">이메일 주소</span>
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
                <div className="LoginWriting">
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
                    <span className="orWriting">또는</span>
                  </div>
                  <div className="linediv"></div>
                </div>
                <div className="kakaoaccession">
                  <img
                    className="kakaoaccessionimg"
                    src="https://image.flaticon.com/icons/svg/2111/2111426.svg"
                    alt="kakao"
                  />
                  <div className="kakaoclickbox">
                    <span className="kakaoclick">카카오로 로그인</span>
                  </div>
                </div>
                <div className="Faceaccession">
                  <img
                    className="Faceassionimg"
                    src="https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png"
                    alt="facebook"
                  />
                  <span className="Faceassiontext">페이스북으로 로그인</span>
                </div>
                <div className="needhelpbox">
                  <span className="needhelp">도움이 필요하세요?</span>
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
