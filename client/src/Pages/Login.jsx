import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const[email,setEmail]  = useState("");
  const[password,setPassword]  = useState("");

  const handleSubmit=async()=>{
    let api='https://jwt-authentication-22bp.onrender.com/user/login';
    try {
        const response = await axios.post(api,{email:email,password:password});
        alert("Login Successfully!!");
        localStorage.setItem("token",response.data.token);
        navigate("/home")
    } catch (error) {
        alert(error.response.data.msg);
    }
}

  return (
    <div>
      <div id="form">
      <Form style={{width:'400px'}}>
        <h3 className="text-center">Login Form</h3>
        <br />
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter your email" 
          name="email" onChange={(e)=>{setEmail(e.target.value)}}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Enter your password" 
          name="password" onChange={(e)=>{setPassword(e.target.value)}}
          />
        </Form.Group>
        <h6 className="text-end" style={{textDecoration:'underline',color:'#0d6efd',cursor:'pointer'}}>forgott password</h6>
        <br />
        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
        <br />
        <br />
      </Form>
      </div>
    </div>
  );
};

export default Login;
