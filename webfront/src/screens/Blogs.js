import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import React, { useState } from 'react';

// Sample data for blog posts
const blogPosts = [
  {
    id: 1,
    title: 'Blog Post 1',
    content: 'This is the content of Blog Post 1.',
  },
  {
    id: 2,
    title: 'Blog Post 2',
    content: 'This is the content of Blog Post 2.',
  },
  {
    id: 3,
    title: 'Blog Post 3',
    content: 'This is the content of Blog Post 3.',
  },
];

function Blogs() {
  return (
  <>   
        <div><Navbar /></div>
        <div> Blogs </div>
        <div className="container mt-5">
            <h1>Blogs</h1>
            <div className="row">
                {blogPosts.map((post) => (
                <div className="col-md-4" key={post.id}>
                    <div className="card mb-4">
                    <div className="card-body">
                        <h5 className="card-title">{post.title}</h5>
                        <p className="card-text">{post.content}</p>
                        <a href="#" className="btn btn-primary">
                        Read More
                        </a>
                    </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
        <div><Footer /></div>
    </>
  );
}

export default Blogs;
