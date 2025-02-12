const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const File = require("./models/file.model");

const app = express();
app.use(cors());

// Multer configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage: storage });

mongoose.connect("mongodb+srv://ashritha04:chinki%402004@cluster0.jbqlq.mongodb.net/ashritha", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB Connection Error:", err));

app.use("/uploads", express.static("uploads"));

app.post("/file", upload.single("file"), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).send("No file uploaded.");
        }

        const { originalname, path, size, mimetype } = req.file;

        const file = new File({
            originalName: originalname,
            path: path,
            size: size,
            mimetype: mimetype,
        });

        await file.save();
        res.send("File uploaded successfully.");
    } catch (err) {
        console.error("Failed to upload file:", err);
        res.status(500).send("Failed to upload file.");
    }
});

app.listen(7778, () => console.log("Server running on port 7778"));
