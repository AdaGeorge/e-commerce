import React, { useEffect, useState } from "react";
import FormLogin from "./Form";
import UserLogged from "./UserLogged";


const Login = () => {
  const [token, setToken] = useState('')

  const getToken = localStorage.getItem('token')
  
  useEffect(() => {
    setToken(getToken)
  }, [getToken])

  return (
    <div>
    {
      token?
      <UserLogged/>
      :
      <FormLogin />
    }
    </div>
    
  )
};

export default Login;
