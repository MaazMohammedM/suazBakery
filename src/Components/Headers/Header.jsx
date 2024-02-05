import React, {useState} from "react";
import Logo from "../Logo/Logo";
import Navlinks from "../Navlinks/Navlinks";
import { Icon } from "@iconify/react";

const Header =()=>{
    const [open,setOpen] = useState(false);
return(
    <header className="bg-[#FFFEFE] w-full px-2  md:px-16 text-[#241B1D] z-[10] sticky  top-0 flex items-center justify-center
       py-2 sm:py-0 shadow
       ">
        <div className="container max-w-[90rem] flex justify-between relative  items-center">
        <Logo/>
        <Icon className="block sm:hidden transition-all duration-500" icon={open?"akar-icons:cross": "game-icons:hamburger-menu"} color="black" width="24" height="24" onClick={()=>{setOpen(!open)}}/>
        <Navlinks className={`sm:block absolute sm:static top-10 right-[-0.5rem] left-[-0.5rem] ${open ? "flex":"hidden"}`} classNameLink={`${open ? "flex-col sm:flex-row bg-neutral-100/90 rounded-b-xl sm:bg-transparent w-full":""}`}/>
        </div>
    </header>
)
}
export default Header;