import React from 'react';
import './Signin.scss'



class Signin extends React.Component {
    
    constructor(){
        super();

        this.state={
            email:"",
            password:""
        }
    }




    handlechange = (event) => {
        this.setState({email:event.target.value});
    }

    handlePasswordChange=(event) =>{
        this.setState({password:event.target.value});
    }


    handleClick=()=>{
        console.log("email===>",this.state.email);
        console.log("password ===>",this.state.password);
    }

    render() {
         return(
            <div className ="Signin">
                <div className="containersignin">
                    <div className="userform">
                        <div className="textcenter">
                            <img className="textimg" alt="textimg" src="https://www.unpa.me/assets/images_v2/img_signup_logo.png"/>
                        </div>
                        <div className="fieldset">
                           <div className="emailadress">
                               <div className="emailadress-span">
                                  <span class="title">이메일 주소</span>
                               </div>
                               <div className="emailinput">
                                   <input onChange={this.handlechange} type="email" class="underline" name="email" placeholder="e-mail"/>
                               </div>
                           </div>
                           <div className="passwordline">
                               <div className="passwordline-span">
                                  <span class="title">비밀번호</span>
                               </div>
                               <div className="passwordinput">
                                    <input onChange={this.handlePasswordChange} type="password" class="underline" name="password" placeholder="password"/>
                               </div>
                               <div className="login">
                               <button onClick={this.handleClick}class="btnunpa" type="submit">로그인</button>
                               </div>
                               <div className="threelogin">
                                   <span className="threetext">비회원 구매조회 / 아이디 찾기 / 비번 찾기</span>                                   
                               </div>
                               <div className="orline">
                                    <div className="linediv">
                                    </div>
                                    <div className="ortextdiv">
                                    <span className="ortext">또는</span>
                                    </div>
                                    <div className="linediv">
                                    </div>                        
                               </div>   
                           </div>
                        </div>
                    </div>                    
                </div>
            </div>

            )
        }
    
    }
    
    
    
    
    
    export default Signin;