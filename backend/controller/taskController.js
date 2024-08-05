const Task = require('../models/task');
const User = require('../models/user');

// Create Task
exports.createTask = async (req, res) => {
    try {
        const { title, desc } = req.body;
        const id = req.user.id;

        const newTask = new Task({
            taskName: title,
            taskDescription: desc,
        });

        const savedTask = await newTask.save();

        const updatedUser = await User.findByIdAndUpdate(
            id,
            { $push: { task: savedTask._id } },
            { new: true }
        );

        console.log(updatedUser);

        return res.status(200).json({
            success: true,
            message: "Task Created",
            task: newTask,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};

// Get All Tasks
exports.getAllTasks = async (req, res) => {
    try {
        const id = req.user.id;
        const userData = await User.findById(id).populate({
            path: 'task',
            options: { sort: { createdAt: -1 } }
        });
        return res.status(200).json({ success: true, tasks: userData.task });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, error: "Internal Server Error" });
    }
};

// Delete Task
exports.deleteTask = async (req, res) => {
    try {
        const id = req.params.id;
        const userId = req.user.id;
        await Task.findByIdAndDelete(id);
        await User.findOneAndUpdate({ _id: userId }, { $pull: { task: id } });
        return res.status(200).json({ success: true, message: "Task Deleted" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, error: "Internal Server Error" });
    }
};

// Update Task
exports.updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, desc } = req.body;
        await Task.findByIdAndUpdate(id, { taskName: title, taskDescription: desc });
        return res.status(200).json({ success: true, message: "Task Updated" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, error: "Internal Server Error" });
    }
};

// Update Task Importance
exports.updateTaskImp = async (req, res) => {
    try {
        const { id } = req.params;
        const TaskData = await Task.findById(id);
        const importantTask = TaskData.isImportant;
        await Task.findByIdAndUpdate(id, { isImportant: !importantTask });
        return res.status(200).json({ success: true, message: "Task Updated" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, error: "Internal Server Error" });
    }
};

// Update Task Completion
exports.updateTaskComplete = async (req, res) => {
    try {
        const { id } = req.params;
        const TaskData = await Task.findById(id);
        const CompleteTask = TaskData.isComplete;
        await Task.findByIdAndUpdate(id, { isComplete: !CompleteTask });
        return res.status(200).json({ success: true, message: "Task Updated" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, error: "Internal Server Error" });
    }
};

// Get Important Tasks
exports.getImpTask = async (req, res) => {
    try {
        const id = req.user.id;
        const ImpTaskData = await User.findById(id).populate({
            path: 'task',
            options: { sort: { createdAt: -1 } },
            match: { isImportant: true }
        });
        return res.status(200).json({ success: true, tasks: ImpTaskData.task });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, error: "Internal Server Error" });
    }
};

// Get Completed Tasks
exports.getCompTask = async (req, res) => {
    try {
        const id = req.user.id;
        const CompTask = await User.findById(id).populate({
            path: 'task',
            options: { sort: { createdAt: -1 } },
            match: { isComplete: true }
        });
        return res.status(200).json({ success: true, tasks: CompTask.task });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, error: "Internal Server Error" });
    }
};

// Get Incomplete Tasks
exports.getInCompTask = async (req, res) => {
    try {
        const id = req.user.id;
        const getInComp = await User.findById(id).populate({
            path: 'task',
            options: { sort: { createdAt: -1 } },
            match: { isComplete: false }
        });
        return res.status(200).json({ success: true, tasks: getInComp.task });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, error: "Internal Server Error" });
    }
};
