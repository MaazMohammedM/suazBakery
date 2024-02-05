import React from "react";

const Career = ()=>{
    return(
        <section id="career" className="max-h-full h-[100svh] px-2 py-10 md:py-[6rem]  md:px-16 w-full z-auto flex items-center justify-center">
            <div className="container mx-auto max-w-[90rem] flex flex-col gap-8 z-auto h-full">
                   <div>
                   <h2 className="text-center text-stone-600 text-base font-medium font-accent">Careers</h2>
                    <h5 className="text-center text-stone-500 text-lg font-bold font-['Sen']">Kick Start Your Career With Us.</h5>
                   </div>
                    <p className="text-center text-stone-600 text-sm font-normal font-['Sen']">Currently We Have No Job Openings, Do Check Back Later.</p>
            </div>
        </section>
    )
}

export default Career;