import './leftbar.css'
import {RssFeed, HelpOutline, Bookmark, Group, PlayCircleOutline, Chat} from '@mui/icons-material'
import img1 from './images/1.jpg'

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
                 <li className="leftbarFriend">
                     <img src={img1} alt="" className="leftbarFriendsImg" />
                     <span className="leftbarFriendName">Иван Иванов</span>
                 </li>
                 <li className="leftbarFriend">
                     <img src={img1} alt="" className="leftbarFriendsImg" />
                     <span className="leftbarFriendName">Вася Васин</span>
                 </li>
                 <li className="leftbarFriend">
                     <img src={img1} alt="" className="leftbarFriendsImg" />
                     <span className="leftbarFriendName">Вася Иванов</span>
                 </li>
                 <li className="leftbarFriend">
                     <img src={img1} alt="" className="leftbarFriendsImg" />
                     <span className="leftbarFriendName">Иван Васин</span>
                 </li>
                 <li className="leftbarFriend">
                     <img src={img1} alt="" className="leftbarFriendsImg" />
                     <span className="leftbarFriendName">Федор Иванов</span>
                 </li>
                 <li className="leftbarFriend">
                     <img src={img1} alt="" className="leftbarFriendsImg" />
                     <span className="leftbarFriendName">Иван Федоров</span>
                 </li>
                 <li className="leftbarFriend">
                     <img src={img1} alt="" className="leftbarFriendsImg" />
                     <span className="leftbarFriendName">Федор Васин</span>
                 </li>
                 <li className="leftbarFriend">
                     <img src={img1} alt="" className="leftbarFriendsImg" />
                     <span className="leftbarFriendName">Игорь Акинфеев</span>
                 </li>
                 <li className="leftbarFriend">
                     <img src={img1} alt="" className="leftbarFriendsImg" />
                     <span className="leftbarFriendName">Игорь Дивеев</span>
                 </li>
                 <li className="leftbarFriend">
                     <img src={img1} alt="" className="leftbarFriendsImg" />
                     <span className="leftbarFriendName">Виктор Васин</span>
                 </li>
             </ul>
            </div>
        </div>
    )
}
