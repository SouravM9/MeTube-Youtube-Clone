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
                        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0c6670c7-ed47-4e94-a5eb-852b02377049/ddamddc-0aa2b0e5-ff6b-43b3-9d85-c0294a19e72a.png/v1/fill/w_1222,h_654,strp/metube_logo_by_jamesmerca50_ddamddc-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzAwIiwicGF0aCI6IlwvZlwvMGM2NjcwYzctZWQ0Ny00ZTk0LWE1ZWItODUyYjAyMzc3MDQ5XC9kZGFtZGRjLTBhYTJiMGU1LWZmNmItNDNiMy05ZDg1LWMwMjk0YTE5ZTcyYS5wbmciLCJ3aWR0aCI6Ijw9MTMwOCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.dVNF4KzI8rTNBG_LrM4LG9pyzGIaowzUA9Z1cc3baI4"
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