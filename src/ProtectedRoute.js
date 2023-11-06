import React from 'react'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({ children }) {
    const user = localStorage.getItem("user")
    //const user1 = localStorage.getItem("user1" ,"0")

    console.log("first")
    return  user  ? children : <Navigate to={"/login"} />
}
