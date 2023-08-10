import { BiChevronDown } from "react-icons/bi";
import { ResponsiveContainer, AreaChart, Area } from "recharts";

const data = [
  { amt: 35 },
  { amt: 30 },
  { amt: 32 },
  { amt: 27 },
  { amt: 40 },
  { amt: 60 },
  { amt: 18 },
  { amt: 56 },
  { amt: 72 },
  { amt: 88 },
  { amt: 72 },
  { amt: 63 },
  { amt: 69 },
  { amt: 62 },
  { amt: 50 },
  { amt: 68 },
  { amt: 50 },
  { amt: 50 },
  { amt: 50 },
  { amt: 85 },
  { amt: 76 },
  { amt: 82 },
  { amt: 60 },
  { amt: 56 },
  { amt: 49 },
  { amt: 67 },
];

function Balance() {
  return (
    <div className="w-1/2 bg-white flex flex-col rounded-[4px] shadow-md hover:shadow-lg justify-between">
      <div className="flex flex-col gap-3">
        <div className="flex justify-between border-b px-4 py-4">
          <h2 className="font-semibold text-lg">Balance</h2>
          <div className="flex items-center px-2 py-1 border rounded-[4px] border-slate-200">
            <span className="text-[10px] text-slate-500">Monthly</span>
            <BiChevronDown className="text-slate-500" />
          </div>
        </div>
        <div className="flex gap-6 px-4">
          <div className="w-1/2 px-3 py-2 border rounded-[3px]">
            <p className="text-[10px] text-slate-500">Earnings</p>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-medium">43.42%</span>
              <span className="text-white bg-emerald-500 font-light text-[8px] py-[2px] px-[4px] rounded-full">
                +3.7%
              </span>
            </div>
          </div>
          <div className="w-1/2 px-3 py-2 border rounded-[3px]">
            <p className="text-[10px] text-slate-500">Sales Value</p>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-medium">$92,574</span>
              <span className="text-white bg-emerald-500 font-light text-[8px] py-[2px] px-[4px] rounded-full">
                +12.7%
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-36">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <Area dataKey={"amt"} stroke="#3A2AE5" fill="#d3cffc" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Balance;
