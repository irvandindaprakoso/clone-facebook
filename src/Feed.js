import React from 'react';
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";

function Feed() {
    return <div className='feed'>
        <StoryReel/>
        <MessageSender/>
        <Post
            profilePic='https://avatars.githubusercontent.com/u/24975066?s=460&u=975470b11e8ff95e3190b6d7976a0887c9df529c&v=4'
            message='wow this works'
            timestamp='timestamp'
            username='Irvan'
            image='https://asset.kompas.com/crops/yJQz3sjuTKQHV5TD7PbYtYOnpPE=/0x113:1000x613/750x500/data/photo/2018/10/23/3227359600.jpg'
        />
        <Post/>
        <Post/>

    </div>

}

export default Feed;