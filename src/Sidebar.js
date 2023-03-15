import { Avatar } from '@mui/material';
import React from 'react'
import './Sidebar.css'

function Sidebar() {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )



return (
    <div className="sidebar">
        <div className="sidebar__top">
            <img
            src="https://images.pexels.com/photos/715134/pexels-photo-715134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            />
            <Avatar className="sidebar__avatar"/>
            <h2> Kate Thornhill </h2>
            <h4> kate.thornhill@gmail.com </h4>
        </div>

        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p> Who viewed you</p>
                <p className="sidebar__statNumber">1,492</p>
            </div>
            <div className="sidebar__stat">
                <p> Views on post </p>
                <p className="sidebar__statNumber">2,019</p>
            </div>
        </div>

        <div className="sidebar__bottom">
            <p> Recent </p>
            {recentItem('reactjs')}
            {recentItem('programming')}
            {recentItem('softwareEngineering')}
            {recentItem('design')}
        </div>
    </div>
);
}

export default Sidebar
