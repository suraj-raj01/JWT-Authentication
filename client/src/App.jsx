import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Pages/Home'
import Login from './Pages/Login'
import Registration from './Pages/Registration'
import Layout from './Pages/Layout'
import Dashboard from './Dashboard/Dashboard'
import UserProfile from './Dashboard/UserDetails'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='registration' element={<Registration/>}/>
        <Route path='dashboard' element={<Dashboard/>}>
          <Route index element={<UserProfile/>}/>
          <Route path='userdetails' element={<UserProfile/>}/>
        </Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App