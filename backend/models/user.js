const mongoose = require('mongoose');
const task = require('./task');
const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        min:6,
        max:255,
        unqiue:true
    },
    email:{
        type:String,
        required:true,
        max:255,
        min:6
    },
    password:{
        type:String,
        required:true,
        max:1024,
        min:6
    },
    task: [
        {
            type:mongoose.Types.ObjectId,
            ref: "Task",
        },
    ]    
});
module.exports = mongoose.model('User',userSchema);