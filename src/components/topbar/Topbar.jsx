import React from 'react'

import './topbar.css';
import { Person, Search, Chat, Notifications } from '@mui/icons-material';
import logo from './person/autor.jpeg'

export default function Topbar() {
    return (
        <div className='topbarContainer'>
            <div className='topbarLeft'>
                <span className='logo'>Просто логотип</span>
            </div>
            <div className='topbarCenter'>
                <div className='searchBar'>
                    <Search className='searchIcon'/>
                    <input
                        placeholder='Поиск на сайте...'
                        className='searchInput'
                    />
                </div>
        
            </div>
            <div className='topbarRight'>
                <div className='topbarLinks'>
                    <span className='topbarLink'>Домашняя страница</span>
                    <span className='topbarLink'>Страница 2</span>
                </div>
                <div className='topbarIcons'>
                    <div className='topbarIconItem'>
                        <Person />
                        <span className='topbarIconBadge'>1</span>
                    </div>
                    <div className='topbarIconItem'>
                        <Chat />
                        <span className='topbarIconBadge'>2</span>
                    </div>
                    <div className='topbarIconItem'>
                        <Notifications />
                        <span className='topbarIconBadge'>1</span>
                    </div>
                </div>
                <img
                    src={logo} 
                    alt=''
                    className='topbarImg'
                />
            </div>
        </div>
    );
}
