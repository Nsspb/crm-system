import React from 'react'
import "./friend.css"


export default function Friend(user) {
    return (
        <li className="leftbarFriend">
        <img src="" alt="" className="leftbarFriendsImg" />
        <span className="leftbarFriendName">{user.username}</span>
    </li>
    )
}
