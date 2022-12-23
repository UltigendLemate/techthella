const mongoose = require("mongoose");

const ReviewsSchema = new mongoose.Schema(
  {
    vendornumber: { type: Number, required: true },
    email : {type:String, required: true, unique:true},
    msg: {type:String, required: true}
  },{timestamps: true});

  mongoose.models = {};
  export default mongoose.model("Reviews", ReviewsSchema);