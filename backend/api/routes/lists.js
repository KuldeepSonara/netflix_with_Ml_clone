const router = require("express").Router();
const List =  require("../models/List");

const verify = require("../verifyToken")


//Create lsit

router.post("/create", verify, async (req, res) => {
    try {
        if (req.user.isAdmin) {
            const newList = new List(req.body);
            const savedList = await newList.save();
            res.status(201).json(savedList);
        } else {
            res.status(403).json("You are not allowed!");
        }
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
});


//delete List

router.delete("/:id", verify, async (req, res) => {
    try {
        if (req.user.isAdmin) {
            await List.findByIdAndDelete(req.params.id);
            res.status(204).json("This List has been deleted....");
        } else {
            res.status(403).json("You are not allowed!");
        }
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
});



//GET List

router.get("/", verify, async (req, res) => {
    const typeQuery = req.query.type;
    const genreQuery = req.query.genre;
    let list = [];
    try {
        if (typeQuery) {
            if (genreQuery) {
                list = await List.aggregate([
                    { $sample: { size: 10 } },
                    { $match: { type: typeQuery, genre: genreQuery } },
                ]);
            } else {
                list = await List.aggregate([
                    { $sample: { size: 10 } },
                    { $match: { type: typeQuery } },
                ]);
            }
        } else {
            list = await List.aggregate([
                { $sample: { size: 10 } }
            ]);
        }
        res.status(200).json(list);
    } catch (error) {
        res.status(500).json(error);
    }
});






module.exports = router 