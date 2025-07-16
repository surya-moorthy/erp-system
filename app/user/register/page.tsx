"use client"

import { register } from "@/app/actions/user";
import { useState } from "react"

export default function Signup() {  
    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [password,setPassword] = useState("");

    return (
        <div className="flex flex-col justify-center items-center w-screen h-screen ">
             
             <div className="flex flex-col justify-center items-center bg-neutral-600 p-8 rounded-xl">
                <h2 className="text-xl font-bold text-stone-50 px-4 py-2 text-center">
                Register
            </h2>
                <input 
                   type="text" 
                   name="namemail" 
                   id="name" 
                   placeholder="name" 
                   onChange={(e)=>{
                        setName(e.target.value)
                    }}
                   className="bg-neutral-200 text-neutral-900 px-4 py-2 text-lg rounded-lg m-4"/>
              
                   <input 
                   type="text" 
                   name="email" 
                   id="email" 
                   placeholder="email" 
                   onChange={(e)=>{
                        setEmail(e.target.value)
                    }}
                   className="bg-neutral-200 text-neutral-900 px-4 py-2 text-lg rounded-lg m-4"/>
                    <input 
                    type="password" 
                    name="password" 
                    id="pass" 
                    placeholder="password" 
                    className="bg-neutral-200 text-neutral-900 px-4 py-2 text-lg rounded-lg m-4"
                    onChange={(e)=>{
                        setPassword(e.target.value)
                    }}
                    />
                    <button 
                    className="bg-neutral-50 hover:bg-purple-400 text-neutral-950 px-6 py-2 rounded-xl transition-colors duration-300"
                    onClick={()=>{
                        register({email , name ,password});
                    }}
                    >
                        Sign up
                    </button>
             </div>
        </div>
    )
}