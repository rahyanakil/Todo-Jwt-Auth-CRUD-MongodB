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

//update todo 
exports.UpdateToDo =(req,res)=>{
  let reqBody =req.body;
  let TodoSubject =reqBody['TodoSubject']
  let TodoDescription =reqBody['TodoDescription']
  let TodoUpdateDate =Date.now();
  let _id =reqBody['_id']

  let PostBody={
    TodoSubject:TodoSubject,
    TodoDescription:TodoDescription,
    TodoUpdateDate:TodoUpdateDate,
  }
  ToDoListModel.updateOne({_id:_id},{$set:PostBody},{upsert:true},(err,data)=>{
    if(err){
      res.status(400).json({status:"fail",data:err})
    }
    else{
      res.status(200).json({status:"success",data:data})
    }
  })

}
//update todo with the help of AI
// exports.UpdateToDo = (req, res) => {
//   let UserName = req.headers["username"];
//   let reqBody = req.body;
//   ToDoListModel.findOneAndUpdate(
//     { UserName: UserName },
//     reqBody,
//     { new: true },
//     (err, data) => {
//       if (err) {
//         res.status(400).json({ status: "fail", data: err });
//       } else {
//         res.status(200).json({ status: "success", data: data });
//       }
//     }
//   );
// };

//update status todo 
exports.UpdateStatusToDo =(req,res)=>{
  let reqBody =req.body;
  let TodoStatus =reqBody['TodoStatus']
  let TodoUpdateDate =Date.now();
  let _id =reqBody['_id']

  let PostBody={
    TodoStatus:TodoStatus,
    TodoUpdateDate:TodoUpdateDate,
  }
  ToDoListModel.updateOne({_id:_id},{$set:PostBody},{upsert:true},(err,data)=>{
    if(err){
      res.status(400).json({status:"fail",data:err})
    }
    else{
      res.status(200).json({status:"success",data:data})
    }
  })

}
//Delete todo status
exports.RemoveToDo =(req,res)=>{
  let reqBody =req.body;
  let _id =reqBody['_id']

 
  ToDoListModel.remove({_id:_id},(err,data)=>{
    if(err){
      res.status(400).json({status:"fail",data:err})
    }
    else{
      res.status(200).json({status:"success",data:data})
    }
  })

}
//Filtering by Status
exports.SelectToDoByStatus = (req, res) => {
  let UserName = req.headers["username"];
  let TodoStatus =req.body["TodoStatus"]

  ToDoListModel.find({ UserName: UserName,TodoStatus:TodoStatus }, (err, data) => {
    if (err) {
      res.status(400).json({ status: "fail", data: err });
    } else {
      res.status(200).json({ status: "success", data: data });
    }
  });
};

//Filtering by Date
exports.SelectToDoByDate = (req, res) => {
  let UserName = req.headers["username"];
  let FormDate =req.body["FormDate"]
  let ToDate =req.body["ToDate"]

  ToDoListModel.find({ UserName: UserName,TodoCreateDate:{$gte:new Date(FormDate),$lte:new Date(ToDate)} }, (err, data) => {
    if (err) {
      res.status(400).json({ status: "fail", data: err });
    } else {
      res.status(200).json({ status: "success", data: data });
    }
  });
};

