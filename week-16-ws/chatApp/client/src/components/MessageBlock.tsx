interface messageType {
    message: string
}
export const MessageBlock = ({message}: messageType) => {
    return (
        <div className="bg-slate-600 mt-3 px-3 h-[35px] flex items-center justify-center rounded-full max-w-max rounded-br-none   ">
            {message}
        </div>
    )
}
