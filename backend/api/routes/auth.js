const router = require("express").Router();
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const CryptoJS = require("crypto-js");

// Register

router.post("/register", async(req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.Secret_Key).toString(),
    });
    try {
        const user = await newUser.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Login

router.post("/login", async(req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(401).json("Wrong password or username!");
        }

        const bytes = CryptoJS.AES.decrypt(user.password, process.env.Secret_Key);
        const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

        if (originalPassword !== req.body.password) {
            return res.status(401).json("Wrong password or username!");
        }
        const { password, ...info } = user._doc;
        

        const accessToken = jwt.sign(
        {id: user._id, isAdmin: user.isAdmin},
        process.env.Secret_Key,
        {expiresIn : "5d"}
        );

        res.status(200).json({...info, accessToken});
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;