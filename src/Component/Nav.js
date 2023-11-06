import React from 'react'
import { Link, useNavigate } from "react-router-dom"
function Nav() {
  const navigate = useNavigate()
  const deletetoken = () => {
    localStorage.removeItem("token")

    navigate("/login")
  }
  return (
    <nav className="navbar navbar-light bg-light" >
      <div className="container-fluid">
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>

        <div className="dropdown pb-4">
          <Link to='/loser' className="d-flex align-items-center text-black text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdDx_NHYinHjkG9sycfxWxIzlgtIFh9ZgtfBpb3KuDUtJx4MvgpNRjaMpY0YNS54E6ENg&usqp=CAU" alt="hugenerd" width={30} height={30} className="rounded-circle " />
            <span className="d-none d-sm-inline mx-1">loser</span>
          </Link>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
            <li><Link className="dropdown-item" to='/newproject'>New project...</Link></li>
            <li><Link className="dropdown-item" to='/setting'>Settings</Link></li>
            <li><Link className="dropdown-item" to='/profile'>Profile</Link></li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>  <button onClick={deletetoken} > logout</button></li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Nav