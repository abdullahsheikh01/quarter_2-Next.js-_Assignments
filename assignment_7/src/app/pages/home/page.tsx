import Image from "next/image";
import main_pic from "@/app/images/main_pic.jpg";
export default function Home(){
    return(
        <div>
                <div className="grid grid-cols-2">
                <div className="flex flex-col">
                        <h1 className="text-[70px] font-heading
                        mt-5 ml-32 text-white">
                            Harmony Valley School</h1>
                       <p className="text-[25.3px] text-white mt-5 ml-32
                        tracking-wide leading-relaxed font-paragraph"> 
                            Welcome to Harmony Valley School, where we cultivate a love for
                            learning in a nurturing and inclusive environment. Our dedicated
                            educators empower students to explore their passions, think
                            critically, and develop into responsible global citizens. 
                            With diverse programs and vibrant extracurricular activities, 
                            we inspire every student to reach their full potential and 
                            embrace a future filled with promise. Join us at Harmony Valley, 
                            where education meets harmony for a brighter tomorrow
                            </p>
                    
                </div>
                <div>
                    <Image src={main_pic} alt="School Pic"
                    className="float-right mr-4 mt-4"
                    />
                </div>
            </div>
        </div>
    )
}