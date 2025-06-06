// import { useRef } from "react"
import React, { useState } from "react"
import { Link, useNavigate } from 'react-router-dom';

import { Navbar } from "./Navbar"




interface UserInterface {
    email: string,
    password: string,
    username: string
}
export const Signup = () => {
    const [data, setData] = useState<UserInterface>(
        {
            email: "",
            password: "",
            username: ""
        }
    );

    const navigate = useNavigate();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const id = event.target.id;
        const value = event.target.value;

        setData({...data, [id]: value})
    }

    const handleSignup = (event:  React.FormEvent<HTMLFormElement>) =>  {
        event.preventDefault();

        if(data.email == "" || data.password == "" || data.username == ""){
            console.log("please fill all the blocks.")
            return;
        }
        console.log(`signup done! \n email- ${data.email} \n password- ${data.password} \n username- ${data.username}`)
        navigate("/signin")
    }



    //----------------------------------------------
    return (
        <div className="bg-[#0c1821] h-[100vh] w-[100%]">
            <Navbar />
            <section className="bg-gray-900">

                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    
                    <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-white">
                        <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                        sBrain
                    </a>

                    <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                                Create an account
                            </h1>
                            {/* main form starts here */}
                            <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSignup}>

                                {/* email div */}
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
                                        Your email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={data.email}
                                        onChange={handleInputChange}
                                        className="border text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="name@company.com"
                                        required
                                    />
                                </div>

                                {/* password div */}
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        value={data.password}
                                        onChange={handleInputChange}
                                        placeholder="••••••••"
                                        className=" text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500"
                                        required
                                    />
                                </div>
                                
                                {/* username div */}
                                <div>
                                    <label htmlFor="username" className="block mb-2 text-sm font-medium text-white">
                                        Your username
                                    </label>
                                    <input
                                        type="text"
                                        name="username"
                                        id="username"
                                        value={data.username}
                                        onChange={handleInputChange}
                                        className=" text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 "
                                        placeholder="Suvesh Pandey"
                                        required
                                    />
                                </div>

                                {/* signup button */}
                                <button
                                type="submit"
                                // onClick={handleSignup}
                                className="w-full py-2 rounded-md text-gray-300 bg-blue-700  hover:bg-blue-600 transition-all duration-200"
                                >
                                Create an account
                                </button>

                                {/* link */}
                                <p className="text-sm font-light text-gray-400">
                                    Already have an account? <Link to={"/signin"} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}