const express = require('express');
const router = express.Router();
const User = require('../model/User');
const { body, validationResult } = require('express-validator');

router.post("/signup", [
    body('email', "Invalid email").isEmail(),
    body('password', "Password length should be at least 5").isLength({ min: 5 }),
],
    async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        try {
            await User.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                location: req.body.location
            })
            res.json({ success: true })

        } catch (error) {
            console.log(error);
            res.json({ success: false })
        }
    }
)

router.post("/login", [
    body('email', "Invalid email").isEmail(),
    body('password', "Password length should be at least 5").isLength({ min: 5 })
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        let email = req.body.email;
        try {
            let userData = await User.findOne({ email });
            if (!userData) {
                return res.status(400).json({ errors: "Try login with correct credentials" })
            }
            if (req.body.password !== userData.password) {
                return res.status(400).json({ errors: "Password is incorrect" })
            }
            return res.json({ success: true })

        } catch (error) {
            console.log(error);
            res.json({ success: false })
        }
    }
)

module.exports = router;