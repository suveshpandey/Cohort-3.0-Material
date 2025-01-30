import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { MdInsertLink } from "react-icons/md";
import { FaTags } from "react-icons/fa";

export const Sidebar = () => {
    return (
        <div className="text-white bg-[#002233] w-[300px] p-5 sm:block fixed z-0 h-full pt-16 ">
            <div className="w-[100%] h-[600px] p-5 flex flex-col justify-top items-center gap-y-3">
                <div className="w-[100%] h-[50px] flex items-center justify pl-10 gap-x-3 rounded-md border-0 hover:bg-[#324a5f] hover:bg-opacity-80 transition-all duration-300 cursor-pointer">
                    <FaYoutube className=" text-xl" />
                    <h2>Videos</h2>
                </div>
                <div className="w-[100%] h-[50px] flex items-center justify pl-10 gap-x-3 rounded-md border-0 hover:bg-[#324a5f] hover:bg-opacity-80  transition-all duration-300 cursor-pointer">
                    <FaTwitter  className=" text-xl" />
                    <h2>Tweets</h2>
                </div>
                <div className="w-[100%] h-[50px] flex items-center justify pl-10 gap-x-3 rounded-md border-0 hover:bg-[#324a5f] hover:bg-opacity-80  transition-all duration-300 cursor-pointer">
                    <IoDocumentText className=" text-xl" />
                    <h2>Documents</h2>
                </div>
                <div className="w-[100%] h-[50px] flex items-center justify pl-10 gap-x-3 rounded-md border-0 hover:bg-[#324a5f] hover:bg-opacity-80 transition-all duration-300 cursor-pointer">
                    <MdInsertLink className=" text-xl" />
                    <h2>Links</h2>
                </div>
                <div className="w-[100%] h-[50px] flex items-center justify pl-10 gap-x-3 rounded-md border-0 hover:bg-[#324a5f] hover:bg-opacity-80 transition-all duration-300 cursor-pointer">
                    <FaTags className=" text-xl" />
                    <h2>Tags</h2>
                </div>
            </div>
        </div>
    )
}