import { Camera } from "lucide-react";
import Link from "next/link";

const CameraScan = () => {
  return (
    <Link href={"/camera"}>
      <button
        className={
          "w-full min-h-11 bg-blue-400  text-white rounded cursor-pointer flex justify-between items-center text-xs p-4"
        }
      >
        <div className="  flex gap-3">
          <Camera className="w-4 h-4" /> Scan with Camera
        </div>
        {">"}
      </button>
    </Link>
  );
};
export default CameraScan;
