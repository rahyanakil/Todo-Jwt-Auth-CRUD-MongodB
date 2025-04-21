const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
    FirstName: { type: String },
    LastName: { type: String },
    EmailAddress: { type: String },
    MobileNumber: { type: String, unique: true },
    City: { type: String },
    UserName: { type: String,unique:true },
    Password: { type: String,unique:true },
  },
  { versionKey: false }
);
const ProfileModel = mongoose.model("profile", DataSchema);
module.exports = ProfileModel;
