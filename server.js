const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const User = require("./models/file.model");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/uploads", express.static("uploads")); // Serve uploaded files

mongoose.connect("mongodb+srv://ashritha04:chinki%402004@cluster0.jbqlq.mongodb.net/ashritha");

const upload = multer({ dest: "uploads/" });

app.post("/file", upload.single("avatar"), function (req, res) {
    console.log(req.file);
    res.send("wait for a while..");
    fs.rename(req.file.path, `uploads/${req.file.originalname}`, function (err,data) {
      console.log(err)
    });
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
