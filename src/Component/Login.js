import React from 'react'
import "../App.css"
import { useNavigate } from "react-router-dom"
import { useState } from 'react'
import axios from 'axios'
function Login() {
  const navigate = useNavigate()
  const data = { email: "", password: "" };
  const [inputdata, setInputdata] = useState(data);
  const Handler = (e) => {
    setInputdata({ ...inputdata, [e.target.name]: e.target.value });
  };

  const Handlersubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3040/signin", inputdata)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", JSON.stringify(res.data.token))

        alert("succesfull  login");
        navigate('/')
      })
      .catch((error) => {
        console.log(error);
        alert(" wrong");
      });

  };

  return (
    <div>
      Login <br />
      <input
        type="email"
        placeholder="   email"
        name="email"
        onChange={Handler}
      />
      <br />
      <br />
      <input
        type="password"
        placeholder=" password"
        name="password"
        onChange={Handler}
      />
      <br />
      <br />
      <button onClick={Handlersubmit}>submit</button>

    </div>
  );
}

export default Login