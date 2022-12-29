const { json } = require('body-parser');
const express = require('express');
const router=express.Router()
const Alien=require('../models/alien')
// const mongoose=require('mongoose')
// const alienSchema=new mongoose.Schema({
//     title:{
//         type:String,
//         required:true,
//     },
//     year:{
//         type:Number,
//         required:true
//     },
//     rating:{
//         type:Number,
//         required:true,
//         default:false
//     }


// })
// const Alien = mongoose.model('Alien', alienSchema);
router.get('/', async (req, res) => {
   try {
        const aliens = await Alien.find();
        res.json(aliens);
   } catch (err) {
     console.log(err);
     res.send('error ' + err);
   }
});
router.post('/',async(req,res )=>{
 const newDocument=new Alien(req.body)
  try{
    const a1= await newDocument.save()
    res.json(a1)
  }catch(err){
    res.send('error...')
  }
}
)
router.put('/:id', async (req, res) => {
  try {
    const updateResult = await Alien.updateOne({ _id: req.params.id }, req.body);
    res.json(updateResult);
  } catch (err) {
    res.send('error');
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deleteResult = await Alien.deleteOne({ _id: req.params.id }, req.body);
    res.json(deleteResult);
  } catch (err) {
    res.send('error');
  }
});
module.exports= router