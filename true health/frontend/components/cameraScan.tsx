import { Camera } from "lucide-react";
import Btn from "./btn";

const CameraScan = () => {
  return (
    <Btn>
      <Camera className="w-4 h-4" />
      Scan with Camera
    </Btn>
  );
};
export default CameraScan;
