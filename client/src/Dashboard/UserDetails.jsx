import React, { useEffect, useState } from 'react'

const UserDetails = () => {

  const[username,setUsername] = useState("");
  const[email,setEmail] = useState("");
  const[phone,setPhone] = useState("");

  useEffect(()=>{
    setUsername(localStorage.getItem("username"));
    setEmail(localStorage.getItem("useremail"));
    setPhone(localStorage.getItem("phone"));
  },[])
  return (
    <div className='text-start'>
      <br />
      <div style={{margin:'auto',width:'90%'}}>
      <h3>User Details</h3>
      <hr />
      <h5>Name : {username}</h5>
      <h5>Email : {email}</h5>
      <h5>Phone : {phone}</h5>
      </div>
    </div>
  )
}

export default UserDetails