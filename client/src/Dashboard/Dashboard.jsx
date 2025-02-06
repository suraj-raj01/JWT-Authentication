import React from 'react'
import Nav from "react-bootstrap/Nav"
import { Link, Outlet } from 'react-router-dom'
const Dashboard = () => {
  return (
    <div>
        <div id="hero">
            <div id="nav">
                <Nav.Link as={Link} to="userdetails">Your Profile</Nav.Link>
                <Nav.Link as={Link} to="">User Details</Nav.Link>
            </div>
            <div id="data">
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default Dashboard