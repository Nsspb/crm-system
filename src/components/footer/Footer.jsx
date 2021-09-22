import './footer.css'
import Share  from '../share/Share'
import Post from '../post/Post'
import {Posts} from "../../dummyData" 


export default function Footer() {
    return (
        <div className='footer' >
           <div className="footerWrapper">
               <Share />
               {Posts.map((p) =>(
                   <Post key={p.id} post={p}/>
                   ))}
    
           </div>
        </div>
    )
}
