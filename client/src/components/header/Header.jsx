import './header.css';
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Header() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="headerContainer">
      <div className="headerLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Просто логотип</span>
        </Link>
      </div>
      <div className="headerCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="headerRight">
        <div className="headerLinks">
          <span className="headerLink">Домашняя страница</span>
          <span className="headerLink">История</span>
        </div>
        <div className="headerIcons">
          <div className="headerIconItem">
            <Person />
            <span className="headerIconBadge">1</span>
          </div>
          <div className="headerIconItem">
            <Chat />
            <span className="headerIconBadge">2</span>
          </div>
          <div className="headerIconItem">
            <Notifications />
            <span className="headerIconBadge">3</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/noAvatar.png"
            }
            alt=""
            className="headerImg"
          />
        </Link>
      </div>
    </div>
  );
}