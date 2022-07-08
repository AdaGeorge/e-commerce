import React, { useEffect, useState } from "react";
import Form from "./Form";
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
      <Form />
    }
    </div>
    
  )
};

export default Login;
