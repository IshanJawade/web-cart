const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

router.post("/showblogs",
    async (req, res) =>{
        try {    
            res.send([global.blogs])
        } catch (error) {
            console.error(error.message);
        }
      
    }
)

module.exports = router;