const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const {Schema} = mongoose ;

const content = new Schema({
    Title : String ,
    Body : String 
})

const task = mongoose.model('task',content);

const mongoose_url = process.env.MONGO_URI;

app.use(express.json());
app.use(cors());
mongoose.connect(mongoose_url);

app.get('/notes',async (req ,res)=>{
    const all = await task.find();
    res.json(all);
})
app.post('/notes',async (req,res)=>{
    const title = req.body.Title;
    const body = req.body.Body;
   const task1 = new task({Title:title, Body: body});
   const saved = await task1.save();
     res.status(201).json(saved);
})

app.delete('/notes/:id',async (req,res)=>{
    const id = req.params.id;
    console.log("helloooo")
    const deletion = await task.findByIdAndDelete(id);

     res.status(201).json({ message : 'user dleted ' ,deletion});

})

app.listen(3000,()=>{
    console.log("I am working fine on 3000")
});
