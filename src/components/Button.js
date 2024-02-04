import React from "react";

const Button = (props) => {
    return (
        <div className="border bg-slate-200 text-black px-5 py-2 m-2 rounded-full">
            {props.name}
        </div>
    );
};

export default Button;