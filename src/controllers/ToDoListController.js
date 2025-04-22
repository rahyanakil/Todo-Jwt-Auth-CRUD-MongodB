const ToDoListModel = require("../models/ToDoListModel");
var jwt = require("jsonwebtoken");
exports.CreateToDo = (req, res) => {
  let reqBody = req.body;
  let TodoSubject = reqBody["TodoSubject"];
  let TodoDescription = reqBody["TodoDescription"];
  let UserName = req.headers["username"];
  let TodoStatus = "New";
  let TodoCreateDate = Date.now();
  let TodoUpdateDate = Date.now();
  let PostBody = {
    UserName: UserName,
    TodoSubject: TodoSubject,
    TodoDescription: TodoDescription,
    TodoStatus: TodoStatus,
    TodoCreateDate: TodoCreateDate,
    TodoUpdateDate: TodoUpdateDate,
  };

  ToDoListModel.create(PostBody, (err, data) => {
    if (err) {
      res.status(400).json({ status: "fail", data: err });
    } else {
      res.status(200).json({ status: "success", data: data });
    }
  });
};


//select Todo
exports.SelectToDo = (req, res) => {
  let UserName = req.headers["username"];

  ToDoListModel.find({ UserName: UserName }, (err, data) => {
    if (err) {
      res.status(400).json({ status: "fail", data: err });
    } else {
      res.status(200).json({ status: "success", data: data });
    }
  });
};

//update profile
exports.UpdateToDo = (req, res) => {
  let UserName = req.headers["username"];
  let reqBody = req.body;
  ToDoListModel.findOneAndUpdate(
    { UserName: UserName },
    reqBody,
    { new: true },
    (err, data) => {
      if (err) {
        res.status(400).json({ status: "fail", data: err });
      } else {
        res.status(200).json({ status: "success", data: data });
      }
    }
  );
};