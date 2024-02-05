import React from "react";
import Logo from "../Logo/Logo";
import Navlinks from "../Navlinks/Navlinks";
import { Icon } from "@iconify/react";

const Footer =()=>{
    return(
        <footer className="max-h-full bg-pink-50 px-2 py-10 md:py-[3rem]  md:px-16 w-full z-auto flex items-center justify-center">
            <div className="container mx-auto max-w-[90rem]  gap-8 z-auto h-full flex flex-col justify-between items-center md:flex-row">
                <Logo/>
                <Navlinks classNameLink={"flex flex-col sm:flex-row"}/>
                <div className="flex gap-2">
                <Icon icon="skill-icons:instagram" />
                <Icon icon="skill-icons:twitter" />
                <Icon icon="logos:youtube-icon" />
                </div>
            </div>
        </footer>
    )
}

export default Footer;