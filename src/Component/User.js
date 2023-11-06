import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Nav from './Nav'
import axios from "axios"
import "../App.css"
import Post from './Post'
import { useNavigate } from 'react-router-dom'
function User() {
const [data ,setData ] = useState()
const navigate = useNavigate()
const Api =async ()=>{
 axios.get("http://localhost:5000/formdata")
 .then((res)=>{
    console.log(res.data)
    setData(res.data)
 }).catch((error)=>{
    console.log(error)
 })
} 
const handleEdit = (_id)=>{
    axios.patch("http://localhost:5000/formdata/"+_id)
 .then((res)=>{
    console.log(res.data)
    setData(res.data)
 }).catch((error)=>{
    console.log(error)
 })
}
console.log("data",data)
useEffect(()=>{
    Api();
},[])

const handleDelete = (_id)=>{
    axios.delete("http://localhost:5000/formdata/"+_id)
    .then((res)=>{
       console.log(res.data)
     //  setData(res.data)
     Api();
    }).catch((error)=>{
       console.log(error)
    }) 
}

  return (
    <div className="row flex-nowrap">
      <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
        <Sidebar />
      </div>
      <div className="col">
        <Nav />
        <section>User
        <div className="table-container">

       
           {/*  */ }<table>
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Mobile No</th>
                  <th>City</th>
                  <th>Address</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                 {data && data.map((item, index) => (
                  <tr key={item._id}>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td>{item.mobileNo}</td>
                    <td>{item.city}</td>
                    <td>{item.address}</td>
                    <td>
                      <button onClick={()=>navigate("/post/"+item._id)}>Edit</button>
                      <button onClick={()=>handleDelete(item._id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>    
          
        </section>
      </div>
    </div>
  )
}

export default User