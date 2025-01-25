import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
// import { IoDocumentText } from "react-icons/io5";
// import { MdInsertLink } from "react-icons/md";
// import { FaTags } from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

interface CardProps {
    title: string;
    link: string;
    type: "youtube" | "twitter";
}
export const Card = ({title, link, type}: CardProps) => {
    return (
        <div className="w-[300px] min-h-[400px] max-h-min border-[1px] bg-[#1B2A41] bg-opacity-20 border-[#324A5F] text-white p-3 m-3 rounded-md ">
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
                <iframe className="relative w-full rounded-md " src={link.replace("watch", "embed").replace("?v=", "/").replace("&t=", "/")} title="YouTube video player" 
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