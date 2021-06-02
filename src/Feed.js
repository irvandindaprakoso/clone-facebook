import React, {useEffect, useState} from 'react';
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
import db from "./firebase"

function Feed() {

    const [posts, setPosts] = useState([]);

    // const fetchPosts = async () => {
    //     const response = db.collection('posts');
    //     const data = await response.get();
    //     data.docs.forEach(item => {
    //         setPosts([...posts, item.data()])
    //     })
    // };

    useEffect(() => {
        db.collection('posts').onSnapshot((snap) =>
            setPosts(snap.docs.map((doc) => ({id: doc.id, data: doc.data()})))
        );
        console.log(posts, 'iy');
    }, []);

    return (
        <div className='feed'>
            <StoryReel/>
            <MessageSender/>

            {
                posts.map((post) => (
                    <Post
                        key={post.id}
                        profilePic={post.data.profilePic}
                        message={post.data.message}
                        timestamp={post.data.timestamp}
                        username={post.data.username}
                        image={post.data.image}
                    />
                ))}

        </div>
    )

}

export default Feed;