"use client";

import { CircleCheckBig } from "lucide-react";
0;

const SubmitButton = () => {
  return (
    <div>
      <button className="w-full bg-blue-400 min-h-10 rounded hover:bg-blue-600 text-xs flex gap-1 justify-center items-center">
        Check Medicine
        <span>
          <CircleCheckBig className="w-3 h-3" />
        </span>
      </button>
    </div>
  );
};

export default SubmitButton;
