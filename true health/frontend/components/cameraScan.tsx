"use client";

import { Camera } from "lucide-react";
import Btn from "./btn";

const CameraScan = () => {
  return (
    // button for scan with camera
    <Btn bg="blue" textColour="grayT" onClick={() => console.log("kflsdjlfk")}>
      <Camera className="w-4 h-4" />
      Scan with Camera
    </Btn>
  );
};
export default CameraScan;
