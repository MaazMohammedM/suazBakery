import clsx from "clsx";
import React from "react";



export default function Navlinks({className,classNameLink}){
    return(
        <nav className={clsx(`${className}`)}>
            <ul className={clsx(`flex justify-between items-center font-primary ${classNameLink}`)}>
                <li><a className="sm:py-4 sm:px-6 text-sm px-0 py-4 block text-stone-900 hover:text-stone-600 font-normal font-['Sen'] transition-all duration-150" href="/">Home</a></li>
                <li><a className="sm:py-4 sm:px-6 text-sm px-0 py-4 block text-stone-900 hover:text-stone-600 font-normal font-['Sen'] transition-all duration-150" href="/#menu">Menu</a></li>
                <li><a className="sm:py-4 sm:px-6 text-sm px-0 py-4 block text-stone-900  hover:text-stone-600 font-normal font-['Sen'] transition-all duration-150" href="/#about">About</a></li>
                <li><a className="sm:py-4 sm:px-6 text-sm px-0 py-4 block text-stone-900  hover:text-stone-600  font-normal font-['Sen'] transition-all duration-150" href="/#cafe">Cafe</a></li>
                <li><a className="sm:py-4 sm:px-6 text-sm font-['Sen'] px-0 py-4 block text-stone-900  hover:text-stone-600 font-normal sm:text-stone-900 sm:bg-rose-300 sm:hover:bg-rose-400 transition-all duration-150" href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}