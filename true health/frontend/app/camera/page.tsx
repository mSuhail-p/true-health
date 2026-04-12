"use client";
import { useRef, useState, useEffect } from "react";
import { CircleX } from "lucide-react";

const Page = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [image, setImage] = useState<string | null>(null);

  //   open camera
  useEffect(() => {
    (async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Camera accesss denied:", err);
      }
    })();
  }, []);

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
    <div className="w-full min-h-full  absolute bg-gray-500 overflow-hidden">
      <div className=" w-full h-screen flex items-center justify-center rounded-2xl bg-black relative">
        <video ref={videoRef} className="w-full h-full rounded" autoPlay />
        <button
          onClick={() => captureImage()}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 lg:bottom-auto lg:top-1/2 lg:right-10 lg:left-auto lg:-translate-y-1/2 lg:translate-x-0 w-16 h-16 bg-white rounded-full border-4 border-gray-300 cursor-pointer active:scale-95 transition-all"
        />
      </div>
    </div>
  );
};

export default Page;
