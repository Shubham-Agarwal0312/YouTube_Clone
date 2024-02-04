import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
    const [liveMessage, setLiveMessage] = useState("");
    const dispatch = useDispatch();
    
    const chatMessages = useSelector(store => store.chat.messages);

    useEffect(() => {
        const timer = setInterval(() => {
            //console.log("API Polling");
            dispatch(
                addMessage({
                    name: generateRandomName(),
                    message: makeRandomMessage(20),
                })
            )
        }, 1500);
        return () => clearInterval(timer);
    });

    return (
        <>
            <div 
                className="w-full h-[500px] ml-2 p-2 border border-black rounded-lg bg-slate-100 overflow-y-scroll flex flex-col-reverse"
            >
                {chatMessages.map((cm, index) => {
                return <ChatMessage 
                            key={index}
                            name={cm.name}
                            message={cm.message}
                        />
                })}
            </div>
            <form 
                className="w-full p-2 ml-2 border border-black flex"
                onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(addMessage({
                        name: "Shubham Agarwal",
                        message: liveMessage,
                    }));
                    setLiveMessage("");
                }}
            >
                <input 
                    className="w-90 border border-gray-400 px-2" 
                    type="text" 
                    value={liveMessage}
                    onChange={(e) => setLiveMessage(e.target.value)}
                />
                <button className="px-2 ml-2 bg-green-100 float-end">Submit</button>
            </form>
        </>
    );
};

export default LiveChat;