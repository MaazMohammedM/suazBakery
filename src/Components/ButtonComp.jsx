import React from "react";

const Button =({children,className,style,link})=>{
    return(
        <button className={` bg-stone-800 rounded-lg md:text-base transition-all  leading-7 hover:cursor-pointer text-neutral-50 text-xs font-normal font-['Sen'] ${className}`} 
        style={{
            padding: '0.5em 1.5em', // Adjust padding ratio as needed
            fontSize: style?.fontSize || '1rem',
            ...style,
          }}>
            <a className="outline-none text-xs md:text-base text-inherit" href={link}>{children}</a>
        </button>
    )
}

export default Button;