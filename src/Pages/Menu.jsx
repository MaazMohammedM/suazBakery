import React from "react";
import Card from "../Components/Card/Card";
import data from '../Data/MenuData.json'
import Button from "../Components/ButtonComp";

const Menu = ()=>{
    return(
        <section id="menu" className="max-h-full px-2 py-10 md:py-[6rem]  md:px-16 w-full z-auto flex items-center justify-center">
            <div className="container mx-auto max-w-[90rem] flex flex-col gap-8 z-auto h-full">
                <div className="flex flex-col items-center gap-2">
                    <h2 className="text-stone-600 text-base font-medium font-accent">Our Menu</h2>
                    <h5 className="text-stone-500 text-lg font-bold font-['Sen']">Simple. Classic. Delicious.</h5>
                    <p className="text-center text-stone-600 text-sm font-normal font-['Sen']">Our cakes are crafted with love and care, using the purest organic and natural ingredients. Each delectable creation is a testament to our commitment to quality and your well-being. Indulge in the divine flavors, knowing that every bite is a delightful journey into the world of wholesome goodness.</p>
                </div>
                <div className="grid grid-cols-1 gap-4 justify-items-center sm:grid-cols-2 lg:grid-cols-3">
                    {data.map((item,i)=>{
                       return <Card key={i} heading={item.heading} para={item.paragraph} cash={item.money} backgroundImage={item.image} />
                    })}
                </div>
                <Button children={"View Full Menu"} className={"hover:bg-stone-700 self-center"}/>
            </div>
        </section>
    )
}

export default Menu;