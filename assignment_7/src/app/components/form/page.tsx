'use client'
import { useState } from "react"
export default function Form(){
    const [numvalue,setNumValue] = useState("");
    function allowOnlyNumber(e:React.ChangeEvent<HTMLInputElement>) {
        const numericValueChecker= e.target.value.replace(/[^0-9]/g, "");
        setNumValue(numericValueChecker);
      }
      const [emailValue,setEmailValue] = useState("");
      const [Error,setError] = useState("");
    function emailVerify(e:React.ChangeEvent<HTMLInputElement>){
        const email = e.target.value;
        setEmailValue(email);
        const emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|outlook\.com|hotmail\.com)$/;
        if(emailPattern.test(email)){
            setError("");
        }
        else{
            setError("Please enter a valid email with a common \
                domain like gmail.com, yahoo.com, etc.")
        }    
    }
    const [nameValue,setNameValue] = useState("");
    function nameValueChecker(e:React.ChangeEvent<HTMLInputElement>){
        const namePatternChecker=e.target.value.replace(/[^a-zA-Z]/g,"");
        setNameValue(namePatternChecker);
    }
        return(
        <form className="font-label bg-[#D4C6B5]
        w-[79.6rem] h-auto flex flex-col items-center">
            <label>
            Enter Your Name
            </label>
            <input type="text" autoComplete="off" required
            minLength={3} placeholder="Your Name" value={nameValue}
            onChange={nameValueChecker}/>
            <label>
            Enter Your Email
            </label>
            <input type="email" autoComplete="off"
            onChange={emailVerify} maxLength={255}
            value={emailValue}  required placeholder="Your Email"/>
            {Error && <p className="text-red-500">{Error}</p>}
            <label>
            Enter Your Phone Number
            </label>
            <input type="text" minLength={5} maxLength={15} 
            onChange={allowOnlyNumber}
            value={numvalue} autoComplete="off" required placeholder="Your Phone Number"/>
            <label>
                I am
            </label>
            <div className="flex flex-row space-x-16 text-[1.6rem] font-label">
            <div>
            <input type="radio" value="Parent" name="charachter"
            className="mr-4" required/>
            <span>Parent</span>
            </div>
            <div>
            <input type="radio" value="Student" name="charachter"
            className="mr-4" required/>
            <span>Student</span>
            </div>
            </div>
            <button className="sub w-full sm:w-[24.1rem] h-[5.2rem] bg-[#97DA95] rounded-full 
                   mt-12 text-2xl transition duration-300 ease-in-out 
                   hover:bg-[#808080] text-white 
                   shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#97DA95]">
                    Submit
            </button>
            </form>
    )
}