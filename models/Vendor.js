const mongoose = require("mongoose");

const VendorSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true},
    pincode: {type: Number, required: true},
    phone: {type:Number, required: true, unique:true},
    password: { type: String, required: true },
    isuser: {type:Boolean, default:false},
    credit: {type: Number, default:0}
  },{timestamps: true});

  mongoose.models = {};
  export default mongoose.model("Vendor", VendorSchema);