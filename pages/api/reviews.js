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

      var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify([
    {
        number: req.body[0].vendornumber
    }
  ]);
var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:8100/by", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

      res.status(200).json({ success: "success" });
    }
  } else {
    res.status(400).json({ err: "This method is not allowed" });
  }
};

export default connectDb(handler);