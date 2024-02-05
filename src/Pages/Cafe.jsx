import React from "react";
import Button from "../Components/ButtonComp";
import data from '../Data/CafeData.json'

const Cafe = ()=>{
    return(
        <section id="cafe" className="max-h-full bg-stone-900 px-2 py-10 md:py-[6rem]  md:px-16 w-full z-auto flex items-center justify-center">
            <div className="container mx-auto max-w-[90rem] flex flex-col gap-8 z-auto h-full">
                <div className="flex flex-col items-center gap-2">
                    <h2 className="text-pink-300 text-base font-medium font-accent">The Cafe</h2>
                    <h5 className="text-rose-300 text-lg font-bold font-['Sen']">Comfortable. Nostalgic. Appetizing.</h5>
                    <p className="text-center text-red-100 text-sm font-normal font-['Sen']">"Crafted with love and care, our cafe exudes a warm, inviting ambiance. Embracing natural elements and timeless aesthetics, every detail reflects thoughtful design. The soothing atmosphere invites you to indulge in moments of tranquility, creating a delightful escape. Each corner is adorned with care, offering a haven where connections are made. Immerse yourself in charming surroundings, knowing that every visit is a journey into heartwarming ambiance and wholesome goodness."</p>
                </div>
                <div className="grid grid-cols-1 gap-4 justify-items-center sm:grid-cols-2 lg:grid-cols-3">
                    {data.map((item,i)=>{
                        return <img key={i} src={item.link} alt="cafe" className="
                        sm:max-w-full max-w-80 object-cover aspect-video" />
                    })}
                </div>
                <Button children={"book A Table"} className={"bg-rose-300 text-stone-900 hover:bg-rose-400 self-center"}/>
            </div>
        </section>
    )
}

export default Cafe;