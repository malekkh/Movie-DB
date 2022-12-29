const mongoose=require('mongoose')
const alienSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    year:{
        type:Number,
        required:true
    },
    rating:{
        type:Number,
        required:true,
        default:false
    }


})
module.exports= mongoose.model('Alien',alienSchema)