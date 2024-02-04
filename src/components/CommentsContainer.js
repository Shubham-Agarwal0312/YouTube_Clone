import React from "react";

const CommentsData = [
    {
        name: "Akshay Saini",
        text: "ksjflaj lsjdf j kljdf lsjf ",
        replies: [
            {
                name: "Akshay Saini",
                text: "ksjflaj lsjdf j kljdf lsjf ",
                replies: [{
                    name: "Akshay Saini",
                    text: "ksjflaj lsjdf j kljdf lsjf ",
                    replies: [{
                        name: "Akshay Saini",
                        text: "ksjflaj lsjdf j kljdf lsjf ",
                        replies: [],
                    }],
                }],
            }
        ],
    },
    {
        name: "Akshay Saini",
        text: "ksjflaj lsjdf j kljdf lsjf ",
        replies: [],
    },
    {
        name: "Akshay Saini",
        text: "ksjflaj lsjdf j kljdf lsjf ",
        replies: [],
    },

];

const Comment = ({data}) => {
    const {name, text, replies} = data;
    const userIconURL = "https://static.vecteezy.com/system/resources/previews/019/879/198/non_2x/user-icon-on-transparent-background-free-png.png";
    return (
        <div className="flex shadow-sm bg-gray-100 p-2 my-2 rounded-lg">
            <img className="h-8 w-12" alt="user" src={userIconURL} />
            <div>
                <p className="font-bold">{name}</p>
                <p className="">{text}</p>
            </div>
        </div>
    );
};

const CommentsList = ({comments}) => {
    return (
        <div>
            {comments.map((comment, index) => {
                return (
                    <div>
                        <Comment data={comment}/>
                        <div className="ml-5 border-l border-l-black">
                            <CommentsList comments={comment.replies}/>
                        </div>
                    </div>
                )
            })}
            
        </div>
    );
};

const CommentsContainer = () => {
    return (
        <div className="m-5 p-2">
            <h1 className="text-2xl font-bold" >Comments:</h1>
            <CommentsList comments={CommentsData} />
        </div>
    );
};

export default CommentsContainer;