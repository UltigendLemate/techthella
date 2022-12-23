import React,{useRef,useEffect} from "react";
import Image from "next/image";


type Props = {


};

const UpdateCart = (props: Props) => {

let photoRef = useRef(null)
    let videoRef = useRef<HTMLVideoElement>(null);
    const getUserCamera = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: false
        })
        videoRef.current.srcObject = stream
        videoRef.current.play()
    }
    

    // useEffect(() => {
    //   getUserCamera()
    

    // }, [videoRef])

    const takePicture = () => {

        let width = videoRef.current.videoWidth
        let height = videoRef.current.videoHeight
        const context = photoRef.current.getContext("2d")
        photoRef.current.width = width;
        photoRef.current.height = height;

        context.drawImage(videoRef.current, 0, 0, width, height)
        console.log(context)
    }



    
  return (
    <>

    <div className="flex flex-col justify-center items-center w-[70vw]">
        <h2 className="text-4xl">Hello world</h2>
   {/* <video className="" ref={videoRef}></video> */}
   {/* <button className="uppercase bg-green-500 px-5 py-3 text-2xl font-semibold font-public-sans" onClick={takePicture}>take picture</button> */}
    {/* <canvas className="" ref={photoRef}></canvas> */}
    </div>
    
    
    </>
  );
};

export default UpdateCart;
