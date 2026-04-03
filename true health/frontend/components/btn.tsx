import { ReactNode } from "react";

type btnProps = {
  children: ReactNode;
  onClick: () => void;
  bg: "blue" | "gray";
  textColour: "white" | "grayT";
};
const colours = {
  blue: "bg-blue-400",
  gray: "bg-[#283044]",
  white: "text-white",
  grayT: "text-[#283044]",
};

const Btn = ({ bg, textColour, onClick, children }: btnProps) => {
  return (
    <button
      onClick={onClick}
      className={`w-full min-h-11 ${colours[bg]}  ${colours[textColour]} rounded cursor-pointer flex justify-between items-center text-xs p-4 `}
    >
      <div className="  flex gap-3">{children}</div>
      {">"}
    </button>
  );
};

export default Btn;
