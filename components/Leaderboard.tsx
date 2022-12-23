import React from "react";
import Image from "next/image";


type Props = {


};

const Leaderboard = (props: Props) => {
  return (
    <>

    <div className="flex flex-col w-[70vw]">
    <div className="flex justify-center items-center py-10 text-5xl font-bold">Leaderboard</div>
  <div className="overflow-x-auto  lg:-mx-8">
    <div className="py-2 inline-block w-full sm:px-6 lg:px-8">
      <div className="overflow-hidden grid justify-center items-center text-center">
        <table className="w-[60vw] px-10">
          <thead className="border-b">
            <tr>
              <th scope="col" className="text-2xl text-green-500 font-bold px-6 py-4">
                Rank
              </th>
              <th scope="col" className="text-2xl text-green-500 font-bold px-6 py-4">
                Full Name
              </th>
              <th scope="col" className="text-2xl text-green-500 font-bold px-6 py-4">
                Rating
              </th>
            </tr>
          </thead>
          <tbody className="text-xl font-semibold">
            <tr className="border-b ">
              <td className="px-5 m-4 font-bold rounded-full py-4 whitespace-nowrap text-2xl text-purple-600 bg-yellow-500 inline-block ">1</td>
              <td className=" text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Harish 
              </td>

              <td className=" text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                4.9/5
              </td>
            </tr>
            <tr className="bg-white border-b">
              <td className="px-5 m-4 font-bold rounded-full py-4 whitespace-nowrap text-2xl text-purple-600 bg-yellow-500 inline-block ">2</td>
              <td className=" text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Om Bihari
              </td>

              <td className=" text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                4.7/5
              </td>
            </tr>
            <tr className="bg-white border-b">
              <td className="px-5 m-4 font-bold rounded-full py-4 whitespace-nowrap text-2xl text-purple-600 bg-yellow-500 inline-block ">3</td>
              <td className=" text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Kamlesh Rawat
              </td>

              <td className=" text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                4.6/5
              </td>

              <hr />
            </tr>

            
          </tbody>
        </table>
      </div>
      <div className="overflow-hidden border-t-4 border-black grid justify-center items-center text-center">
        <table className="w-[60vw] px-10">
      
          <tbody className="text-xl font-semibold">
            <tr className="border-b ">
              <td className="px-5 m-4 font-bold rounded-full py-4 whitespace-nowrap text-2xl text-purple-600 bg-yellow-500 inline-block ">23</td>
              <td className=" text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Ravikant Ganjha
              </td>

              <td className=" text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                3.5/5
              </td>
            </tr>



            
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
    
    
    </>
  );
};

export default Leaderboard;
