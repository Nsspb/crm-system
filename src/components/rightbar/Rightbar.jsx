import './rightbar.css'
import present from './images/birthday.png'
import reclama from './images/reclama.gif'
// import img2 from './images/2.jpeg'
import {Users} from "../../dummyData" 
import Online from '../online/Online'

export default function Rightbar(profile) {

    const HomeRightBar = () => {
       return (
            <>
                <div className="birthdayContainer">
                    <img src={present} alt="" className="birthdayImg" />
                    <span className="birthdayText">
                        <b>Екатерина</b> и <b> друзья </b> празднуют день рождения   
                    </span>
                </div>
                <img src={reclama} alt="" className="righthbarReclama" />
                <h4 className="rightbarTitle">Друзья онлайн</h4>
                <ul className="rightbarFriendsList">
                {Users.map(u=>(
                    <Online key={u.id} user = {u} />
                ))}
      
        
                </ul>

        </>
       );
    };

    const ProfileRightbar = () => {
        return (
          <>
            <h4 className="rightbarTitle">Информация о пользователе</h4>
            <div className="rightbarInfo">
              <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">Город:</span>
                <span className="rightbarInfoValue">Санкт-Петербург</span>
              </div>
           
              <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">Relationship:</span>
                <span className="rightbarInfoValue">Single</span>
              </div>
            </div>
            <h4 className="rightbarTitle">Друзья</h4>
            <div className="rightbarFollowings">
              <div className="rightbarFollowing">
                <img
                  src="assets/person/1.jpeg"
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">Вася Петров</span>
              </div>
              <div className="rightbarFollowing">
                <img
                  src="assets/person/2.jpeg"
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">Вася Петров</span>
              </div>
              <div className="rightbarFollowing">
                <img
                  src="assets/person/3.jpeg"
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">Вася Петров</span>
              </div>
              <div className="rightbarFollowing">
                <img
                  src="assets/person/4.jpeg"
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">Вася Петров</span>
              </div>
              <div className="rightbarFollowing">
                <img
                  src="assets/person/5.jpeg"
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">Вася Петров</span>
              </div>
              <div className="rightbarFollowing">
                <img
                  src="assets/person/6.jpeg"
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">Вася Петров</span>
              </div>
            </div>
          </>
        );
      };
      return (
        <div className="rightbar">
          <div className="rightbarWrapper">
            {profile ? <ProfileRightbar /> : <HomeRightBar />}
          </div>
        </div>
      );
    }