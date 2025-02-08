var mongoose=require('mongoose')
var FileSchema=new mongoose.Schema({
    file:{ type: String, required: true },
    uploadDate: { type: Date, default: Date.now }
})
var LoginSchema=new mongoose.Schema({
    username:String,
    password:String,
    filename:[FileSchema]
})
module.exports =mongoose.model('FileUpload',LoginSchema)