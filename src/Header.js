import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import "./Header.css"
import HeaderOption from './HeaderOption';
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import ChatBubbleRoundedIcon from '@mui/icons-material/ChatBubbleRounded';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
return (
    <div className="header">
        <div className='header__left'>
            <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png'
            alt=''
            />

            <div className='header__search'>
                <SearchIcon />
                <input type='text'/>
            </div>
        </div>

        <div className='header__right'>
            <HeaderOption Icon={HomeIcon} title="Home" />
            <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
            <HeaderOption Icon={BusinessCenterRoundedIcon} title="Jobs" />
            <HeaderOption Icon={ChatBubbleRoundedIcon} title="Messaging" />
            <HeaderOption Icon={NotificationsIcon} title="Notifications" />
            <HeaderOption avatar="https://images.pexels.com/photos/8192014/pexels-photo-8192014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            title='Profile' />

    </div>
        {/* App body */}

        {/* Sidebar */}

        {/* Feed */}

        </div>
    )
}

export default Header
