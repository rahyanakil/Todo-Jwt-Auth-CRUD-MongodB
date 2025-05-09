const express = require("express");
const ProfileController = require("../controllers/ProfileController");
const AuthVerifyMiddleware = require("../middleware/AuthVerifyMiddleware");
const router = express.Router();
const ToDoListController = require("../controllers/ToDoListController");
const ToDoListModel = require("../models/ToDoListModel");

router.post("/CreateProfile", ProfileController.CreateProfile);
router.post("/UserLogin", ProfileController.UserLogin);
router.get(
  "/SelectProfile",
  AuthVerifyMiddleware,
  ProfileController.SelectProfile
);
router.post(
  "/UpdateProfile",
  AuthVerifyMiddleware,
  ProfileController.UpdateProfile
);
//todo list
//create to do
router.post("/CreateToDo", AuthVerifyMiddleware, ToDoListController.CreateToDo);
//select todo 
router.get("/SelectToDo",AuthVerifyMiddleware,ToDoListController.SelectToDo)
//update to do 
router.post("/UpdateToDo",AuthVerifyMiddleware,ToDoListController.UpdateToDo)
router.post("/UpdateStatusToDo",AuthVerifyMiddleware,ToDoListController.UpdateStatusToDo)
router.post("/RemoveToDo",AuthVerifyMiddleware,ToDoListController.RemoveToDo)
router.post("/SelectToDoByStatus",AuthVerifyMiddleware,ToDoListController.SelectToDoByStatus)
router.post("/SelectToDoByDate",AuthVerifyMiddleware,ToDoListController.SelectToDoByDate)
module.exports = router;
