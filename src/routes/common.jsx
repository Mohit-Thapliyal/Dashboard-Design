import { useParams } from "react-router-dom";

function Common() {
  const params = useParams();
  return (
    <div className="flex px-10 xl:px-36 py-6 gap-8">
      <div className="bg-white cursor-pointer flex items-center justify-center w-full h-20 rounded-[3px] shadow-md hover:shadow-lg">
        <p className="text-slate-500">
          This is the{" "}
          <span className="text-primary font-medium text-base capitalize">{params.id.split("-").join(" ")}</span>{" "}
          Page
        </p>
      </div>
    </div>
  );
}

export default Common;
