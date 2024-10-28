"use client";
import { useEffect } from "react";
import Navbar from "./components/navbar/page";
import Home from "./pages/home/page";
import AboutUs from "./pages/about_us/page";
import Programs from "./pages/programs/page";
import Contact from "./pages/contact/page";
import Footer from "./pages/footer/page";
export default function Main(){
 useEffect(()=>{
  alert("This website is making for practice. This is completely not relatable to any organization")
 })
  return(
    <div className="bg-black min-h-screen bg-opacity-[72%]">
        <Navbar/>
        <div id="home">
        <Home/>
        </div>
        <div id="aboutUs">
        <AboutUs/>
        </div>
        <div id="programs" className="scroll-mt-24">
        <Programs/>
        </div>
        <div id="contact">
        <Contact/>
        </div>
        <div id="footer">        
        <Footer/>
        </div>

    </div>
  );
}