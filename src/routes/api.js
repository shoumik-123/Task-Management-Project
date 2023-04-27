const express = require('express');
const UsersController = require("../controllers/UsersController")
const TasksController = require("../controllers/TasksController")
const AuthVerifyMiddleware = require("../middleware/AuthVerifyMiddleware")
const router = express.Router();



router.post("/registration" , UsersController.Registration);
router.post("/login",UsersController.UserLogin)
router.post("/profileUpdate",AuthVerifyMiddleware ,UsersController.UpdateProfile)




router.post("/createTask",AuthVerifyMiddleware ,TasksController.createTask)
router.post("/deleteTask",AuthVerifyMiddleware ,TasksController.deleteTask)
router.get("/updateTaskStatus/:id/:status",AuthVerifyMiddleware ,TasksController.updateTaskStatus)


module.exports =router;