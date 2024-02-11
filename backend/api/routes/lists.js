const router = require("express").Router();
const List =  require("../models/List");

const verify = require("../verifyToken")


//Create lsit

router.post("/create",verify, async (req,res)=>{
    if(req.user.isAdmin){
        const newList = new List(req.body);
        try {
            const svaedList = await newList.save();
            res.status(201).json(svaedList)
        } catch (error) {
            res.status(500).json(error);
        }
    }else {
            res.status(500).json("You are not allowed!");
        }
    }
);

//delete List

router.delete("/:id",verify, async (req,res)=>{
    if(req.user.isAdmin){
        try {
            await List.findByIdAndDelete(req.params.id);
            res.status(201).json("This List has been deleted....")
        } catch (error) {
            res.status(500).json(error);
        }
    }else {
            res.status(500).json("You are not allowed!");
        }
    }
);


//GET List

router.get("/",verify, async (req,res)=>{
    const typeQuery = req.query.type;
    const genreQuery = req.query.genre;
    let list = [];
    try {
       if(type){
        
       }
    } catch (error) {
        res.status(500).json(error);
    }
}   
);





module.exports = router 