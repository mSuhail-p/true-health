import { ClipboardPlus } from "lucide-react";
import { Barcode } from "lucide-react";

const ManualInput = () => {
  return (
    <div className="flex flex-col  gap-2">
      {/* INPUT BOX FOR MEDICINE NAME */}
      <div className="w-full ">
        <label className="text-xs">MEDICINE NAME</label>
        <div className=" min-h-10 flex gap-2 bg-[#3F465C] rounded items-center pl-4 ">
          <ClipboardPlus className="w-4 h-4 text-black " />
          <input
            type="text"
            className=" w-full outline-0 text-sm placeholder:text-gray-500"
            placeholder="eg. Paracetamole 500mg"
          />
        </div>
      </div>

      {/* INPUT BOX FOR BATCH NUMBER */}
      <div className="w-full ">
        <label className="text-xs">BATCH NUMBER</label>
        <div className=" min-h-10 flex gap-2 bg-[#3F465C] rounded items-center pl-4 ">
          <Barcode className="w-4 h-4 text-black " />
          <input
            type="text"
            className=" w-full outline-0 text-sm placeholder:text-gray-500"
            placeholder="eg. C50284"
          />
        </div>
      </div>
    </div>
  );
};
export default ManualInput;
