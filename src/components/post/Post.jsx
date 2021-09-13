import './post.css'
import img1 from './images/1.jpeg'
import mops from './images/mops.jpeg'
import like from './images/like.png'
import heart from './images/hearth.png'
import {MoreVert} from '@mui/icons-material'

export default function Post() {
    return (
        <div className='post' >
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={img1} alt="" className="postProfileImg" />
                        <span className="postUserName">Екатерина Атяшкина</span>
                        <span className="postDate">5 минут назад</span>
                    </div>
                    <div className="postTopRight">
                <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">Первая запись</span>
                    <img className='postImg' src={mops} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                <img className='likeIcon' src={like} alt="" />
                <img className='likeIcon' src={heart} alt="" />
                <span className="postLikeCounter">18 человек оценили</span>
                    </div>
                    <div className="postBottomRight">
            <span className="postCommentText">14 комментариев</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
