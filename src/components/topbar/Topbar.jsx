import './topbar.css';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';

export default function Topbar() {
    return (
        <div className='topbarContainer'>
            <div className='topbarLeft'>
                <span className='logo'>Просто логотип</span>
            </div>
            <div className='topbarCenter'>
                <div className='searchBar'>
                    <SearchIcon />
                    <input
                        placeholder='Поиск на сайте...'
                        className='searchImput'
                    />
                </div>
            </div>
            <div className='topbarRight'>
                <div className='topbarLinks'>
                    <span className='topbarLink'>Домашняя страница</span>
                    <span className='topbarLink'>Timeline</span>
                </div>
                <div className='topbarIcons'>
                    <div className='topbarIconItem'>
                        <PersonIcon />
                        <span className='topbarIconBadge'>1</span>
                    </div>
                    <div className='topbarIconItem'>
                        <PersonIcon />
                        <span className='topbarIconBadge'>1</span>
                    </div>
                    <div className='topbarIconItem'>
                        <PersonIcon />
                        <span className='topbarIconBadge'>1</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
