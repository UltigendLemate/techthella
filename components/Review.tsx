import React from 'react'

const Review = () => {
  return (
    <>
    <div className="text-[#fc6441] font-bold text-4xl mt-20">
          Hey there, What's your review for Ravi Kumar ?
        </div>
      <form className="border-2 border-[#fc6441] shadow-lg p-2 flex flex-col w-[600px]">
        
        <input className='text-xl font-semibold pb-3 p-4' placeholder="Your Purchase"/>
        <input className='text-xl font-semibold pb-3 p-4' placeholder="Your Review"/>
        <button 
      className="bg-[#fc6441] w-2/5 rounded-xl p-2 text-white font-semibold">
        Submit
      </button>

        
      </form>
      </>

  )
}

export default Review
