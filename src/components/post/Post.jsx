import './post.css'
import img1 from './images/1.jpeg'
import mops from './images/mops.jpeg'
import likes from './images/like.png'
import heart from './images/hearth.png'
import {MoreVert} from '@mui/icons-material'
import {Users} from "../../dummyData" 
import { useState } from 'react'

export default function Post({post}) {
    const [like, setLike] = useState(post.like)
    const [isLike, setIsLike] = useState(false)
    const likeHandler =() => {
        setLike(isLike ? like -1 : like+1) 
        setIsLike (!isLike)

    }

    return (
        <div className='post' >
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={img1} alt="" className="postProfileImg" />
                        <span className="postUserName">{Users.filter((u) => u.id === post?.userId)[0].username}</span>

                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className='postImg' src={mops} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                <img className='likeIcon' src={likes} alt=""  onClick={likeHandler}/>
                <img className='likeIcon' src={heart} alt="" onClick={likeHandler}/>
                <span className="postLikeCounter">{like}</span>
                    </div>
                    <div className="postBottomRight">
            <span className="postCommentText">{post.comment} комментариев</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
