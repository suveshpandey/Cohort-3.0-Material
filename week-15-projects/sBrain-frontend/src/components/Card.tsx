import { useEffect } from "react";
import { FaYoutube, FaTwitter, FaGlobe,  } from "react-icons/fa";
import { MdInsertLink } from "react-icons/md";

import { IoShareSocialSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

interface CardProps {
    title: string;
    link: string;
    type: string,
    handleDeleteContent: () => void
}

export const Card = ({title, link, type, handleDeleteContent}: CardProps) => {
    useEffect(() => {
        if(type === "twitter" && (window as any).twttr){
            (window as any).twttr.widgets.load();
        }
    }, [link, type])

    //normalize youtube link
    const normalizeYoutubeLink = (link: string): string => {
        let videoId = "";

        // Handle full URL format: https://www.youtube.com/watch?v=LdkVEAT0Wso
        if (link.includes("v=")) {
            videoId = link.split("v=")[1].split("&")[0]; // Extract video ID
        }
        // Handle shortened URL format: https://youtu.be/LdkVEAT0Wso
        else if (link.includes("youtu.be")) {
            videoId = link.split("/").pop()?.split("?")[0] || ""; // Extract video ID
        }
        // Handle embedded URL format: https://www.youtube.com/embed/LdkVEAT0Wso
        else if (link.includes("embed")) {
            videoId = link.split("/embed/")[1].split("?")[0]; // Extract video ID
        }

        // Return the normalized embedded URL
        return `https://www.youtube.com/embed/${videoId}`;
    }
    const handleDelete = () => {
        handleDeleteContent();
    }
    const getIcon = () => {
        switch (type) {
            case "youtube":
                return <FaYoutube className="size-6" />;
            case "twitter":
                return <FaTwitter className="size-6" />;
            case "link": // Example for websites
                return <MdInsertLink className="size-6" />;
            default:
                return <FaGlobe className="size-6" />; // Default icon
        }
    };


    //-----------------------------------------
    return (
        <div className="sm:w-[300px] w-[100%] h-[500px] border-[1px] bg-[#1B2A41] bg-opacity-20 border-[#324A5F] text-white p-3 m-3 rounded-md ">
            <div className="w-[100%] flex flex-cols justify-between items-center ">
                <div className="flex items-center gap-x-3">
                    {getIcon()}
                    <p className="text-lg">{title}</p>
                </div>
                <div className="flex items-center gap-x-3">
                    <div>
                        <a href={link} target="_blank">
                            <IoShareSocialSharp className="size-6 text-green-300 cursor-pointer" />
                        </a>
                    </div>
                    <MdDelete className="size-6 text-red-300 cursor-pointer " onClick={handleDelete} />
                </div>
            </div>
            <div className=" h-[330px] w-[100%] mt-3 overflow-y-auto round overflow-hidden custom-scrollbar  ">
            
                {/* {type === "youtube" ? 
                <iframe className=" w-full rounded-md " src={normalizeYoutubeLink(link)} title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    :
                <blockquote className="twitter-tweet">
                    <a href={link.replace("x.com", "twitter.com")}></a> 
                </blockquote>
                } */}

                {type === "youtube" ? (
                    <iframe 
                        className="w-full rounded-md" 
                        src={normalizeYoutubeLink(link)} 
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                    ></iframe>
                ) : type === "twitter" ? (
                    <blockquote className="twitter-tweet">
                        <a href={link.replace("x.com", "twitter.com")}></a>
                    </blockquote>
                ) : type === "link" ? (
                    <a href={link} className="text-blue-500 hover:text-blue-400 underline" target="_blank" rel="noopener noreferrer">
                        {link}
                    </a>
                ) : (
                    <p>Unsupported content type</p>
                )}

            </div>
        </div>
    )
}