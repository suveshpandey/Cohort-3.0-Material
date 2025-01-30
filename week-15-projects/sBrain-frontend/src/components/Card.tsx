import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

interface CardProps {
    title: string;
    link: string;
    type: string
}
export const Card = ({title, link, type}: CardProps) => {

    // utils/normalizeYoutubeLink.ts
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
    };

    return (
        <div className="sm:w-[300px] w-[100%] min-h-[400px] max-h-min border-[1px] bg-[#1B2A41] bg-opacity-20 border-[#324A5F] text-white p-3 m-3 rounded-md ">
            <div className="w-[100%] flex flex-cols justify-between items-center ">
                <div className="flex items-center gap-x-3">
                    {type === "youtube" ? <FaYoutube className="size-6" /> : <FaTwitter className="size-6" />}
                    <p className="text-lg">{title}</p>
                </div>
                <div className="flex items-center gap-x-3">
                    <div>
                        <a href={link} target="_blank">
                            <IoShareSocialSharp className="size-6 text-green-300 cursor-pointer" />
                        </a>
                    </div>
                    <MdDelete className="size-6 text-red-300" />
                </div>
            </div>
            <div className="w-[100%] flex items-center justify-center mt-3">
                {type === "youtube" ? 
                <iframe className=" w-full rounded-md " src={normalizeYoutubeLink(link)} title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    :
                <blockquote className="twitter-tweet">
                <a href={link.replace("x.com", "twitter.com")}></a> 
                </blockquote>
                }
            </div>
        </div>
    )
}