import React from "react";
import Button from "./Button";

const buttonList = ['All', "Gaming", "Songs", "Live", "Cricket", "Soccer", "News", "Cooking", "All", "All", "All", "All"];

const ButtonList = () => {
    return (
        <div className="flex justify-between">
            {buttonList.map((name, index) => {
                return <Button name={name} />;
            })}
            
        </div>
    );
};

export default ButtonList;