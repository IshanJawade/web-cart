import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import BlogCard from "../components/BlogCard";
import React, { useEffect, useState} from 'react';

// Sample data for blog posts

function Blogs() {

   // Load data from Backend to Frontend
   const [data, setData] = useState([]);
   
   const loadData = async () => {
    let response = await fetch('http://localhost:5000/api/showblogs', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    })
    response = await response.json();

    setData(response[0]);
  }

  // When to load data from Backend to Frontend
  useEffect(() => {
    loadData();
  }, []);

  return (
  <>   
        <div><Navbar /></div>
        <div className="container m-3">
          {
            data ==[] ? <div> No blogs found!</div>
            : data.map( (blogData)=>{
              return (
                  <div key={blogData._id} className>
                    < BlogCard
                      blogTitle={blogData.title}
                      blogBody={blogData.body}
                      blogData={blogData.data}
                    />
                  </div>
              )
            }

            )
          }
        </div>
        <div><Footer /></div>
    </>
  );
}

export default Blogs;
