import React from "react";
import { MainPage } from "./MainPage";
import { Signup } from "./Signup";
import { Loginpage } from "./LoginPage";
import { BrowserRouter as Router} from 'react-router-dom';
import { Routes, Route} from 'react-router-dom';


const App=()=>{
  const [email, setEmail] = React.useState("");

  return(
    <>
      <Router>
        <div>
          <section>
            <Routes>
              <Route path="/" element={<MainPage email={email} updateEmail={(value)=>{setEmail(value)}}/>}/>
              <Route path="/signup" element={<Signup email={email}/>}/>
              <Route path="/login" element={<Loginpage/>}/> 
            </Routes>
          </section>
        </div>
      </Router>
    </>
  )
}
export default App;