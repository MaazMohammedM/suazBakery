import React from "react";
import image from '../Assets/owner.jpeg'


const Owners = ()=>{
    return(
        <section id="about" className="max-h-full bg-stone-900 px-2 py-10 md:py-[6rem]  md:px-16 w-full z-auto flex items-center justify-center">
            <div className="container mx-auto max-w-[90rem] flex flex-col items-center sm:flex-row gap-8 z-auto h-full">
                <div className="flex flex-col items-center sm:items-start gap-2 w-full sm:w-1/2">
                <h5 className="text-rose-300 text-lg md:text-xl font-medium font-['Playfair Display']">Meet Summu & Maazu,</h5>
                <h6 className="text-rose-300 text-xs md:text-base font-normal font-['Sen']">(Owner and Baker of SuaZ Bakery Cafe)</h6>
                <p className="text-center sm:text-left text-pink-300 text-xs md:text-base font-normal font-['Sen'] leading-[18px] md:leading-[150%]">Welcome to our bakery, where the sweetest dreams come true. We are SuaZ, the proud owner and artisan owners who pours our heart and soul into every confection we create. Using only the finest organic and natural ingredients, We bring together flavors and textures that will leave you craving more.</p>
                <p className="text-center sm:text-left text-pink-300 text-xs md:text-base font-normal font-['Sen'] leading-[18px] md:leading-[150%]">Indulge in the extraordinary. Experience the joy of SuaZ Bakery cafe. Follow us on social media and be a part of our journey. Together, let's spread the love of all things sweet and savor the delights that make life a little more delicious.</p>
                </div>
                <img src={image} className="block w-full max-w-[50%] sm:w-1/2 aspect-square object-cover" alt="owners" />
            </div>
        </section>
    )
}

export default Owners;