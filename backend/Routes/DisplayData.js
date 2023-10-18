// To Display Data on Home Screen
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();



router.post('/items', 
    async (req, res)=>{
        const fetched_data = mongoose.connection.db.collection("items");
        await fetched_data.find({}).toArray(function (err, data){
            const fetched_cat = mongoose.connection.db.collection("category");
            fetched_cat.find({}).toArray(function (err, cat){
                if(err) {
                    console.log(err);
                }
                else {
                    global.items = data;
                    global.categories = cat;
                }
            })
        })
    try{
        res.send([global.items, global.categories]);
    } catch (error) {
        console.error(error.message);
    }
})

module.exports = router;