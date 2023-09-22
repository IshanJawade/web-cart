import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function Signup() {

    const [creds, setCreds] = useState({name:"", email:"", password:"", location:""});

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/signup", {
            method:'POST',
            headers:{
                'Content-type': 'application/json'
            },
            body:JSON.stringify({name:creds.name, email:creds.email, password:creds.password, location:creds.address})
        });
        const json = await response.json();
        console.log(json);

        if(!json.success){
            alert("Enter Valid Credentials")
        }

    }

    const onChange = (event) =>{
        setCreds({...creds, [event.target.name]:event.target.value})
    }

    return (
        <>  
            <div><Navbar/></div>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="form-group m-3">
                        <label htmlFor="exampleInputEmail1">Name</label>
                        <input type="text" name="name" value={creds.name} className="form-control" onChange={onChange}  />
                    </div>
                    <div className="form-group m-3">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" name="email" value={creds.email} className="form-control"  aria-describedby="emailHelp" onChange={onChange} />
                    </div>
                    <div className="form-group m-3">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" name="password" value={creds.password} className="form-control"  onChange={onChange} />
                    </div>
                    <div className="form-group m-3">
                        <label htmlFor="exampleInputPassword1">Address</label>
                        <input type="text" name="location" value={creds.location} className="form-control"  onChange={onChange} />
                    </div>
                    <button type="submit" className="btn btn-primary m-3">Submit</button>
                    <Link to="/login" className="m-3"> Already a user</Link>
                </form>
            </div>
        </>
    )
}