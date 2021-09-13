import './footer.css'
import Share  from '../share/Share'
import Post from '../post/Post'

export default function Footer() {
    return (
        <div className='footer' >
           <div className="footerWrapper">
               <Share />
               <Post />
               <Post />
               <Post />
           </div>
        </div>
    )
}
