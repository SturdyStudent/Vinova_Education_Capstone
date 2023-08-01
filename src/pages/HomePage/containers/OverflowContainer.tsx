import { ReactNode } from "react";

interface IOverflowContainer {
  children: ReactNode;
}

function OverflowContainer({ children }: IOverflowContainer) {
  return (
    <div className="overflow-hidden">
      <div className="flex gap-3 overflow-x-auto overflow-y-hidden keep-scrolling items-start">
        {children}
      </div>
    </div>
  );
}

export default OverflowContainer;
