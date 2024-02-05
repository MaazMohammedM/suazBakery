import React from "react";
import { Icon } from "@iconify/react";

const ReviewCard =({review,name})=>{
    return(
        <section className="bg-white rounded shadow flex flex-col items-center justify-center p-4 gap-4 max-w-[20rem] sm:max-w-full">
            <div className="flex gap-1"><Icon icon="twemoji:star" /><Icon icon="twemoji:star" /><Icon icon="twemoji:star" /><Icon icon="twemoji:star" /><Icon color="#FFAC33" icon="fa6-solid:star-half" /></div>
            <p className="text-center text-stone-700 text-xs font-normal font-['Sen']">{review}</p>
            <h5 className="text-center text-stone-900 text-sm font-bold font-['Sen']">{name}</h5>
        </section>
    )
}

export default ReviewCard;