import React from 'react'

import './header.css';
import { Person, Search, Chat, Notifications } from '@mui/icons-material';
import logo from './person/autor.jpeg'

export default function Header() {
    return (
        <div className='headerContainer'>
            <div className='headerLeft'>
                <span className='logo'>Просто логотип</span>
            </div>
            <div className='headerCenter'>
                <div className='searchBar'>
                    <Search className='searchIcon'/>
                    <input
                        placeholder='Поиск на сайте...'
                        className='searchInput'
                    />
                </div>
        
            </div>
            <div className='headerRight'>
                <div className='headerLinks'>
                    <span className='headerLink'>Домашняя страница</span>
                    <span className='headerLink'>Страница 2</span>
                </div>
                <div className='headerIcons'>
                    <div className='headerIconItem'>
                        <Person />
                        <span className='headerIconBadge'>1</span>
                    </div>
                    <div className='headerIconItem'>
                        <Chat />
                        <span className='headerIconBadge'>2</span>
                    </div>
                    <div className='headerIconItem'>
                        <Notifications />
                        <span className='headerIconBadge'>1</span>
                    </div>
                </div>
                <img
                    src={logo} 
                    alt=''
                    className='headerImg'
                />
            </div>
        </div>
    );
}
