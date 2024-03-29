import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu, toggleMenu } from "../utils/appSlice";
import { useParams, useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {

    
    const [searchParam] = useSearchParams();
    // console.log(searchParam.get('v'));
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeMenu());
    }, []);
    return (
        <div className="w-full">
            <div className="flex w-full px-5">
                <div className="">
                    <iframe 
                        width="1000" 
                        height="500" 
                        src={"https://www.youtube.com/embed/" + searchParam.get('v')} 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowFullScreen>
                    </iframe>
                </div>
                <div className="w-full">
                    <LiveChat />
                </div>
            </div>
            <CommentsContainer />
        </div>
    );
};

export default WatchPage;