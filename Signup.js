import React from "react";
import { useNavigate } from "react-router-dom";
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from './Firebase';

const Signup = ({email}) => {
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  React.useEffect(()=>{
    if(!email){
      navigate("/")
    }
  })


  const onSubmit = async () => {

    if (email === "" || password === "") {
      alert("please input valid email and password");
      return; //early return
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // Signed in
      const user = userCredential.user;
      console.log(user);
      navigate("/login");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(`Error ${errorCode}: ${errorMessage}`);
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          height: "85px",
          backgroundColor: "white",
        }}
      >
        <img
          src="logo.png"
          alt="Netflix-Logo"
          height={45}
          style={{
            marginTop: "20px",
            marginLeft: "15px",
          }}
        />
        <button
          style={{
            marginLeft: "auto",
            border: "none",
            fontSize: "19px",
            fontWeight: "10px",
            background: "transparent",
            cursor: "pointer",
          }}
        >
          Sign In
        </button>
      </div>
      <div
        style={{
          height: "1px",
          width: "206vh",
          backgroundColor: "rgb(212, 204, 204)",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
          height: "84.5vh",
        }}
      >
        {/* <img src="newimage.jpg" alt="xxyz" height={200} width={200}
            style={{
              marginLeft: 'calc(100% - 650px)',
              marginTop: '100px'
            }}  
          /> */}
        <h4
          style={{
            margin: '0 auto',
            paddingTop: "5rem",
            fontFamily: "'Courier New', Courier, monospace",
            color: "black",
          }}
        >
          STEP 1 OF 3
        </h4>
        <h2
          style={{
            margin: '0 auto',
            fontSize: "30px",
            color: "black",
          }}
        >
          Finish creating your new account
        </h2>
        <p
          style={{
            margin: '0 auto',
            fontSize: "20px",
            color: "black",
          }}
        >
          Enter your password and you'll be watching in no time.
        </p>
        {/* <p id="pg2">
            Netflix will send text messages to your mobile number about important account messages. message and data rates may apply, and message frequency is variable.
          </p> */}
       <input type="password" style={{width: "300px", margin: '25px auto 0 auto'}} placeholder="Password" required onChange={(e)=>{
              setPassword(e.target.value);
            }}/>
        <button
          style={{
            height: "60px",
            width: "290px",
            margin: '30px auto 0 auto',
            background: "transparent",
            border: "none",
            borderRadius: "5px",
            color: "black",
            fontSize: "20px",
            cursor: "pointer",
          }}
        >
          Forgot your password?
        </button>
        <button
        onClick={onSubmit}
          style={{
            height: "60px",
            width: "290px",
            margin: "10px auto 0 auto",
            backgroundColor: "red",
            border: "none",
            borderRadius: "5px",
            color: "white",
            fontSize: "25px",
            cursor: "pointer",
          }}
        >
          Next
        </button>
      </div>
    </>
  );
};

export { Signup };
