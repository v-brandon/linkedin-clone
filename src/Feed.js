import React, { useEffect, useState } from 'react'
import './Feed.css';
import InputOption from './InputOption.js'
import Post from './Post.js'
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArticleIcon from '@mui/icons-material/Article';


function Feed() {
    const [posts] = useState([])

    useEffect(() => {
    }, []);

    const sendPost = e => {
        e.preventDefault();


    }

return (
    <div className="feed">
        <div className="feed__inputContainer">
            <div className="feed__input">
                <CreateIcon />
                <form>
                    <input type="text" />
                    <button onClick={sendPost} type="submit"> Send
                    </button>
                </form>
            </div>
            <div className="feed__inputOptions">
                <InputOption Icon={ImageIcon}
                title="Photo"
                color="#70B5F9" />
                <InputOption Icon={SmartDisplayIcon}
                title="Video"
                color="#E7A33E" />
                <InputOption Icon={CalendarTodayIcon}
                title="Event"
                color="brown" />
                <InputOption Icon={ArticleIcon}
                title="Write Article"
                color="#7FC15E" />
            </div>
        </div>
        {/* Post */}
        {posts.map((post) => (
            <Post />

        ))}
        <Post name="Kate Thornhill"
        description='This is a test'
        message='WOW this worked'
        PhotoUrl=''
        />
    </div>
)
}

export default Feed
