const router = require("express").Router();
const Task = require('../models/task');
const User = require('../models/user');
const { authenticateToken } = require("./auth");


//Create Task ----->
router.post("/createTask", authenticateToken, async (req, res)=>{
    try {
        const{title, desc} = req.body;
        const id = req.user.id;
        const newTask = new Task({
            taskName: title,
            taskDescription: desc,
        });
        const saveTask = await newTask.save();
        const taskId = saveTask._id;
        await User.findByIdAndUpdate(id,{ $push:{task: taskId._id }}).then((data)=>{console.log(data)});
        return res.status(200).json({success:true, message: "Task Created", task: newTask});
    } catch (error) {
        console.log(error);
        return res.status(500).json({success: false,error: "Internal Server Error"});
    }
});



//Get All Tasks ----->
router.get("/getAllTasks", authenticateToken, async (req, res)=>{
    try {
        const id = req.user.id;
        const userData = await User.findById(id).populate({path: 'task',options: {sort: {createdAt: -1}}});
        res.status(200).json({success:true, tasks: userData.task});
    } catch (error) {
        console.log(error);
        return res.status(500).json({success: false,error: "Internal Server Error"});
    }
});


//Delete Task ----->
router.delete("/deleteTask/:id", authenticateToken, async (req, res)=>{
    try {
        const id = req.params.id;
        const userId = req.user.id;
        await Task.findByIdAndDelete(id);
        await User.findOneAndUpdate({_id: userId},{$pull: {task: id}});
        return res.status(200).json({success:true, message: "Task Deleted"});
    }catch (error) {
        console.log(error);
        return res.status(500).json({success: false,error: "Internal Server Error"});
    }
});

//Update Task ----->
router.put("/updateTask/:id", authenticateToken, async (req, res)=>{
    const {id} = req.params;
    const {title, desc} = req.body;
    await Task.findByIdAndUpdate(id, {taskName: title, taskDescription: desc});
    return res.status(200).json({success:true, message: "Task Updated"});

});

//update - Important Task ----->
router.put("/updateTaskImp/:id", authenticateToken, async (req, res)=>{
    const {id} = req.params;
    const TaskData = await Task.findById(id);
    const importantTask = TaskData.isImportant;
    await Task.findByIdAndUpdate(id, {isImportant: !importantTask});
    return res.status(200).json({success:true, message: "Task Updated"});

});

//update - Complete Task ----->
router.put("/updateTaskComplete/:id", authenticateToken, async (req, res)=>{
    const {id} = req.params;
    const TaskData = await Task.findById(id);
    const CompleteTask = TaskData.isComplete;
    await Task.findByIdAndUpdate(id, {isComplete: !CompleteTask});
    return res.status(200).json({success:true, message: "Task Updated"});
});


//Get Important Tasks ----->
router.get("/getImpTask", authenticateToken, async (req, res)=>{
    try {
        const id = req.user.id;
        const ImpTaskData = await User.findById(id).populate({path: 'task',options: {sort: {createdAt: -1}}, match: {isImportant: true}});
        res.status(200).json({success:true, tasks: ImpTaskData.task});
    } catch (error) {
        console.log(error);
        return res.status(500).json({success: false,error: "Internal Server Error"});
    }
});

//Get Completed Tasks ----->
router.get("/getCompTask", authenticateToken, async (req, res)=>{
    try {
        const id = req.user.id;
        const CompTask = await User.findById(id).populate({path: 'task',options: {sort: {createdAt: -1}}, match: {isComplete: true}});
        res.status(200).json({success:true, tasks: CompTask.task});
    } catch (error) {
        console.log(error);
        return res.status(500).json({success: false,error: "Internal Server Error"});
    }
});

//Get Incomplete Tasks ----->
router.get("/getInCompTask", authenticateToken, async (req, res)=>{
    try {
        const id = req.user.id;
        const getInComp = await User.findById(id).populate({path: 'task',options: {sort: {createdAt: -1}}, match: {isComplete: false}});
        res.status(200).json({success:true, tasks: getInComp.task});
    } catch (error) {
        console.log(error);
        return res.status(500).json({success: false,error: "Internal Server Error"});
    }
});
module.exports = router;