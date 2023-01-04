import React,{ Fragment, useState} from 'react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Listbox, Transition } from '@headlessui/react'


const pincode = [
  { id: 1, pinCode: 110080, unavailable: false },
  { id: 2, pinCode: 110081, unavailable: false },
  { id: 3, pinCode: 110082, unavailable: false },
  { id: 4, pinCode: 110083, unavailable: true },
  { id: 5, pinCode: 110084, unavailable: false },
  { id: 5, pinCode: 110085, unavailable: false },
]
const Days = [
  { id: 1, day: "Monday", unavailable: false },
  { id: 2, day: "Tuesday", unavailable: false },
  { id: 3, day: "Wednesday", unavailable: false },
  { id: 4, day: "Thursday", unavailable: true },
  { id: 5, day: "Friday", unavailable: false },
  { id: 5, day: "Saturday", unavailable: false },
  { id: 6, day: "Sunday", unavailable: false },
]






const LocateCustomer = () => {
  const [selected, setSelected] = useState(pincode[0])
  const [todayDay, setTodayDay] = useState(Days[0])
  const [probability, setprobability] = useState("0")

async function sendData() {
  let headersList = {
    "Accept": "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    "Content-Type": "application/json"
   }
   let dateN = new Date();
   
   let bodyContent = JSON.stringify({"rings" : [selected.pinCode, parseInt(dateN.getHours() +""+ dateN.getMinutes()),todayDay.id]});
   
   let response = await fetch("https://techthe.anupammaurya2.repl.co/result", { 
     method: "POST",
     body: bodyContent,
     headers: headersList
   });
   
   let data = await response.text();
   console.log(data);
   setprobability(data)
   
}

  return (
    <>

    <div className="flex flex-col w-[70vw] ">
    <div className="grid grid-cols-5 px-10 gap-5 py-10">

    <div className="  col-span-2 flex flex-col gap-6">

    <h1 className='text-3xl font-semibold'>Enter your details</h1>

      <div>
        <h2 className='text-xl font-semibold pb-3'>Enter Pincode</h2>
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1 z-40">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{selected.pinCode}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {pincode.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {person.pinCode}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
      </div>


      <div>
        <h2 className='text-xl font-semibold pb-3'>Enter Day</h2>
      <Listbox value={todayDay} onChange={setTodayDay}>
        <div className="relative mt-1 z-30">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{todayDay.day}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1  w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {Days.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          todayDay ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {person.day}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
      </div>

      <div className='border-b-4 border-gray-300 pb-10'>
      <button className='text-xl font-bold bg-green-500 px-4 py-2 rounded-2xl' onClick={sendData}>Submit Data</button>
      </div>
      <div className=''>
      <h2 className='text-2xl font-semibold font-public-sans'>The <span className='text-green-600 text-3xl'>probability</span> to get sales at this point of time at this location is {probability}%</h2>

      </div>

      

      
    </div>

    <div className="col-span-3">

    <div ><iframe width="100%" height="500" src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=Ambica%20VIhar,%20New%20Delhi+(Ambika%20Vihar)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" style={{border:0}}></iframe></div>

    </div>

      
    </div>
      

    </div>
    
    
    </>
  );
};

export default LocateCustomer;
