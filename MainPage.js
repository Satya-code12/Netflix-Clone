import React, { useState } from "react";
import { Features } from "./Features";
import { FaqSection } from "./Faq";
import {useNavigate } from 'react-router-dom';

const MainPage = ({email, updateEmail}) => {
  const navigate = useNavigate();

  React.useEffect(()=>{
    updateEmail("")
  }, [])

  return (
    <>
      <div className="header">
        <nav>
          <img src="logo.png" className="logo" alt="Logo" />
          <div>
            <button className="language-btn">English <img src="down-icon.png" alt="Dropdown icon" /></button>
            {/* <button type="button" onClick={onSubmit}>Sign In</button> */}
          </div>
        </nav>
        <div className="header-content">
          <h1>Unlimited movies, TV shows and more.</h1>
          <h3>Watch anywhere. Cancel anytime.</h3>
          <p>Ready to watch? Enter your email to create or restart your membership.</p>
          <div className="email-signup">
            <input type="email" className="email-inp" placeholder="Email address" required onChange={(e)=>{
              updateEmail(e.target.value);
            }}/>
            <button onClick={initateSignUp}>Get Started</button>
          </div>
        </div>
      </div>

      <Features></Features>
      <FaqSection></FaqSection>
    </>
  );

  function initateSignUp(){
    if(!email){
      alert("Please enter an email")
      return
    }

    navigate("/signup")
  }
}

export { MainPage };
