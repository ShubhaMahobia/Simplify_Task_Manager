const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema({
    taskName:{
        type:String,
        required:true,
        min:6,
        max:255,
        unqiue:true
    },
    taskDescription:{
        type:String,
        required:true,
        max:255,
        min:6
    },
    isComplete:{
        type:Boolean,
        required:true,
        max:255,
        min:6,
        default: false
    },
    taskPriority:{
        type:Boolean,
        required:true,
        max:255,
        default: false,
        min:6
    },
   
},
{
    timestamps:true
}
);

module.exports = mongoose.model('Task',taskSchema);