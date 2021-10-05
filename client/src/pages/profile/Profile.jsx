import "./profile.css";
import Header from "../../components/header/Header";
import Leftbar from "../../components/leftbar/Leftbar";
import Footer from "../../components/footer/Footer"
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {
  return (
    <>
      <Header />
      <div className="profile">
        <Leftbar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="assets/post/3.jpeg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="assets/person/7.jpeg"
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Сергей Иванов!</h4>
                <span className="profileInfoDesc">Всем привет!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Footer />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}
