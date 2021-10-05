// import userEvent from "@testing-library/user-event"
import "./online.css"
// import img2 from './images/2.jpeg'
 
export default function Online({user}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <li className="rightbarFriend">
        <div className="rightbarProfileImgContainer">
            <img src={PF+user.profilePicture} alt="" className="rightbarProfileImg" />
            <span className="rightbarOnline"></span>
        </div>
        <span className="rightbarUserName"> {user.username} </span>
    </li>
       
    )
}
