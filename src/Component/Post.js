import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import Nav from './Nav'
import { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
function Post() {
    const { id } = useParams()

    const data = { username: "", email: "", mobileNo: "", city: "", address: "" };
    const [inputdata, setInputdata] = useState(data);
    const Handler = (e) => {
        setInputdata({ ...inputdata, [e.target.name]: e.target.value });
    };

    const Handlersubmit = (e) => {
        e.preventDefault();
        if (id) {
            axios
                .patch("http://localhost:5000/formdata/"+id, inputdata)
                .then((res) => {
                    console.log(res);
                    alert("successfully UpAted");

                })
                .catch((error) => {
                    console.log(error);
                    alert(" wrong");
                });
        }
        else {
            axios
                .post("http://localhost:5000/formdata", inputdata)
                .then((res) => {
                    console.log(res);
                    alert("successfully submited");

                })
                .catch((error) => {
                    console.log(error);
                    alert(" wrong");
                });
        }

    };
    useEffect(() => {
        if (id) {
            axios.get("http://localhost:5000/formdata/" + id)
                .then((res) => {
                    console.log(res.data)
                    setInputdata(res.data)
                }).catch((error) => {
                    console.log(error)
                })
        }
    }, [id])
    return (
        <div className="row flex-nowrap">
            <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                <Sidebar />
            </div>
            <div className="col">
                <Nav />
                <section>Post
                    <div>
                        Form<br />
                        <input
                            type="text"
                            placeholder="username"
                            name="username"
                            value={inputdata.username}
                            onChange={Handler}
                        />
                        <br />
                        <br />
                        <input
                            type="email"
                            placeholder=" email"
                            name="email"
                            value={inputdata.email}
                            onChange={Handler}
                        />
                        <br />
                        <br />
                        <input
                            type="number"
                            placeholder=" mobileNo"
                            name="mobileNo"
                            value={inputdata.mobileNo}
                            onChange={Handler}
                        />
                        <br />
                        <br />
                        <input
                            type="text"
                            placeholder="city"
                            name="city"
                            value={inputdata.city}
                            onChange={Handler}
                        />
                        <br />
                        <br />
                        <input
                            type="text"
                            placeholder=" address"
                            name="address" value={inputdata.address}

                            onChange={Handler}
                        />
                        <br />
                        <br />
                        <button onClick={Handlersubmit}>submit</button>

                    </div>

                </section>
            </div>
        </div>
    )
}

export default Post