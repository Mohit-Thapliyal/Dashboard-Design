/* eslint-disable react/prop-types */
import { AiOutlineDashboard, AiOutlineAppstore, AiOutlineQuestionCircle, AiOutlineSetting } from "react-icons/ai";
import { BiChevronDown, BiUser, BiLogOut } from "react-icons/bi";
import { BsGlobe, BsFolder2Open } from "react-icons/bs"
import { FaBoxesStacked } from "react-icons/fa6";
import { HiOutlineDocumentDuplicate, HiOutlineDocumentText, HiOutlineInbox } from "react-icons/hi"
import { HiListBullet } from "react-icons/hi2"
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="flex w-full flex-col bg-white border-r border-slate-200 h-full">
      {/* Logo */}
      <div className="flex px-4 py-4 items-center gap-3 border-b border-slate-200">
        <span className="p-1 rounded-sm bg-primary text-white">
          <FaBoxesStacked className="text-lg" />
        </span>
        <span className="font-medium">Artemis</span>
      </div>
      <div className="flex flex-col gap-5 px-3 bg-white pt-4 text-slate-500 overflow-y-scroll">
        {/* Primary */}
        <div>
          <h2 className="uppercase text-[10px] text-slate-400">Main</h2>
          <ul className="mt-2 flex flex-col gap-[1px]">
            <SidebarLink to={"dashboard"} icon={<AiOutlineDashboard className="text-lg" />} textSize={"text-xs"} text={"Dashboard"} dropdown/>
            <SidebarLink to={"discover"} icon={<BsGlobe className=" text-lg" />} textSize={"text-xs"} text={"Discover"} dropdown/>
            <SidebarLink to={"users"} icon={<BiUser className=" text-lg" />} textSize={"text-xs"} text={"Users"} dropdown/>
            <SidebarLink to={"documents"} icon={<HiOutlineDocumentDuplicate className=" text-lg" />} textSize={"text-xs"} text={"Documents"} dropdown/>
            <SidebarLink to={"applications"} icon={<AiOutlineAppstore className=" text-lg" />} textSize={"text-xs"} text={"Applications"} dropdown/>
            <SidebarLink to={"pages"} icon={<HiOutlineDocumentText className=" text-lg" />} textSize={"text-xs"} text={"Pages"} dropdown/>
          </ul>
        </div>
        {/* Seconday */}
        <div>
        <h2 className="uppercase text-[10px] text-slate-400">Secondary</h2>
          <ul className="mt-2 flex flex-col gap-[1px]">
          <SidebarLink to={"support-center"} icon={<AiOutlineQuestionCircle className="text-lg" />} textSize={"text-xs"} text={"Support Center"}/>
          <SidebarLink to={"inbox"} icon={<HiOutlineInbox className="text-lg" />} textSize={"text-xs"} text={"Inbox"}/>
          <SidebarLink to={"file-manager"} icon={<BsFolder2Open className="text-lg" />} textSize={"text-xs"} text={"File Manage"}/>
          <SidebarLink to={"data-list"} icon={<HiListBullet className="text-lg" />} textSize={"text-xs"} text={"Data List"}/>
          </ul>
        </div>
        {/* Extra */}
        <ul className="flex flex-col gap-[1px]">
          <SidebarLink to={"settings"} icon={<AiOutlineSetting className="text-lg" />} textSize={"text-[13px]"} text={"Settings"}/>
          <SidebarLink to={"logout"} icon={<BiLogOut className="text-lg" />} textSize={"text-[13px]"} text={"Log Out"}/>
        </ul>
      </div>
    </aside>
  );
}

function SidebarLink({icon, text, textSize, to, dropdown}) {
  return (
    <NavLink to={to} className={({isActive})=>`flex justify-between ${textSize} hover:shadow-md duration-150 py-2 px-2 rounded-[3px] items-center ${isActive?"text-white shadow-md bg-primary":"hover:bg-violet-100"}`}>
      <span className="flex items-center gap-2">
        <span>
          {icon}
        </span>
        {text}
      </span>
      {dropdown&&<span>
        <BiChevronDown className="text-lg" />
      </span>}
    </NavLink>
  );
}

export default Sidebar;
