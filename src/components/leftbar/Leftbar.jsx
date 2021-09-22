import './leftbar.css'
import {RssFeed, HelpOutline, Bookmark, Group, PlayCircleOutline, Chat} from '@mui/icons-material'
// import img1 from './images/1.jpg'
import {Users} from "../../dummyData" 
import Friend from '../friends/Friend'


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

             </ul>
             <button className='leftbarButton' >Развернуть </button>
             <hr className='leftbarHr' />
             <ul className="leftbarFriendList">
               {Users.map((u) => (
                   <Friend key={u.id} user = {u} />
               ))}
              
             </ul>
            </div>
        </div>
    )
}
