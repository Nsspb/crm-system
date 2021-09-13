import './rightbar.css'
import present from './images/birthday.png'
import reclama from './images/reclama.gif'
import img2 from './images/2.jpeg'

export default function Rightbar() {
    return (
        <div className='rightbar' >
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img src={present} alt="" className="birthdayImg" />
                    <span className="birthdayText">
                        <b>Екатерина</b> и <b> друзья </b> празднуют день рождения   
                    </span>
                </div>
                <img src={reclama} alt="" className="righthbarReclama" />
                <h4 className="rightbarTitle">Друзья онлайн</h4>
                <ul className="rightbarFriendsList">
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img src={img2} alt="" className="rightbarProfileImg" />
                            <span className="rightbarOnline"></span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
