import { Avatar } from '@mui/material'
import React from 'react'
import './Post.css'
import InputOption from './InputOption';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';

function Post({name, description, message, photoUrl }) {
return (
    <div className="post">
        <div className="post__header">
        <Avatar />
        <div className="post__info">
            <h2> {name} </h2>
            <p> {description} </p>
        </div>
        </div>

        <div className="post__body">
            <p> {message} </p>
        </div>

        <div className="post__buttons">
            <InputOption Icon={ThumbUpIcon} title="Like"
            color="grey"/>
            <InputOption Icon={CommentIcon} title="Comment"
            color="grey"/>
            <InputOption Icon={ShareIcon} title="Share"
            color="grey"/>
            <InputOption Icon={SendIcon} title="Send"
            color="grey"/>
        </div>
    </div>
)
}

export default Post
