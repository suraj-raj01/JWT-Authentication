import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <Header/>
        <div id="outlet">
            <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default Layout