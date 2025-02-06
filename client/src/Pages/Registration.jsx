import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios"
import { useNavigate } from "react-router-dom";
const Registration = () => {
    const navigate = useNavigate();
    const[input,setInput] = useState({});
    const handleInput=(e)=>{
        let name = e.target.name;
        let value = e.target.value
        setInput((values)=>({...values,[name]:value}));
        console.log(input);
    }

    const handleSubmit=async()=>{
        let api='http://localhost:8000/user/registraion';
        try {
            const response = await axios.post(api,input);
            console.log(response.data);
            alert("registration successfull!!")
            navigate("/login")
        } catch (error) {
            alert(error.response.data.msg);
        }
    }

  return (
    <div>
      <div id="form">
        <Form style={{ width: "400px" }}>
          <h3 className="text-center">Registration Form</h3>
          <br />
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              placeholder="Enter your name"
              name="name"
              value={input.name}
              onChange={handleInput}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              placeholder="Enter your phone"
              name="phone"
              value={input.phone}
              onChange={handleInput}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Enter your email"
              name="email"
              value={input.email}
              onChange={handleInput}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Enter your password"
              name="password"
              value={input.password}
              onChange={handleInput}
            />
          </Form.Group>

          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Registration;
