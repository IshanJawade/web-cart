// To Display Data on Home Screen
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();



router.post('/items', 
    async (req, res)=>{
    try{
        res.send([global.items, global.categories]);
    } catch (error) {
        console.error(error.message);
    }
})

module.exports = router;