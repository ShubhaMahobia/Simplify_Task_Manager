const express = require("express");
const { createTask, getAllTasks, deleteTask, updateTask, updateTaskImp, updateTaskComplete, getImpTask, getCompTask, getInCompTask } = require("../controller/taskController");
const { authenticateToken } = require("../middleware/auth");
const { signup, login } = require("../controller/userController");
const router = express.Router();

//User Routes
router.post("/signup", signup);
router.post("/login", login);


//Task Routes
router.post("/createTask",authenticateToken, createTask);
router.get("/getAllTasks", authenticateToken, getAllTasks);
router.delete("/deleteTask/:id", authenticateToken, deleteTask);
router.put("/updateTask/:id", authenticateToken, updateTask);
router.put("/updateTaskImp/:id", authenticateToken, updateTaskImp);
router.put("/updateTaskComplete/:id", authenticateToken, updateTaskComplete);
router.get("/getImpTask", authenticateToken, getImpTask);
router.get("/getCompTask", authenticateToken, getCompTask);
router.get("/getInCompTask", authenticateToken, getInCompTask);

module.exports = router;