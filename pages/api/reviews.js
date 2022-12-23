import Reviews from "../../models/Reviews";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
  if (req.method == "POST") {
    for (let i = 0; i < req.body.length; i++) {
      let b = new Reviews({
            vendornumber: req.body[i].vendornumber,
            email: req.body[i].email,
            msg: req.body[i].msg
      });



      await b.save();
      res.status(200).json({ success: "success" });
    }
  } else {
    res.status(400).json({ err: "This method is not allowed" });
  }
};

export default connectDb(handler);