import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();

  const userAuth=async()=>{
    const token = localStorage.getItem("token");
    if(token){
    let api= 'https://jwt-authentication-22bp.onrender.com/user/userauth';
    try {
      const response = await axios.post(api,null,{headers:{"auth-token":token}})
      localStorage.setItem("username",response.data.name);
      localStorage.setItem("useremail",response.data.email);
      localStorage.setItem("phone",response.data.phone);
      navigate("/dashboard")
    } catch (error) {
      alert(error.response.data.msg);
    }
  }
  }

  useEffect(()=>{
    userAuth();
  },[])

  return (
    <div id='home'>
      <h1 style={{marginRight:'200px'}}>Authentication App</h1>
    </div>
  )
}

export default Home