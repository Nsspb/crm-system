
import './share.css'
import {PermMedia, Room, EmojiEmotions, Label} from '@mui/icons-material'
import logo from './person/autor.jpeg'

export default function Share() {
    return (
        <div className='share'>
            <div className="shareWrapper">
               
                <div className="shareTop">
                    <img src={logo} alt="" className="shareProfileImg" />
                    <input placeholder='О чем сейчас думаешь?' className="shareInput" />
                </div>
               
                <hr className='shareHr' />    
               
                <div className="shareBottom">
                    <div className="shareOptions">
                     
                        <div className="shareOption">
                            <PermMedia htmlColor='red' className='shareIcon' />
                            <span className='shareOptionText1' > Фото/видео</span>
                        </div>
                       
                        <div className="shareOption">
                            <Label  htmlColor='blue' className='shareIcon' />
                            <span className='shareOptionText' > Заметки</span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor='green' className='shareIcon' />
                            <span className='shareOptionText' > Локация</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor='rgb(213, 217, 4)' className='shareIcon' />
                            <span className='shareOptionText' > "Эмоции" </span>
                        </div>
                    </div>
                <button className='shareButton'>Поделиться</button>
                </div>
            </div>
        </div>
    )
}
