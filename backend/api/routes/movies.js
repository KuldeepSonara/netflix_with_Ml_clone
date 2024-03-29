const router = require("express").Router();
const Movie =  require("../models/Movie");

const verify = require("../verifyToken")


//Create Movie

router.post("/create", verify, async (req, res) => {
    if (req.user.isAdmin) {
      const newMovie = new Movie(req.body);
  
      try {
        const savedMovie = await newMovie.save();
        res.status(201).json(savedMovie);
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(500).json("You are not allowed!");
    }
  });

//Upadte movie

router.put("/:id", verify, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const updatedMovie = await Movie.findByIdAndUpdate(
                req.params.id, {
                    $set: req.body,
                },
                { new: true }
            );
            res.status(200).json(updatedMovie);
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(403).json("You are not allowed!");
    }
});



//Delete movie

router.delete("/:id",verify, async (req,res)=>{
    if(req.user.isAdmin){
        try {
            await Movie.findByIdAndDelete(
                req.params.id
            );
            res.status(200).json("This movie has been deleted....")
        } catch (error) {
            res.status(500).json(error);
        }
    }else {
            res.status(500).json("You are not allowed!");
        }
    }
);

//GET movie

router.get("/find/:id",verify, async (req,res)=>{
        try {
            const movie = await Movie.findById(
                req.params.id
            );
           return res.status(200).json(movie)
        } catch (error) {
            return res.status(500).json(error);
        }
    }   
);

//GET random movie

router.get("/random", verify, async (req, res) => {
    const type = req.query.type;
    let movie;
    try {
        if (type === "series") {
            movie = await Movie.aggregate([
                { $match: { isSeries: true } },
                { $sample: { size: 1 } },
            ]);
        } else {
            movie = await Movie.aggregate([
                { $match: { isSeries: false } },
                { $sample: { size: 1 } },
            ]);
        }
        if (!res.headersSent) { // Check if response headers have been sent
            res.status(200).json(movie);
        }
    } catch (error) {
        if (!res.headersSent) {
            res.status(500).json(error);
        }
    }
});


//Get all

router.get("/",verify, async (req,res)=>{
    if(req.user.isAdmin){
        try {
           const movies = await Movie.find();
            res.status(200).json(movies.reverse())
        } catch (error) {
            res.status(500).json(error);
        }
    }else {
            res.status(500).json("You are not allowed!");
        }
    }
);

module.exports = router 