const router = require("express").Router();
const Task = require('../models/task');
const User = require('../models/user');


//Create Task ----->
router.post("/createTask", async (req, res)=>{
    try {
        const{title, desc} = req.body;
        const{id} = req.headers;
        const newTask = new Task({
            taskName: title,
            taskDescription: desc,
        });
        const saveTask = await newTask.save();
        const taskId = saveTask._id;
        await User.findByIdAndUpdate(id,{ $push:{tasks: taskId._id }});
        return res.status(200).json({success:true, message: "Task Created"});
    } catch (error) {
        console.log(error);
        return res.status(500).json({success: false,error: "Internal Server Error"});
    }
})




module.exports = router;