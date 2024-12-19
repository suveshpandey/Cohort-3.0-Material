import React, { useRef, useState } from 'react';

const Otp = ({ number }) => {
    // Create an array of refs for each input box
    const refs = Array.from({ length: number }, () => useRef());

    return (
        <div>
            {Array(number)
                .fill(1)
                .map((_, index) => (
                    <SubOtpBox
                        key={index}
                        reference={refs[index]}
                        onDone={() => {
                            if (index < number - 1) {
                                refs[index + 1].current.focus(); // Focus the next input
                            }
                        }}
                        onBack={() => {
                            if (index > 0) {
                                refs[index - 1].current.focus(); // Focus the previous input
                            }
                        }}
                    />
                ))}
        </div>
    );
};

const SubOtpBox = ({ reference, onDone, onBack }) => {
    const [inputVal, setInputVal] = useState('');
    return (
        <input
            value={inputVal}
            onChange={(e) => {
                const val = e.target.value;

                if (val >= '0' && val <= '9') {
                    setInputVal(val);
                    onDone();
                }
            }}
            onKeyDown={(e) => {
                if (e.key === 'Backspace') {
                    setInputVal('');
                    onBack();
                }
            }}
            ref={reference}
            type="text"
            className="w-[40px] h-[40px] mx-1 bg-slate-900 outline-none text-white text-center rounded-md"
        />
    );
};

export default Otp;
