export default function Sidebar() {
  return (
    <>
      <aside className="w-[30vw]   -z-20" >
        <div className="overflow-y-auto pt-10 px-3 bg-gray-100 rounded border-r-4 border-black">
          {/* make sidebar in tailwind with profile */}
          <div className="flex flex-col items-center justify-between space-y-3">
            <div className="flex-shrink-0">
              <img
                className="h-[120px] w-[120px] rounded-full"
                src="http://medicine.exeter.ac.uk/images/profiles/John_Dennis.jpg"
                alt="John"
              />
            </div>
            {/* basic info + qr */}
            <div className="flex flex-col space-y-1 justify-between items-center">
              <h2 className="text-3xl font-semibold">Ravikant Ganjha</h2>
              <p className="text-xl">Vendor ID : #54984646849</p>
              <img
                className="h-[170px] w-[170px] pt-5 "
                src="https://cdn.ttgtmedia.com/rms/misc/qr_code_barcode.jpg"
                alt="QR"
              />
              {/* make a button */}
              <button className="bg-green-500 hover:bg-green-700 mt-12 text-white font-bold py-1 px-6 rounded">
                Share QR
              </button>
            </div>
            {/* button options */}
            {/* make div with borders and text on left and button on right */}
            <div className="flex flex-col space-y-1 w-full px-2 space-y-1 justify-between items-center">
              <div className="border border-gray-300 rounded-md p-4 w-full bg-white flex flex-row space-x-1 justify-between items-center">
                <p className="text-xl">Total Sales</p>
                <button className="border-blue-700 border hover:bg-blue-100 transition-all text-blue-500 font-bold py-1 px-6 rounded">
                  View
                </button>
              </div>
              <div className="border border-gray-300 rounded-md p-4 w-full bg-white flex flex-row space-x-1 justify-between items-center">
                <p className="text-xl">Total Customers</p>
                <button className="border-blue-700 border hover:bg-blue-100 transition-all text-blue-500 font-bold py-1 px-6 rounded">
                  View
                </button>
              </div>
              <div className="border border-gray-300 rounded-md p-4 w-full bg-white flex flex-row space-x-1 justify-between items-center">
                <p className="text-xl">Total Rating</p>
                <button className="border-blue-700 border hover:bg-blue-100 transition-all text-blue-500 font-bold py-1 px-6 rounded">
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
