'use client';
import { useState } from "react";
import Image from "next/image";
import logo from "@/app/images/logo.jpg"
import { headers } from "next/headers";
export default function Navbar() {
    const [menuShow,setMenuShow]=useState(false);
    return (
        <header>
        <Image src={logo}
        alt="Logo Of Harmony Valley School"
    />
        <nav className={menuShow?"smallMenu":"bigMenu"}>
            <ul>
                <li>
                <a href="#home">
                Home
                </a></li>
                <li><a href="#aboutUs">About Us
                </a></li>
                <li><a href="#programs">
                    Programs</a></li>
                <li><a href="#contact">
                    Contact</a></li>
                <li><a href="#footer">
                    Our Social Media</a></li>
            </ul>
        </nav>
        <button onClick={()=>setMenuShow(()=>!menuShow)}
        className="menuButton">
    <i className="fa-solid fa-bars"></i>
    </button>
    </header>
    )
}