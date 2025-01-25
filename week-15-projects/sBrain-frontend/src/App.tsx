import { useState } from "react";

import { Card } from "./components/Card"
import { Sidebar } from "./components/Sidebar"
import { CiShare2 } from "react-icons/ci";

import { IoAddSharp } from "react-icons/io5";
import { CreateContentModal } from "./components/CreateContentModal";

const App = () => {

    const [isOpen, setIsopen] = useState(false);

    function handleOpenModel(){
      setIsopen(!isOpen);
    }
    function onClose(){
      setIsopen(false);
    }

    return (
      <div className="bg-[#0c1821] h-[100vh] flex">
        <CreateContentModal isOpen={isOpen} onClose={onClose} />
        <Sidebar />
        <Card title="how to crack GSOC" type="youtube" link="https://www.youtube.com/watch?v=jyyoo915cGQ&t=211s" />
        <Card title="my first tweet" type="twitter" link="https://x.com/elonmusk/status/1882615180896403499" />

        <div className="flex absolute bottom-10 right-20 gap-x-2">
          <button className="text-white px-10 py-3 bg-[#324A5F] bg-opacity-30 hover:bg-[#4c6b87] rounded-md flex justify-center items-center text-lg transition-all duration-300 ease-out">Share Content <CiShare2 className="size-6 ml-1" /></button>
          
          <button 
          className="text-white px-10 py-3 bg-[#324A5F] hover:bg-[#4c6b87] rounded-md flex justify-center items-center text-lg transition-all duration-300 ease-out"
          onClick={handleOpenModel}
          ><IoAddSharp className="size-6 mr-1" /> 
          Add Content
          </button>
        
        </div>
      </div>
    )
}

export default App
