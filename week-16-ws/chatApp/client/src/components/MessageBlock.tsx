interface messageType {
    message: string
}
export const MessageBlock = ({message}: messageType) => {
    return (
        <span className="bg-slate-600 mt-3 px-3 py-2 rounded-full max-w-max rounded-bl-none  ">
            {message}
        </span>
    )
}
