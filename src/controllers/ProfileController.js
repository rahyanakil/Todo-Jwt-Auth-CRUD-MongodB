const ProfileModel = require("../models/ProfileModel");
var jwt = require("jsonwebtoken");
exports.CreateProfile = (req, res) => {
  let reqBody = req.body;
  ProfileModel.create(reqBody, (err, data) => {
    if (err) {
      res.status(400).json({ status: "fail", data: err });
    } else {
      res.status(200).json({ status: "success", data: data });
    }
  });
};

//user login
exports.UserLogin = (req, res) => {
  let reqBody = req.body;
  let UserName = reqBody["UserName"];
  let Password = reqBody["Password"];
  ProfileModel.find({ UserName: UserName, Password: Password }, (err, data) => {
    if (err) {
      res.status(400).json({ status: "fail", data: err });
    } else {
      if (data.length > 0) {
        //creating json  auth token
        let payload = {
          exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
          data: data[0],
        };
        var token = jwt.sign(payload, "SecretKey123456789");

        res
          .status(200)
          .json({ status: "Successfully Login", token: token, data: data });
      } else {
        res.status(401).json({ status: "Unauthorized" });
      }
    }
  });
};
//select Profile
exports.SelectProfile = (req, res) => {
  let UserName = req.headers["username"];

  ProfileModel.find({ UserName: UserName }, (err, data) => {
    if (err) {
      res.status(400).json({ status: "fail", data: err });
    } else {
      res.status(200).json({ status: "success", data: data });
    }
  });
};

//update profile
exports.UpdateProfile = (req, res) => {
  let UserName = req.headers["username"];
  let reqBody = req.body;
  ProfileModel.findOneAndUpdate(
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
