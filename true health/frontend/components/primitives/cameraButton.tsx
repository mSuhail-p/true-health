// "use client";

type cameraOpenModal = {
  prop: Dispatch<SetStateAction<boolean>>;
};
import { Camera } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

const CameraScan = ({ prop }: cameraOpenModal) => {
  return (
    <button
      onClick={() => prop(true)}
      className={
        "w-full min-h-11 bg-blue-400  text-white rounded cursor-pointer flex justify-between items-center text-xs p-4"
      }
    >
      <div className="  flex gap-3">
        <Camera className="w-4 h-4" /> Scan with Camera
      </div>
      {">"}
    </button>
  );
};
export default CameraScan;
