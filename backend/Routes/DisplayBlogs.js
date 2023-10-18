const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

router.post("/showblogs",
    async (req, res) =>{
        
        const fetched_blog = mongoose.connection.db.collection("blogs");
        await fetched_blog.find({}).toArray(function (err, blogs){
                if(err){
                    console.log(err);
                    res.json({ success: false })
                } else {
                    global.blogs = blogs;
                    console.log(global.blogs);
                    res.json({ success: true })
                }
            }
        )
        try {    
            res.send([global.blogs])
        } catch (error) {
            console.error(error.message);
        }
      
    }
)

module.exports = router;