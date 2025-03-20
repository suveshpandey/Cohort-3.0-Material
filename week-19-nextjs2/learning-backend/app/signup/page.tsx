"use client"

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react"

export default function Signup () {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    return <div className="h-screen flex justify-center items-center">
        <div className="h-1/2 w-[400px] bg-gray-800 rounded-md border border-slate-600 p-4 flex flex-col items-center">
            <h1 className="text-3xl font-bold text-slate-300">Sign-up</h1>
            
            <div className="w-[80%] h-auto mt-10 flex flex-col">
                <label htmlFor="username" className="">Email</label>
                <input 
                type="text" 
                placeholder="email" 
                onChange={(e) => setEmail(e.target.value)}
                className="bg-slate-900 p-3 rounded-md outline-none mt-2" 
                />
                
                <label htmlFor="password" className="mt-6">Password</label>
                <input 
                type="text" 
                placeholder="password" 
                onChange={(e) => setPassword(e.target.value)}
                className="bg-slate-900 p-3 rounded-md outline-none mt-2" 
                />
            
                <button 
                onClick={async () => {
                    await axios.post("http://localhost:3000/api/v1/signup", {
                        email: email,
                        password: password,
                    })
                    router.push("/signin")
                }}
                className="bg-blue-800 py-3 rounded-full mt-8 cursor-pointer"
                >
                    Submit
                </button>
            </div>
        </div>
    </div>
}