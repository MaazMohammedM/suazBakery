import React from "react";

const Card =({backgroundImage,heading,para,cash})=>{

    const truncateText =(text,limit)=>{
        return text.length > limit ? `${text.slice(0,limit)}`: text;
    }

    const TruncateHeading = truncateText(heading,50);
    const TruncatePara = truncateText(para,132);

    const cardBg = {
        backgroundImage: `url(${backgroundImage})`,
      };



    return(
        <section className="max-w-full p-4 flex gap-2 justify-between min-w-[15rem] bg-neutral-50 rounded-lg hover:scale-105 transition-all">
            <div className={`w-1/4 bg-center bg-no-repeat bg-cover rounded-lg`} style={cardBg}></div>
            <div className="w-3/4">
            <div className="flex justify-between">
            <h5 className="text-stone-900 text-sm font-bold font-['Sen']">{TruncateHeading}</h5>
            <p className="text-lime-700 text-sm font-bold font-['Sen']">{cash}</p>
            </div>
            <p className="text-stone-900 text-xs font-normal font-['Sen'] leading-[15px]">{TruncatePara}</p>
            </div>
        </section>
    )
}

export default Card;