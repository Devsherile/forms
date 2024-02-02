import React from "react";
import "./Signin.css";

import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoPersonCircleOutline } from "react-icons/io5";

const Signin = () => {
  const [action, setAction] = React.useState("Login");
  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
      {action==="Login"?<div></div>:<div className="input">
      <IoPersonCircleOutline className="person"/>
      <input type="text" placeholder="Name" />
    </div>}
        
        <div className="input">
          <MdOutlineMail className="mail"/>
          <input type="email" placeholder="Email"/>
        </div>
        <div className="input">
          <RiLockPasswordLine className="password" />
          <input type="password" placeholder="Password"/>
        </div>
      </div>
      {action==="Sign Up"?<div></div>: <div className="forgot">
      Forgot Password? <span>Click Here!</span>
    </div>}
     
      <div className="submit-container">
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
      </div>
    </div>
  );
};

export default Signin;
