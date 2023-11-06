import React from 'react'
import { Link } from "react-router-dom"
import { AiFillHome } from "react-icons/ai";
import { BiSolidDashboard } from "react-icons/bi";

function Sidebar() {
    return (

        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <Link to={"/menu"} className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span className="fs-5 d-none d-sm-inline">Menu</span>
                </Link>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li className="nav-item">
                        <Link to={'/'} className="nav-link align-middle px-0">
                            <i className="fs-4 bi-house" />
                            <AiFillHome />
                            <span class="bi bi-house"></span>
                            <span className="ms-1 d-none d-sm-inline">Home </span>
                        </Link>
                    </li>
                    <li>

                        <Link to='/user' className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-table" /> <span className="ms-1 d-none d-sm-inline">Users</span></Link>
                    </li>
                    <li>
                    <Link to={'/post'} className="nav-link px-0 align-middle">
                        <i className="fs-4 bi-people" /> <span className="ms-1 d-none d-sm-inline">Post</span> </Link>
                </li>

                    <li>
                        <Link to={'/customer'} className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-people" /> <span className="ms-1 d-none d-sm-inline">Customers</span> </Link>
                    </li>
                    <li><Link to="/">login</Link></li><br/>
                    <li> </li>
                </ul>
                
                <hr />
               
            </div>
        </div>


    )
}

export default Sidebar