import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Leftbar from "../../components/leftbar/Leftbar";
import Rightbar from "../../components/rightbar/Rightbar";
import "./home.css"


export default function Home() {
    return (
        <>
           <Header />
           <div className="homeContainer">
           <Leftbar />
           <Footer />
           <Rightbar />
           </div>
          
           
        </>
    )
}
