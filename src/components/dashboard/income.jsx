import { HiOutlineDotsHorizontal } from "react-icons/hi";

function Income() {
  return (
    <div className="bg-white flex flex-col rounded-[4px] hover:shadow-lg py-4 px-4 shadow-md gap-2">
      <div className="text-xs text-slate-500 flex justify-between items-center">
        <span>Total Income</span>
        <HiOutlineDotsHorizontal className="text-lg text-slate-400" />
      </div>
      <div className="flex items-center gap-2">
        <span className="text-3xl font-medium">$235,234.00</span>
        <span className="text-white bg-emerald-500 font-light text-[8px] py-[2px] px-[4px] rounded-full">
          +6.9%
        </span>
      </div>
      <div className="h-[3px] rounded-full bg-slate-200">
        <div className="h-full bg-primary rounded-full w-[65%]"/>
      </div>
      <span className="text-xs font-light text-slate-400">Yearly Goal</span>
    </div>
  );
}

export default Income;
