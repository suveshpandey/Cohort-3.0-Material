import { BiMenuAltLeft } from "react-icons/bi";

interface NavbarProps {
    handleOpenSideBar?: () => void
}
export const Navbar = (props: NavbarProps) => {

    return (
        <div className="fixed top-0 h-[7vh] w-full bg-[#002233] grid sm:grid-cols-[20%_60%_20%] grid-cols-[40%_50%_10%] sm:px-32 px-2 shadow-sm shadow-[#778da9] z-10 ">
            <div className="flex justify-start items-center gap-x-3 ">
                <button className="text-white sm:hidden"><BiMenuAltLeft className="size-7 text-[#bdc9d9] " onClick={props.handleOpenSideBar} /></button>
                <img src="brain.png" className="sm:size-12 size-10" alt="" />
                <h1 className="sm:text-3xl text-2xl font-serif font-bold bg-gradient-to-r from-[#e0fbfc] to-[#abc4ff] bg-clip-text text-transparent  ">sBrain</h1>
            </div>
            <div className="flex justify-center items-center text-2xl sm:font-bold font-semibold text-[#778da9]">
                <h1>Hello Suvesh</h1>
            </div>
            <div className="flex items-center justify-end ">
                <div className="h-12 w-12 bg-slate-500 rounded-full flex justify-center items-center font-bold text-xl cursor-pointer ">
                    SP
                </div>
            </div>
        </div>
    )
}
