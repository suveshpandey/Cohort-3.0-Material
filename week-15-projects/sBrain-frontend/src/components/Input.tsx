interface InputProps {
    placeholder: string;
    onChange: () => void
}
export const Input = ({placeholder, onChange}: InputProps) => {
    return (
        <div>
            <input 
            type="text" 
            placeholder={placeholder} 
            onChange={onChange}
            className="w-[100%] border-[1px] border-[#6c757d] hover:border-[#3d5a80] outline-none bg-transparent px-3 py-3 rounded-md  text-lg text-gray-300 mb-3 "
            />
        </div>
    )
}
