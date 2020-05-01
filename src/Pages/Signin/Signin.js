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
    // console.log("this.state", this.state);
    fetch("http://10.58.0.129:8000/user/sign-in", {
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
          this.props.history.push("/main");
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
                  <span className="emailadresstext">이메일 주소</span>
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
                  <button
                    onClick={this.handleLogin}
                    type="submit"
                    className="Logintext"
                  >
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
                    <span className="ortext">또는</span>
                  </div>
                  <div className="linediv2"></div>
                </div>
                <div className="kakaolog">
                  <div className="kakaologintext">
                    <img
                      className="kakaoimg"
                      src="https://image.flaticon.com/icons/svg/2111/2111426.svg"
                      alt="hello"
                    />
                  </div>
                  <button className="kakaotextbox">카카오로 로그인</button>
                </div>
                <div className="Facebooklog">
                  <div>
                    <img
                      className="Faceimg"
                      src="https://image.flaticon.com/icons/svg/733/733547.svg"
                      alt="hi"
                    />
                  </div>
                  <div>
                    <button className="Facetext">페이스북으로 로그인</button>
                  </div>
                </div>
                <div className="Helpbox">
                  <span className="Helptext">도움이 필요하세요?</span>
                </div>
              </div>
            </div>
          </div>
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
    );
  }
}

export default Signin;
