import React from "react";
import logo from '../Logo/Group 6.svg'

export default function Logo() {
    return (
        <div className="w-12 h-12 flex items-center justify-center">
           <img src={logo} alt="logo" className="w-full h-full" />
        </div>
    )
}