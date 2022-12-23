import React,{useRef,useEffect} from "react";
import Image from "next/image";


type Props = {


};

const UpdateCart = (props: Props) => {

// let photoRef = useRef(null)
//     let videoRef = useRef<HTMLVideoElement>(null);
//     const getUserCamera = async () => {
//         const stream = await navigator.mediaDevices.getUserMedia({
//             video: true,
//             audio: false
//         })
//         videoRef.current.srcObject = stream
//         videoRef.current.play()
//     }
    

    // useEffect(() => {
    //   getUserCamera()
    

    // }, [videoRef])

    // const takePicture = () => {

    //     let width = videoRef.current.videoWidth
    //     let height = videoRef.current.videoHeight
    //     const context = photoRef.current.getContext("2d")
    //     photoRef.current.width = width;
    //     photoRef.current.height = height;

    //     context.drawImage(videoRef.current, 0, 0, width, height)
    //     console.log(context)
    // }



    
  return (
    <>

     <div className="flex flex-col justify-center items-center w-[70vw]">

    <div className="rounded-lg shadow-xl bg-gray-50 w-4/5 h-2/3">
        <div className="m-4">
            <label className="inline-block text-gray-500 text-3xl font-bold">Upload
                an image of your cart</label>
            <div className="flex items-center justify-center w-full h-96 ">
                <label className="flex flex-col w-full h-5/6 border-4 border-dashed mb-4 hover:bg-gray-100 hover:border-gray-300">
                    <div className="flex flex-col items-center justify-center pt-7 h-full">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            className="w-28 h-28 text-gray-400 group-hover:text-gray-600" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                clip-rule="evenodd" />
                        </svg>
                        <p className="pt-1 text-xl tracking-wider text-gray-400 group-hover:text-gray-600">
                            Select a photo</p>
                    </div>
                    <input type="file" className="opacity-0" />
                </label>
            </div>
        </div>
        <div className="flex p-2 relative -top-10  space-x-4">
            <button className="px-4 py-2 text-white bg-red-500 rounded shadow-xl">Cancel</button>
            <button className="px-4 py-2 text-white bg-green-500 rounded shadow-xl">Upload</button>
        </div>
    </div>

        {/* <h2 classNameName="text-4xl">Hello world</h2>  */}
   {/* <video classNameName="" ref={videoRef}></video> */}
   {/* <button classNameName="uppercase bg-green-500 px-5 py-3 text-2xl font-semibold font-public-sans" onClick={takePicture}>take picture</button> */}
    {/* <canvas classNameName="" ref={photoRef}></canvas> */}
    </div>
    
    
    </>
  );
};

export default UpdateCart;
