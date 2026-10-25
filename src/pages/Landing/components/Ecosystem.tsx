import {
  UserDollarIcon,
  Ticket02Icon,
  BarChartHorizontalIcon,
  CreditCardPosIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Brand from "../Brand";
import { useEffect } from "react";
import "./Ecosystem.css";

const classCard =
  "px-3 py-2 border-white/40 border-2 rounded-xl h-14.5 shadow-sm min-w-18 w-fit flex flex-col items-center justify-center text-white gap-1 text-xs mx-auto";

type EcosystemProps = {
  triggerAnimation?: boolean;
};

const topStart = "top-[calc(36vh-100px)]";
const topEnd = "top-[calc(22vh-100px)]";

function Ecosystem({ triggerAnimation = false }: EcosystemProps) {
  const topPosition = triggerAnimation ? topEnd : topStart;

  useEffect(() => {}, [triggerAnimation]);

  return (
    <div
      id="ecosystem"
      className={`absolute ${topPosition} left-1/2 transform -translate-x-1/2 z-10 max-h-[500px] gap-y-4 gap-x-8 grid grid-cols-3 grid-rows-3 items-center`}
    >
      <span className={`${classCard} col-start-2 row-start-1`}>
        <HugeiconsIcon icon={UserDollarIcon} />
        <p>Vendors</p>
      </span>
      <span className={`${classCard} col-start-1 row-start-2`}>
        <HugeiconsIcon icon={Ticket02Icon} />
        <p>Ticketing</p>
      </span>

      <div className="col-start-2 row-start-2">
        <div
          id="logo"
          className="w-24 shadow-inset shadow-lg/40 shadow-teal-500/20 rounded-full p-3 bg-white flex flex-row items-center justify-center z-10"
        >
          <Brand />
        </div>
      </div>

      <span className={`${classCard} col-start-3 row-start-2`}>
        <HugeiconsIcon icon={CreditCardPosIcon} />
        <p>POS</p>
      </span>
      <span className={`${classCard} col-start-2 row-start-3`}>
        <HugeiconsIcon icon={BarChartHorizontalIcon} />
        <p>Reports</p>
      </span>

      <span></span>
      <span></span>
    </div>
  );
}

export default Ecosystem;
