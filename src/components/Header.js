import React from 'react';
import '../css/header.css'
import { Avatar } from '@material-ui/core'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'

const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <Avatar className="header__avatar" alt="user-avatar" />
                <AccessTimeIcon />
            </div>

            <div className="header__search">
                <SearchIcon />
                <input placeholder="search" />
            </div>

            <div className="header__right">
                <HelpOutlineIcon />
            </div>
        </div>
    );
}

export default Header;
