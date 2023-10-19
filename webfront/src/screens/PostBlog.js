import React, { useState } from 'react';
import Navbar from "../components/Navbar"
import { Link, useNavigate } from 'react-router-dom';

export default function PostBlog(){

    const [data, setData] = useState ({title:"", body:""});
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/postblog", {
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({title: data.title, body:data.body})
        });
        const json = await response.json();
        console.log(json);

        if(!json.success){
            alert("Something is wrong!")
        }

        if(json.success){
            alert("Blog Posted successfully")
            navigate("/blogs");
        }

    }

    const onChange = (event) => {
        setData({...data, [event.target.name]:event.target.value})
    }

    return(
        <>
            <div> <Navbar /> </div>
            <div className='container'> 
                <form onSubmit={handleSubmit}>
                    <div className="form-group m-3">
                        <label htmlFor="exampleInputEmail1">Title</label>
                        <input type="text" name="title"  value={data.title} className="form-control" placeholder="Enter title of the blog" onChange={onChange}/>
                    </div>
                    <div className="form-group m-3">
                        <label htmlFor="exampleInputEmail1" >Body</label>
                        <textarea type="text" name="body" row="30" value={data.body} className="form-control" placeholder="Start writing body of the blog here ..." onChange={onChange}/>
                    </div>
                    <div className="form-group m-3 fs-3 container d-flex justify-content-center align-items-center">
                        <button className="btn btn-primary" type="submit" >Post</button>
                    </div>
                </form>
            </div>
        </>
    )
}

