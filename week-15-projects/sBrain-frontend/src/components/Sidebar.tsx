import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { MdInsertLink } from "react-icons/md";
import { FaTags } from "react-icons/fa";

export const Sidebar = () => {
    return (
        <div className="text-white bg-[#002233] h-[100vh] w-[300px] p-5 ">
            <div className="w-[100%] h-[70px] flex justify-center items-center gap-x-3 ">
                <img src="brain.png" className="size-12" alt="" />
                <h1 className="text-3xl font-serif font-bold bg-gradient-to-r from-[#e0fbfc] to-[#abc4ff] bg-clip-text text-transparent  ">sBrain</h1>
            </div>
            
            <div className="relative w-full h-[2px] before:absolute before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-gray-500 before:to-transparent"></div>
            
            <div className="w-[100%] h-[600px] p-5 flex flex-col justify-top items-center gap-y-3">
                <div className="w-[100%] h-[50px] flex items-center justify pl-10 gap-x-3 rounded-md border-0 hover:bg-[#324a5f] hover:bg-opacity-80 transition-all duration-300 ">
                    <FaYoutube className=" text-xl" />
                    <h2>Videos</h2>
                </div>
                <div className="w-[100%] h-[50px] flex items-center justify pl-10 gap-x-3 rounded-md border-0 hover:bg-[#324a5f] hover:bg-opacity-80  transition-all duration-300 ">
                    <FaTwitter  className=" text-xl" />
                    <h2>Tweets</h2>
                </div>
                <div className="w-[100%] h-[50px] flex items-center justify pl-10 gap-x-3 rounded-md border-0 hover:bg-[#324a5f] hover:bg-opacity-80  transition-all duration-300 ">
                    <IoDocumentText className=" text-xl" />
                    <h2>Documents</h2>
                </div>
                <div className="w-[100%] h-[50px] flex items-center justify pl-10 gap-x-3 rounded-md border-0 hover:bg-[#324a5f] hover:bg-opacity-80 transition-all duration-300 ">
                    <MdInsertLink className=" text-xl" />
                    <h2>Links</h2>
                </div>
                <div className="w-[100%] h-[50px] flex items-center justify pl-10 gap-x-3 rounded-md border-0 hover:bg-[#324a5f] hover:bg-opacity-80 transition-all duration-300 ">
                    <FaTags className=" text-xl" />
                    <h2>Tags</h2>
                </div>
                
            </div>
            
        </div>
    )
}