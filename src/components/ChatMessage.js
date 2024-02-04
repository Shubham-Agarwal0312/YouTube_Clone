import React from "react";

const ChatMessage = ({name, message}) => {
    const userIconURL = "https://static.vecteezy.com/system/resources/previews/019/879/198/non_2x/user-icon-on-transparent-background-free-png.png";
    return (
        <div className="flex items-center shadow-lg p-2">
            <img className="h-8 col-span-1" alt="userIcon" src={userIconURL}/>
            <div className="">
                <span className="font-bold pr-2">{name}</span>
                <span>{message}</span>
            </div>
        </div>
    );
};

export default ChatMessage;