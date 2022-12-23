const mongoose = require("mongoose");

const ReviSchema = new mongoose.Schema(
  {
   msg: {type:String, required: true}
  },{timestamps: false});

  mongoose.models = {};
  export default mongoose.model("Revi", ReviSchema);