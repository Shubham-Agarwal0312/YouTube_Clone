import React from "react";

const VideoCard = (props) => {
    // console.log("props.info", props.info);

    const { snippet, statistics } = props.info;
    const { channelTitle, title, thumbnails } = snippet;


    return (
        <div className="p-2 m-2 w-72 shadow-lg">
            <img className="rounded-lg" src={thumbnails.medium.url} />
            <ul>
                <li className="font-bold py-2">{channelTitle}</li>
                <li>{title}</li>
                <li>{statistics.viewCount}</li>
                {/* <li>{channelTitle}</li> */}
            </ul>
        </div>
    );
};

export const AdVideoCard = ({info}) => {
    return (
        <div className="m-1 p-1 border border-red-800">
            <VideoCard info={info} />
        </div>
    );
};

export default VideoCard;