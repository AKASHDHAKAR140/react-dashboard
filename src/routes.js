import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Component/Login'
import Home from './Component/Home'
import User from './Component/User'
import Post from './Component/Post'
//import ProtectedRoute from './ProtectedRoute'
//import Nav from './Component/Nav'
//import Sidebar from './Component/Sidebar'

export default function RoutesPath() {
    
    return (
        <Routes>
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/' element={ <Home />} />
            <Route exact path='/user' element={ <User />} />
            <Route exact path='/post' element={ <Post />} />
            <Route exact path='/post/:id' element={ <Post />} />
        </Routes>
    )
}
