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
router.post("/CreateToDo", AuthVerifyMiddleware, ToDoListController.CreateToDo);

module.exports = router;
