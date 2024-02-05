import React from "react";
import Header from "./Components/Headers/Header";
import Hero from "./Pages/Hero";
import Menu from "./Pages/Menu";
import Cafe from "./Pages/Cafe";
import Review from "./Pages/Review";
import Owners from "./Pages/Owners";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer/Footer";




const App = () => {

    return (
        <>
            <Header />
            <main className="w-full bg-[#FFFEFE]">
                <Hero />
                <Menu />
                <Cafe />
                <Review />
                <Owners />
                <Contact />
            </main>
            <Footer />
        </>
        
    )
}

export default App;