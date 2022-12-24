import React,{useState} from 'react'


type Props={}
const Review = (props:Props) => {

  const [email, setemail] = useState("");
  const [number, setnumber] = useState("");
  const [msg, setmsg] = useState("");
  const value = false;



  async function handleSubmit (e)  {
    e.preventDefault();

    const data = [
      {
        vendornumber: number,
        msg: msg,
        email: email,
      },
    ];

    const data2 = [
      {
        msg: msg,
      },
    ];

    const JSONdata = JSON.stringify(data);
    const JSONdata2 = JSON.stringify(data2);
    const endpoint = "/api/reviews";
    const endpoint2 = "http://localhost:8100/by";

    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const options2 = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata2,
    };

    const response = await fetch(endpoint, options);
    const response2 = await fetch(endpoint2, options2);
  };
  return (
    <div className=''>
    <div className="text-[#fc6441] fflex flex-col justify-center items-centeront-bold text-4xl mt-20">
          Hey there, Whats your review for Ravi Kumar ?
        </div>
      <form className="border-2 border-[#fc6441] shadow-lg p-2 flex flex-col w-[600px]">
        
        <input className='text-xl font-semibold pb-3 p-4 border-2 border-black' placeholder="Vendor Number" value={number} onChange={(e) => {
    setnumber(e.target.value);
  }}/>
        <input className='text-xl font-semibold pb-3 p-4' placeholder="Your Review" value={msg} onChange={(e) => {
    setmsg(e.target.value);
  }}/>
        <input className='text-xl font-semibold pb-3 p-4' placeholder="Your Review" value={email} onChange={(e) => {
    setemail(e.target.value);
  }}/>
        <button onClick={(e) => handleSubmit(e)} 
      className="bg-[#fc6441] w-2/5 rounded-xl p-2 text-white font-semibold">
        Submit
      </button>

        
      </form>
      </div>
  )
}

export default Review
