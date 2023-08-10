import {FiSearch} from "react-icons/fi"
import { AiOutlineSetting } from "react-icons/ai";
import { BiMessageAlt, BiBell, BiChevronDown } from "react-icons/bi";


function Navbar() {
  return (
    <nav className="bg-white flex items-center text-slate-400 border-b border-slate-200 px-4 py-3 gap-5">
      <div className="flex flex-grow items-center gap-4 py-1">
          <FiSearch className="text-lg"/>
          <input className="w-full text-black text-xs outline-none py-1" type="text" placeholder="Type to search..." />
      </div>
      <div className="flex items-center gap-4">
        <div className="flex text-lg items-center gap-4">
          <AiOutlineSetting/>
          <BiMessageAlt/>
          <BiBell/>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex flex-col items-center text-xs">
            <span className="text-black">Mohit Thapliyal</span>
            <span >Developer</span>
          </div>
          <div className="flex items-center gap-1">
            <img className="w-9 h-9 rounded-full border border-slate-200" src="https://lh3.googleusercontent.com/ogw/AGvuzYZEdkGAH6NgqeFdanhkt368SxJQoB41Di0nyOSfHRQ=s64-c-mo" alt="profile pic" />
            <BiChevronDown/>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar