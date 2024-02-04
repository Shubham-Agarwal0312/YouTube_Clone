import React, { useEffect, useState } from "react";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const searchCache = useSelector((store) => store.search);

    const dispatch = useDispatch();
    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchCache[searchQuery]) {
                setSuggestions(searchCache[searchQuery]);
            } else {
                getSearchSuggestions()
            }
            
        }, 200);
        return () => {
            clearTimeout(timer);
        }
    }, [searchQuery]);

    const getSearchSuggestions = async () => {
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        setSuggestions(json[1]);
        // console.log("API_CALLS");
        dispatch(cacheResults({
            [searchQuery]: json[1],
        }));
    }

    const handleChangeEvent = (e) => {
        setSearchQuery(e.target.value);
    }

    const hamburgerIconURL = "https://static.vecteezy.com/system/resources/previews/002/292/406/non_2x/hamburger-menu-line-icon-free-vector.jpg";
    const youtubeLogoURL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEynCGDrFj3BQG1Aff7q4ARbWM0s7FK8jfng&usqp=CAU";
    const userIconURL = "https://static.vecteezy.com/system/resources/previews/019/879/198/non_2x/user-icon-on-transparent-background-free-png.png";
    const searchIcon = "https://cdn-icons-png.flaticon.com/512/149/149852.png";
    
    return (
        <div className="grid grid-flow-col p-5 m-2 shadow-lg">
            <div className="flex col-span-1">
                <img 
                    onClick={() => toggleMenuHandler()}
                    className="h-8 cursor-pointer" 
                    alt="menuIcon" 
                    src={hamburgerIconURL} 
                />
                <img className="h-8 mx-2 w-20" alt="youtube Logo" src={youtubeLogoURL} />
            </div>
            <div className="col-span-10 px-10">
                <div>
                    <input 
                        value={searchQuery}
                        onChange={(e) => handleChangeEvent(e)}
                        onFocus={() => setShowSuggestions(true)}
                        onBlur={() => setShowSuggestions(false)}
                        className="w-1/2 border border-gray-800 p-2 rounded-l-full" 
                        type="text"/>
                    <button className="border border-gray-800 px-10 py-2 rounded-r-full bg-gray-400" >search</button>
                </div>
                {showSuggestions && (
                    <div className="fixed bg-white mt-1 py-2 px-2 w-[31rem] shadow-lg rounded-lg border border-gray-100">
                        <ul>
                            {suggestions.map((items, index) => {
                                return (
                                    <div key={index} className="flex hover:bg-gray-100 px-2 ">
                                        <img className="w-4 h-4 items-center mt-1" alt="search" src={searchIcon} />
                                        <li className="ml-3">{items}</li>
                                    </div>
                                );
                            })}
                        </ul>
                    </div>
                )}
            </div>
            <div>
                <img className="h-8 col-span-1" alt="userIcon" src={userIconURL}/>
            </div>
        </div>
        
    )
};

export default Header;