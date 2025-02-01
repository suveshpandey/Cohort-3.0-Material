import { useState } from "react";

import { RxCross2 } from "react-icons/rx";
import { TbPencilCheck } from "react-icons/tb";

interface ContentInterface {
    title: string,
    type: string,
    link: string
}
interface ModelProps {
    isOpen: boolean,
    onClose: () => void,
    handleAddContent: (newContent: ContentInterface) => void
}

export const CreateContentModal = ({isOpen, onClose, handleAddContent}: ModelProps) => {
    const [contentData, setContentData] = useState<ContentInterface>(
        {
            title: "",
            type: "",
            link: ""
        }
    )
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const id = event.target.id;
        const value = event.target.value;

        setContentData({...contentData, [id]: value})
    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        handleAddContent(contentData);
        setContentData({
            title: "",
            type: "",
            link: ""
        });
        onClose();
        
    }
    const handleKeyDown = (event: React.KeyboardEvent<HTMLFormElement>) => {
        if(event.key == "Enter"){
            handleSubmit(event);
        }
    }

    //-------------------------------------
    return (
        <div>
            {isOpen && <div className="w-[100%] h-[100vh] absolute top-0 left-0 flex justify-center items-center bg-black bg-opacity-50">
                <div className="lg:w-[30%] w-[90%] max-h-4/6 h-3/6 bg-[#0C1821] flex flex-col p-3 text-white z-10 rounded-md border-[1px] border-gray-600 ">
                    <div className="flex justify-end items-center">
                        <button className=""><RxCross2 onClick={onClose} className="size-6 hover:text-red-300" /></button>
                    </div>
                    <div className="flex items-center">
                        <p className="my-2 text-2xl font-bold text-gray-200">Add Your Content</p>
                        <TbPencilCheck className="size-6 ml-2" />
                    </div>
                    <div className="w-[100%] mt-2 flex flex-col ">
                        <form action="" onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
                            <input 
                            type="text"
                            placeholder="title"
                            id="title"
                            value={contentData.title}
                            onChange={handleInputChange}
                            className="w-[100%] border-[1px] border-[#6c757d] hover:border-[#3d5a80] outline-none bg-transparent px-5 py-3 rounded-md  text-lg text-gray-300 mb-3 "
                            />
                            <input 
                            type="text"
                            placeholder="type"
                            id="type"
                            value={contentData.type}
                            onChange={handleInputChange}
                            className="w-[100%] border-[1px] border-[#6c757d] hover:border-[#3d5a80] outline-none bg-transparent px-5 py-3 rounded-md  text-lg text-gray-300 mb-3 "
                            />
                            <input 
                            type="text"
                            placeholder="link"
                            id="link"
                            value={contentData.link}
                            onChange={handleInputChange}
                            className="w-[100%] border-[1px] border-[#6c757d] hover:border-[#3d5a80] outline-none bg-transparent px-5 py-3 rounded-md  text-lg text-gray-300 mb-3 "
                            />
                            <div className="flex gap-x-2 justify-end items-end">
                                <button
                                className="w-40 py-3 rounded-md font-medium text-white px-10 bg-[#324A5F] bg-opacity-30 hover:bg-[#4c6b87] transition-all duration-200"
                                onClick={onClose}
                                >Cancel</button>
                                <button
                                className="w-40 py-3 rounded-md font-medium text-gray-300 bg-[#324A5F] hover:bg-[#4c6b87] transition-all duration-200"
                                type="submit"
                                >Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>}
        </div>
    )
}
