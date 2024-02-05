import React from "react";
import heroBg from '../Assets/heroImage.jpeg'  
import Button from "../Components/ButtonComp";


const Hero =()=>{
    return(
        <section className="max-h-full bg-pink-50 md:h-[90svh] hero px-2 py-4 md:py-0  md:px-16 w-full z-auto flex items-center justify-center">
            <div className="container flex flex-col gap-6 md:gap-12  mx-auto max-w-[90rem]  items-center justify-between z-auto h-full
             md:flex-row ">
                <div className="flex flex-col md:items-start gap-6 md:w-1/2 md:justify-start">
                    <h1 className="text-stone-900 text-2xl text-center font-bold font-['Sen']
                    md:text-left md:text-[2rem] md:leading-10
                    ">Welcome to Suaz Bakery Cafe</h1>
                    <p className="text-stone-600 text-center text-lg italic font-medium font-['Playfair Display'] leading-[27px]
                    md:text-left md:text-[1.5rem] md:leading-[150%]">Bite into bliss – Your journey begins at our bakery cafe, where every treat is a melody of flavors, crafted just for you.</p>
                    <div className="btnGrp flex flex-col md:flex-row gap-2 items-center">
                        <Button children={'Order Bakery Products'} link={"www.zomato.com"} className={'hover:bg-stone-700'}/>
                        <a href="www.google.com" className="block border-stone-900 border px-[1.5rem] py-3 text-xs rounded-lg hover:border-stone-400 hover:text-stone-400  transition-all">Book A Table</a>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <img src={heroBg} alt="heroImage" className="w-full max-h-96 object-cover" />
                </div>
            </div>
        </section>
    )
}

export default Hero;