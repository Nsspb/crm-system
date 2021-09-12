import './leftbar.css'
import {RssFeed, School, Event, WorkOutline, HelpOutline, Bookmark, Group, PlayCircleOutline, Chat} from '@mui/icons-material'

export default function Leftbar() {
    return (
        <div className="leftbar" >
            <div className="leftbarWrapper">
             <ul className="leftbarList">
                 <li className="leftbarLIstItem">
        <RssFeed className='leftbarIcon' />
        <span className="leftbarListItemText"> Новости</span>
                 </li>
                 <li className="leftbarLIstItem">
        <Chat className='leftbarIcon' />
        <span className="leftbarListItemText"> Сообщения</span>
                 </li>
                 <li className="leftbarLIstItem">
        <PlayCircleOutline className='leftbarIcon' />
        <span className="leftbarListItemText"> Видео</span>
                 </li>
                 <li className="leftbarLIstItem">
        <Group className='leftbarIcon' />
        <span className="leftbarListItemText"> Группы</span>
                 </li>
                 <li className="leftbarLIstItem">
        <Bookmark className='leftbarIcon' />
        <span className="leftbarListItemText"> Закладки</span>
                 </li>
                 <li className="leftbarLIstItem">
        <HelpOutline className='leftbarIcon' />
        <span className="leftbarListItemText"> Помощь</span>
                 </li>
                 <li className="leftbarLIstItem">
        <WorkOutline className='leftbarIcon' />
        <span className="leftbarListItemText"> Работа</span>
                 </li>
                 <li className="leftbarLIstItem">
        <Event className='leftbarIcon' />
        <span className="leftbarListItemText"> Встречи</span>
                 </li>
                 <li className="leftbarLIstItem">
        <School className='leftbarIcon' />
        <span className="leftbarListItemText"> Обучение</span>
                 </li>
             </ul>
            </div>
        </div>
    )
}
