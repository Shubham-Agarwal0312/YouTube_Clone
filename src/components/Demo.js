import React, { useMemo, useState } from "react";
import { findNthPrime } from "../utils/constants";

const Demo = () => {
    const [ text, setText ] = useState(0);
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const prime = useMemo(() => findNthPrime(text), [text]);
    const v = 10;

    return (
        <div 
            className={"w-96 h-96 border border-black " + (isDarkTheme && "bg-gray-900 text-white")}
        >
            <div>
                <button 
                    className="m-10 p-2 bg-green-200"
                    onClick={() => setIsDarkTheme(!isDarkTheme)}
                >
                    Toggle {v}
                </button>
            </div>
            <div>
                <input 
                    type="number" 
                    value={text} 
                    onChange={(e) => setText(e.target.value)}
                    className="w-80 border border-gray-700 m-2 p-2"
                />
            </div>
            <div>
                <h1 className="mt-4 font-bold text-xl">nth Prime: {prime}</h1>
            </div>
        </div>
    );
};

export default Demo;