import { useRef, useState } from 'react';

const Demo2 = () => {

    const [y, setY] = useState(0)
    let x = 0;

    const ref = useRef(0);

    return (
        <div className="mx-4 p-2 bg-slate-50 border border-black w-96 h-96">
            <div>
                <button 
                    className="bg-green-100 p-2 m-4"
                    onClick={() => {
                        setY(y + 1);
                    }}
                >
                    Increase x
                </button>
                <h1 className="font-bold text-xl">Let = {x}</h1>
            </div>
            <div>
                <button 
                    className="bg-green-100 p-2 m-4"
                    onClick={() => {
                        x = x + 1;
                    }}
                >
                    Increase Y
                </button>
                <h1 className="font-bold text-xl">State = {y}</h1>
            </div>
            <div>
                <button 
                    className="bg-green-100 p-2 m-4"
                    onClick={() => {
                        ref.current = ref.current + 1;
                    }}
                >
                    Increase Ref
                </button>
                <h1 className="font-bold text-xl">Ref = {ref.current}</h1>
            </div>
        </div>
        
    );
};

export default Demo2;