const express = require('express');
const router = express.Router();
const Blog = require('../model/Blog');

router.post( "/postblog",
    async (req, res) => {
        try {
            await Blog.create({
                title: req.body.title,
                body: req.body.body,
                //picture: req.body.picture
            })
            res.json({ success: true })
        } catch (error) {
            console.log(error);
            res.json({ success: false })
        }
    }
)

module.exports = router;