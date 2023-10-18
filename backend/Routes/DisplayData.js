// To Display Data on Home Screen

const express = require('express');
const router = express.Router();

router.post('/items', (req, res)=>{
    try {
        res.send([global.item, global.category]);
    } catch (error) {
        console.error(error.message);
    }
})

module.exports = router;