import React from "react";

const Loginpage=()=>{
  return(
    <>
        <div 
      style={{
        display: 'flex',
        height: '85px',
        backgroundColor: "white"
      }}>
          <img src="logo.png" alt="Netflix-Logo" height={45}
            style={{
              marginTop: "20px",
              marginLeft: "15px"
            }}   
          />
          <button style={{
            marginLeft: '800px',
            border: 'none',
            fontSize: '19px',
            fontWeight: '10px',
            background: 'transparent',
            cursor: 'pointer'
          }}  >Sign In</button>
      </div>
      <div style={{
        height: '1px',
        width: '206vh',
        backgroundColor: 'rgb(212, 204, 204)'
      }}></div>
      <div style={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: "white",
          height: "84.5vh"
        }}>
          {/* <img src="newimage.jpg" alt="xxyz" height={200} width={200}
            style={{
              marginLeft: 'calc(100% - 650px)',
              marginTop: '100px'
            }}  
          /> */}
          <h4 style={{
            marginLeft: '500px',
            paddingTop: '5rem',
            fontFamily: "'Courier New', Courier, monospace",
            color: "black"
          }}>STEP 1 OF 3</h4>
          <h2 style={{
            marginLeft: '350px',
            fontSize: '30px',
            color: "black"
          }}>Finish creating your new account</h2>
          <p style={{
            marginLeft: '350px',
            marginRight: '300px',
            fontSize: '20px',
            color: "black"
          }}>Enter your password and you'll be watching in no time.</p>
          {/* <p id="pg2">
            Netflix will send text messages to your mobile number about important account messages. message and data rates may apply, and message frequency is variable.
          </p> */}
          <input type="text" placeholder="Password"
            style={{
              height: '60px',
              width: '290px',
              marginLeft: '400px',
              marginTop: '2rem',
              padding: '5px'
            }}
          />
          <button style={{
            height: '60px',
            width: '290px',
            marginLeft: '400px',
            marginTop: '.2rem',
            background: 'transparent',
            border: 'none',
            borderRadius: '5px',
            color: 'black',
            fontSize: '20px',
            cursor: 'pointer'
          }}>Forgot your password?</button>
          <button style={{
            height: '60px',
            width: '290px',
            marginLeft: '400px',
            marginTop: '10px',
            backgroundColor: 'red',
            border: 'none',
            borderRadius: '5px',
            color: 'white',
            fontSize: '25px',
            cursor: 'pointer'
          }}>Next</button>
      </div>
    </>
  );
}

export { Loginpage };