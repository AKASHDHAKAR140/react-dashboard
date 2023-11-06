import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import {useNavigate, Route, Routes} from "react-router-dom"
import Nav from './Nav'


export default function Home() {
  const navigate = useNavigate()
  useEffect(()=>{
    if(!localStorage.getItem("token")){
      navigate("/login")
    }
  },[])

  
  return (
    <div className="row flex-nowrap">
      <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
        <Sidebar />
      </div>
      <div className="col">
        <Nav />
        <section>Home
       
        </section>
      </div>
    </div>

  )
}
