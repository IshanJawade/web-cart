import React, { useState } from 'react';
import Navbar from "../components/Navbar"
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
    const [creds, setCreds] = useState({email:"", password:""});
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/login", {
            method:'POST',
            headers:{
                'Content-type': 'application/json'
            },
            body:JSON.stringify({email:creds.email, password:creds.password})
        });
        const json = await response.json();
        console.log(json);

        if(!json.success){
            alert("Enter Valid Credentials")
        }

        if(json.success){
            localStorage.setItem("authToken", json.authToken);
            navigate("/");
        }

    }

    const onChange = (event) =>{
        setCreds({...creds, [event.target.name]:event.target.value})
    }

    return (
        <>
            <div> <Navbar /> </div>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="form-group m-3">
                        <label htmlFor="exampleInputEmail1">Email</label>
                        <input type="email" name="email" value={creds.email} className="form-control" aria-describedby="emailHelp" onChange={onChange} />
                    </div>
                    <div className="form-group m-3">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" name="password" value={creds.password} className="form-control" onChange={onChange} />
                    </div>
                    <div className="form-group form-check m-3">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                    </div>
                    <button type="submit" className="btn btn-primary m-3">Submit</button>
                    <Link to="/signup" className="m-3"> New User</Link>
                </form>
            </div>
        </>
    )
}

