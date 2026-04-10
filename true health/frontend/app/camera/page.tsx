"use client";
import { useRef, useState } from "react";
import { Dispatch, SetStateAction } from "react";
import { CircleX } from "lucide-react";

type cameraOpenModal = {
  prop: Dispatch<SetStateAction<boolean>>;
};

const Page = ({ prop }: cameraOpenModal) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [image, setImage] = useState<string | null>(null);
  const [viewImage, setViewImage] = useState<boolean>(false);

  //   open camera

  (async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
    });
    if (videoRef.current) {
      videoRef.current.srcObject = stream;
    }
  })();

  const captureImage = () => {
    const video = videoRef.current;
    if (!video) return;

    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext("2d");
    ctx?.drawImage(video, 0, 0);

    const img = canvas.toDataURL("image/png");
    setImage(img); // store image
  };

  return (
    <div className="min-w-full min-h-full absolute bg-white overflow-hidden">

    </div>
    // <div className="absolute top-2  inset-0 flex  items-center justify-center z-50 ">
    //   <div
    //     id="cameraModal"
    //     className="bg-[#001E2C] w-[48rem] h-[30rem] rounded p-4 flex items-center justify-end gap-4 shadow-lg border-gray-700 relative  "
    //   >
    //     <video
    //       ref={videoRef}
    //       className="w-[45rem] h-96 rounded bg-black object-cover"
    //       autoPlay
    //     />
    //     {/* Capture button */}
    //     <div className=" h-full flex flex-col justify-around items-center gap-10">
    //       <CircleX
    //         onClick={() => prop(false)}
    //         className="w-8 h-8 cursor-pointer text-white "
    //       />

    //       <button
    //         onClick={captureImage}
    //         className="w-14 h-14 rounded-full bg-white hover:bg-gray-400 cursor-pointer active:scale-95 transition-all"
    //       />
    //       {/* showing image on side */}
    //       {image ? (
    //         <img
    //           src={image}
    //           alt="captured"
    //           onClick={() => setViewImage(true)}
    //           className="rounded w-15 h-12 "
    //         />
    //       ) : (
    //         <div className="w-15 h-12 bg-black"></div>
    //       )}
    //     </div>

    //     {/* modal for image view */}
    //     {viewImage && (
    //       <div className="absolute w-[25rem] h-[15rem] inset-34 bg-white">
    //         {image && (
    //           <img
    //             src={image}
    //             alt="captured"
    //             className="rounded w-full h-full rounded"
    //           />
    //         )}
    //       </div>
    //     )}
    //   </div>
    // </div>
  );
};

export default Page;
