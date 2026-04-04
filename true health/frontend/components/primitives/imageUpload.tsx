"use client";

import { ImageUp } from "lucide-react";
 
const ImageUpload = () => {
  return (
    <button
      className={
        "w-full min-h-11 bg-blue-400  text-white rounded cursor-pointer flex justify-between items-center text-xs p-4"
      }
    >
      <div className="  flex gap-3">
        <ImageUp className="w-4 h-4" /> Upload Image
      </div>
      {">"}
    </button>
  );
};

export default ImageUpload;
