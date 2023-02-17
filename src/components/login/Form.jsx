import "./styles/form.css";
import { FaUserCircle } from "react-icons/fa";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const defaultData = {
  email: '',
  password:''
}

const Form = () => {
  const [isErrorLogin, setIsErrorLogin] = useState(false);

  const { handleSubmit, register, reset } = useForm();

  const navigate = useNavigate()

  const submit = (data) => {
    console.log(data)
    const URL__LOGIN_POST =
      "https://fakestoreapi.com/auth/login";

    axios
      .post(URL__LOGIN_POST, data)
      .then((res) => {
        console.log(res)
        localStorage.setItem("token", res.data.token);
        navigate('/')
      })
      .catch((err) => {
        console.log(err)
        localStorage.setItem('token', "");
        setIsErrorLogin(true);
        setTimeout(() => {
          setIsErrorLogin(false);
        }, 5000);
        reset(defaultData);
      })

  };

  return (
    <div className="form-screen">
      <div className="login">
        <b>
          lo<span>g</span>
          <span>i</span>n
        </b>
      </div>
      <ul className="login__test">
        <li>
          <span>Username:</span>kate_h
        </li>
        <li>
          <span>Password:</span>kfejk@*_
        </li>
      </ul>

      <form className="form" onSubmit={handleSubmit(submit)}>
        <FaUserCircle className="form-icon" />
        <input type="text" placeholder="username" {...register("username")} />
        <input
          type="password"
          placeholder="password"
          {...register("password")}
        />
        <button className="form-btn">Log in</button>
      </form>
      {isErrorLogin && <h2 className='error'>'Invalid credential, try again..'</h2>}
    </div>
  );
};

export default Form;
