type Props = {
component: Function;

};


export default function Sidebar(props : Props) {
  const component = props.component;
  return (
    <>
      <aside className="w-[30vw]  relative h-full -z-20 " >
        <div className="overflow-y-auto  px-3 bg-gray-100 rounded border-r-4 py-6 border-black">
          {/* make sidebar in tailwind with profile */}
          <div className="flex flex-col items-center justify-between space-y-3">
            <div className="flex-shrink-0">
              <img
                className="h-[120px] w-[120px] rounded-full"
                src="/assets/man.png"
                alt="John"
              />
            </div>
            {/* basic info + qr */}
            <div className="flex flex-col gap-2 justify-between items-center">
              <h2 className="text-3xl font-semibold">Ravikant Ganjha</h2>
              <p className="text-xl">Vendor ID : #54984646849</p>
              <p className="text-xl border-yellow-500 border-4 text-yellow-600 font-bold px-4 py-2 rounded-2xl my-2">Points : 689</p>
{/* Credits come from database */}




              <img
                className="h-[170px] w-[170px] pt-2 "
                src="https://cdn.ttgtmedia.com/rms/misc/qr_code_barcode.jpg"
                alt="QR"
              />
              {/* make a button */}
              <button className="bg-green-500 hover:bg-green-700 mt-3 text-white font-bold py-1 px-6 rounded">
                Share QR  
                <img src="/assets/share.png" className="inline ml-1 text-green-500 w-4 mb-1"/>
              </button>
            </div>
            {/* button options */}
            {/* make div with borders and text on left and button on right */}
            <div className="flex flex-col space-y-1 w-full px-2 justify-center items-center">
              <div 
              onClick={()=> {component('locate customer')}}
              className="border border-gray-300 rounded-md hover:bg-purple-300  cursor-pointer p-2 text-center w-full bg-white flex flex-row space-x-1 justify-between items-center">
                <p className="text-xl w-full ">Locate your customer</p>
                {/* <button className="border-blue-700 border hover:bg-blue-100 transition-all text-blue-500 font-bold py-1 px-6 rounded">
                  View
                </button> */}
              </div>
              <div
              onClick={()=> {component('leaderboard')}} 
              className="border border-gray-300 rounded-md hover:bg-purple-300  cursor-pointer p-2 w-full text-center bg-white flex flex-row space-x-1 justify-between items-center">
                <p className="text-xl w-full">Leaderboard</p>
                {/* <button className="border-blue-700 border hover:bg-blue-100 transition-all text-blue-500 font-bold py-1 px-6 rounded">
                  View
                </button> */}
              </div>
              <div 
              onClick={(e)=> {component('update')}}
              className="border border-gray-300 rounded-md hover:bg-purple-300  cursor-pointer p-2 w-full bg-white flex flex-row space-x-1 justify-between items-center text-center">
                <p className="text-xl w-full">Update Cart</p>
                {/* <button className="border-blue-700 border hover:bg-blue-100 transition-all text-blue-500 font-bold py-1 px-6 rounded">
                  View
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
