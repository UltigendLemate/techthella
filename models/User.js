const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    address: { type: String, required: true},
    email : {type:String, required: true, unique:true},
    pincode: {type: Number, required: true},
    password: { type: String, required: true },
    isuser: {type: Boolean, required: true, default: true},
    credit: {type: Number, default:0}
  },{timestamps: true});

  mongoose.models = {};
  export default mongoose.model("User", UserSchema);