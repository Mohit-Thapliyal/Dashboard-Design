import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

const Root = () => {
  return (
    <>
      <div className="w-[18%] flex fixed h-full">
        <Sidebar />
      </div>
      <div className="flex flex-col w-[82%] float-right">
        <div className="fixed w-[82%] z-50">
          <Navbar />
        </div>
        <div className="mt-14">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Root;
