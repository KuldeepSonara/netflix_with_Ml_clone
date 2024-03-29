const router = require("express").Router();
const User =  require("../models/User");
const CryptoJS = require("crypto-js");
const verify = require("../verifyToken")


//UPDATE

router.put("/:id",verify, async (req,res)=>{
    if(req.user.id === req.params.id || req.user.isAdmin){
        if(req.body.password){
            req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.Secret_Key).toString();
        }
        try {
            const updateUser = await User.findByIdAndUpdate(req.params.id,{
                $set: req.body, 
            },
            {new: true}
            );
            res.status(200).json(updateUser);
        } catch (error) {
            res.status(500).json("You can not upadet this user!");
        }
    }
});
//DELETE
router.delete("/:id",verify, async (req,res)=>{
    if(req.user.id === req.params.id || req.user.isAdmin){
            try {
                await User.findByIdAndDelete(req.params.id);
                res.status(200).json("User has been deleted...");
            } catch (error) {
                res.status(500).json("You can not delete this user!");
            }
        }
     
});
//GET
router.get("/find/:id", async (req,res)=>{
    try {
       const user = await User.findById(req.params.id);
       const { password, ...info } = user._doc;
        res.status(200).json(info);
    } catch (error) {
        res.status(500).json(error);
    }
    
});
//GET ALL
router.get("/",verify, async (req,res)=>{
    const query = req.query.new;
    if(req.user.isAdmin){
         try {
            const users = query ? await User.find().sort({_id:-1}).limit(10) : await User.find();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json("You can not delete this user!");
        }
    }else{
        res.status(403).json("You are not allowed to see all users!");
    }
});
//GET USER STATS

router.get("/stats", async (req, res) => {
    const today = new Date();
    const lastYear = new Date().setFullYear(today.getFullYear() - 1); // Corrected to set the date of last year

    const monthsArray = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    try {
        const data = await User.aggregate([
        
            [
                {
                    $project: {
                        year: { $year: "$createdAt" },
                        month: { $month: "$createdAt" }
                    }
                },
                {
                    $group: {
                        _id: { 
                            year: "$year",
                            month: { $arrayElemAt: [monthsArray, { $subtract: ["$month", 1] }] }
                        },
                        total: { $sum: 1 }
                    }
                }
            ]
            
        ]);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
});


module.exports = router 