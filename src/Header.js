import React, { useState } from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom"

function Header() {
    const [inputSearch, setInputSearch] = useState("");

    return (
        <div className="header" >
            <div className="header__left" >
                <MenuIcon />
                <Link to="/">
                    <img className="header__logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/9/9e/YouTube_Logo_%282013-2017%29.svg"
                        alt="YouTube Logo" />
                </Link>
            </div>

            <div className="header__input" >
                <input placeholder="Search"
                    type="text"
                    value={inputSearch}
                    onChange={
                        (e) => setInputSearch(e.target.value)
                    }
                />
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className="header__inputButton" />
                </Link>

            </div>

            <div className="header__right" >
                <VideoCallOutlinedIcon className="header__icon" />
                <NotificationsOutlinedIcon className="header__icon" />
                <Avatar alt="Sourav"
                    src="https://media-exp1.licdn.com/dms/image/C5603AQGHve6wtWOvmw/profile-displayphoto-shrink_800_800/0/1642446054047?e=1669248000&v=beta&t=L0ELMHYNG6xLHx4v3qbjn1cPH9EuD0qHnis9PjDq8XI" />
            </div>
        </div>
    )
}

export default Header