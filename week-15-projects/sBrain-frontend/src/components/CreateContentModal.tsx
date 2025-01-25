import { RxCross2 } from "react-icons/rx";
import { Input } from "./Input";

import { TbPencilCheck } from "react-icons/tb";

interface ModelProps {
    isOpen: boolean,
    onClose: () => void
}
export const CreateContentModal = ({isOpen, onClose}: ModelProps) => {
    return (
        <div>
            {isOpen && <div className="w-[100%] h-[100vh] absolute top-0 left-0 flex justify-center items-center bg-black bg-opacity-50">
                <div className="lg:w-[30%] w-[60%] h-4/6 bg-[#0C1821] flex flex-col p-3 text-white z-10 rounded-md border-[1px] border-gray-600 ">
                    <div className="flex justify-end items-center">
                        <button className=""><RxCross2 onClick={onClose} className="size-6 hover:text-red-300" /></button>
                    </div>
                    <div className="flex items-center">
                        <p className="my-2 text-2xl font-bold text-gray-200">Add Your Content</p>
                        <TbPencilCheck className="size-6 ml-2" />
                    </div>
                    <div className="w-[100%] mt-2 flex flex-col ">
                        <Input placeholder="Title" onChange={() => {}} />
                        <Input placeholder="Type" onChange={() => {}} />
                        <Input placeholder="Link" onChange={() => {}} />
                        <button className="w-[70%] py-3 rounded mx-auto bg-[#324A5F] hover:bg-[#4c6b87] active:bg-[#5b80a1] transition-all duration-300 ease-out text-lg ">Add</button>
                    </div>
                </div>
            </div>}
        </div>
    )
}
