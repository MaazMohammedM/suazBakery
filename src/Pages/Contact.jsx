import React, { useState,useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Contact =()=>{

    const initalValues = {
        userName:"",
        email:"",
        message:""
    }

    const [formValues,setFormValues] = useState(initalValues);
    const [formErrors,setFormErrors] = useState({});
    const [isSubmit,setIsSubmit] = useState(false);

    const handleChange =(e)=>{
            const {name, value}= e.target;
            setFormValues({...formValues,[name]:value});
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);

        const res = await fetch('https://suazbakery-default-rtdb.firebaseio.com/data.json',{
            method:"POST",
            headers:{
                "content-Type":"Application/json"
            },
            body: JSON.stringify({
                userName:formValues.userName,
        email:formValues.email,
        message:formValues.message
            })
        });

        if(res.ok){
            console.log("Data Sent Successfully");
            toast.success("Data Sent Successfully!");
            setFormValues(initalValues);
        } else{
            console.error("Error in sending data",res.statusText);
            toast.error("Error in sending data")
        }
    }

    useEffect(()=>{
        console.log(formErrors)
        if(Object.keys(formErrors).length === 0 && isSubmit){
            console.log(formValues);
        }
    },[formErrors,formValues,isSubmit]);

    const validate =(values)=>{
        const errors = {};
        

    if(!values.userName){
        errors.userName ="User name is Requried"
    } 
    
    if(!values.email){
        errors.email ="User email is Requried"
    } 
    if(!values.message){
        errors.message ="User input is Requried"
    }
    return errors;
    }

    return(
        
        <section id="contact" className="max-h-full px-2 py-10 md:py-[6rem]  md:px-16 w-full z-auto flex items-center justify-center">
            {isSubmit && <ToastContainer position="top-center" autoClose={1000} />}
            <div className="container mx-auto max-w-[90rem] flex flex-col gap-8 z-auto h-full">
           <div className="flex flex-col items-center gap-2">
                    <h2 className="text-stone-600 text-base font-medium font-accent">Contact</h2>
                    <h5 className="text-stone-500 text-lg font-bold font-['Sen']">Get In Touch.</h5>
                    <p className="text-center text-stone-600 text-sm font-normal font-['Sen']">Leave Us A Message</p>
                </div>
           <div className="flex flex-col sm:flex-row w-full gap-4">
                <form onSubmit={handleSubmit} method="post" className="flex flex-col w-full md:w-1/2 gap-4">
                    
                    <div className="flex flex-col">
                        <label className="font-medium font-base text-stone-900 font-accent" htmlFor="userName">Name</label>
                        <input type="text" id="userName" name="userName" className="bg-neutral-100 text-sm p-2 font-['Sen']" value={formValues.userName} onChange={handleChange}/>
                        <p className="text-red-500 text-xs">{formErrors.userName}</p>
                    </div>
                    <div className="flex flex-col">
                        <label className="font-medium font-base text-stone-900 font-accent" htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" className="bg-neutral-100 text-sm p-2 font-['Sen']"  value={formValues.email} onChange={handleChange}/>
                        <p className="text-red-500 text-xs">{formErrors.email}</p>
                    </div>
                    <div className="flex flex-col">
                        <label className="font-medium font-base text-stone-900 font-accent" htmlFor="message">Message</label>
                        <textarea name="message" id="message" cols="10" rows="5" maxLength={100} className="p-2 font-['Sen'] text-sm bg-neutral-100 max-h-40"  value={formValues.message} onChange={handleChange}></textarea>
                        <p className="text-red-500 text-xs">{formErrors.message}</p>
                    </div>
                    <button className="bg-stone-900 text-[#FFFEFE] py-[0.5em] px-[1.5em] self-center rounded-lg text-sm" type="submit">Send Message</button>
                </form>
           <div className="w-full md:w-1/2  rounded-lg">
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.20263663899!2d80.21119867469521!3d13.08634038723967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526423dcc44ff7%3A0x15da7b873985bbb0!2sAnna%20Tower!5e0!3m2!1sen!2sin!4v1706546465817!5m2!1sen!2sin" className="w-full overflow-hidden" height="450"  allowFullScreen="" title="map" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
           </div>
           </div>
            </div>
        </section>
    )
}

export default Contact;