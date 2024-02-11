const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");
const bodyParser = require("body-parser");

dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose
.connect(
    process.env.MONGO_URL
    )
    .then(() => console.log("done!")).catch((err) => console.log(err));
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movie", movieRoute);
app.use("/api/lists", listRoute);


app.listen(8800, () => {
    console.log("Backend server is running");
})