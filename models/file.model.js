const mongoose = require("mongoose");

const FileSchema = new mongoose.Schema({
    file: String,
    uploadDate: { type: Date, default: Date.now }
});

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    files: [FileSchema] 
});

module.exports = mongoose.model("User", UserSchema);
