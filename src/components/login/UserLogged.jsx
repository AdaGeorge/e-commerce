import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/userLogged.css";

const UserLogged = () => {

  const navigate = useNavigate()

  const goHome = () =>{
    navigate('/')
  }

  const logOut = () => {
    localStorage.removeItem('token')
    navigate('/')
  }

  return (
    <div className="user-logged-screen">
      <div className="user-logged-letter">
        <b>
          Use<span>r</span> <span>lo</span>gged
        </b>
      </div>
      <button
      onClick={logOut}
      className="btn-log-out">Log out</button>
      <button 
      onClick={goHome}
      className="btn-go-home" >Go home</button>
    </div>
  );
};

export default UserLogged;
