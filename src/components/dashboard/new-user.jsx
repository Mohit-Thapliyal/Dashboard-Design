import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { ResponsiveContainer, BarChart, Bar } from "recharts";

const data = [
  {
    name: "Page A",
    amt: 40,
  },
  {
    name: "Page B",
    amt: 100,
  },
  {
    name: "Page C",
    amt: 40,
  },
  {
    name: "Page D",
    amt: 55,
  },
  {
    name: "Page E",
    amt: 86,
  },
  {
    name: "Page F",
    amt: 100,
  },
  {
    name: "Page G",
    amt: 57,
  },
  {
    name: "Page H",
    amt: 72,
  },
];

function NewUser() {
  return (
    <div className="bg-white flex flex-col rounded-[4px] hover:shadow-lg py-4 px-4 shadow-md gap-2">
      <div className="text-xs text-slate-500 flex justify-between items-center">
        <span>New User</span>
        <HiOutlineDotsHorizontal className="text-lg text-slate-400" />
      </div>
      <div className="flex items-center gap-2">
        <span className="text-3xl font-medium">95.4%</span>
        <span className="text-white bg-emerald-500 font-light text-[8px] py-[2px] px-[4px] rounded-full">
          +6.9%
        </span>
      </div>
      <div className="w-full h-20">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <Bar dataKey="amt" fill="#3A2AE5" background={{fill:"#eee", radius: [5, 5, 0, 0]}} radius={[5, 5, 0, 0]}/>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default NewUser;
