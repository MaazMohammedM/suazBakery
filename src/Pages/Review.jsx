import React from "react";
import ReviewCard from "../Components/Card/ReviewCard";
import data from '../Data/ReviewData.json'

const Review =()=>{
    return(
        <section className="mx-auto w-full px-2 py-10 md:py-[6rem]  md:px-16  z-auto">
            <div className="container mx-auto flex items-center flex-col justify-center max-w-[90rem] z-auto h-full ">
            <h5 className="text-stone-500 text-lg font-bold font-['Sen']">Some Amazing reviews</h5>
               <div className="grid grid-cols-1 gap-4 justify-items-center sm:grid-cols-2 lg:grid-cols-3">
               {
                    data.map((item,i)=>{
                        return <ReviewCard key={i} name={item.username} review={item.comment}/>
                    })
                }
               </div>
            </div>
        </section>
    )
}

export default Review;