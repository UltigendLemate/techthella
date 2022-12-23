import User from "../../models/User";
import connectDb from "../../middleware/mongoose";
import bcrypt from "bcrypt"

const handler = async (req, res) => {
  if (req.method == "POST") {
    for (let i = 0; i < req.body.length; i++) {
    const hashedPassword = await bcrypt.hash(req.body[i].password, 12);
      let b = new User({
            firstName: req.body[i].firstName,
            email: req.body[i].email,
            address: req.body[i].address,
            pincode: req.body[i].pincode,
            password: hashedPassword,
            isuser: req.body[i].isuser
      });

      await b.save();
      res.status(200).json({ success: "success" });
    }
  } else {
    res.status(400).json({ err: "This method is not allowed" });
  }
};

export default connectDb(handler);