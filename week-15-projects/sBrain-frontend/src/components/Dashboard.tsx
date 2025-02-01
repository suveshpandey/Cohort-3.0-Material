import { useState } from "react";

import { Card } from "../components/Card"
import { Sidebar } from "../components/Sidebar"
import { CiShare2 } from "react-icons/ci";

import { IoAddSharp } from "react-icons/io5";
import { CreateContentModal } from "../components/CreateContentModal";
import { Navbar } from "../components/Navbar";

interface ContentInterface {
    title: string,
    type: string,
    link: string
}
export const Dashboard = () => {
    const [isOpen, setIsopen] = useState(false);
    const [isSideBarOpen, setIsSideBarOpen] = useState(true);
    const [contents, setContents] = useState([
        { title: "how to crack GSOC", type: "youtube", link: "https://www.youtube.com/watch?v=jyyoo915cGQ&t=211 s" },
        { title: "my first tweet", type: "twitter", link: "https://x.com/elonmusk/status/1882615180896403499" }
    ]);

    
    const handleOpenModel = () => {
        setIsopen(!isOpen);
    }
    const onClose = () => {
        setIsopen(false);
    }
    const handleOpenSideBar = () => {
        setIsSideBarOpen(!isSideBarOpen);
    }
    const handleAddContent = (newContent: ContentInterface) => {
        setContents((prevContents) => [...prevContents, newContent])
    }
    const handleDeleteContent = (contentIndex: number) => {
        setContents((prevContents) => prevContents.filter((_, i) => i != contentIndex))
    }



    //----------------------------------
    return (
        <div className="bg-[#0c1821] h-[100vh] w-[100%]">

            <CreateContentModal isOpen={isOpen} onClose={onClose} handleAddContent={handleAddContent} />

            <Navbar handleOpenSideBar={handleOpenSideBar} />

            {/* content div */}
            <div className=" h-full flex flex-col justify-between  ">
                { isSideBarOpen && <Sidebar /> }
                <div className="flex h-[100%] flex-wrap justify-center sm:justify-start overflow-y-auto sm:pl-[350px] pt-20 ">
                    {contents.length > 0 ? 
                    (
                        contents.map((content, index) => {
                            return(
                                <Card 
                                key={index}
                                title={content.title}
                                type={content.type}
                                link={content.link}
                                handleDeleteContent={() => handleDeleteContent(index)}
                            />
                            )
                        })
                    )
                    : <p>no notes</p>}
                </div>
            </div>

            {/* add/share btn div */}
            <div className="w-[100%] absolute bottom-4 flex justify-center items-center right-0 ">
                <div className="sm:absolute flex gap-x-2 sm:bottom-10 sm:right-20 p-4 rounded-md bg-opacity-30 border border[1px] border-slate-600 bg-[#22333b]">
                    <button className="text-white px-10 py-3 bg-[#324A5F] bg-opacity-30 hover:bg-[#4c6b87] rounded-md flex justify-center items-center text-lg transition-all duration-300 ease-out">Share Content <CiShare2 className="size-6 ml-1" /></button>
                    
                    <button 
                    className="text-white px-10 py-3 bg-[#324A5F] hover:bg-[#4c6b87] rounded-md flex justify-center items-center text-lg transition-all duration-300 ease-out"
                    onClick={handleOpenModel}
                    ><IoAddSharp className="size-6 mr-1" /> 
                    Add Content
                    </button>
                </div>
            </div>
        </div>
    )
}

