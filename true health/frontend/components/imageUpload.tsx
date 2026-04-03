"use client";

import { ImageUp } from "lucide-react";
import Btn from "./btn";
const ImageUpload = () => {
  return (
    <Btn bg="gray" textColour="white" onClick={() => console.log("image upload")}>
      <ImageUp className="w-4 h-4 " />
      Upload Image
    </Btn>
  );
};

export default ImageUpload;
