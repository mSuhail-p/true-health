import { ReactNode } from "react";
type btnProps = {
  children: ReactNode;
  onClick?: () => void;
};
const Btn = ({ children, onClick }: btnProps) => {
  return (
    <button
      onClick={onClick}
      className="w-full min-h-11 bg-blue-400 rounded cursor-pointer flex justify-between items-center text-xs p-5 "
    >
      <div className="  flex gap-3">{children}</div>
      {">"}
    </button>
  );
};

export default Btn;
