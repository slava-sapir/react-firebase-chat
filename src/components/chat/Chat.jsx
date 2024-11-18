import "./chat.css";
import { useState } from "react";
import EmojiPicker from "emoji-picker-react";
const Chat = () => {    
    const [open, setOpen] = useState(false);
    const [text, setText] = useState("");

    const handleEmoji = e => {
        setText( (prev) => prev + e.emoji);
        setOpen(false);
    }
    return (    
        <div className="chat">
            <div className="top">
              <div className="user">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                  <span>John Doe</span>       
                  <p>Lorem Ipsum</p>      
                </div>
              </div>    
              <div className="icons">
                <img src="./phone.png" alt="" />
                <img src="./video.png" alt="" />
                <img src="./info.png" alt="" />
              </div>
            </div>        
            <div className="center"></div>  
            <div className="bottom">
                <div className="icons">
                    <img src="./img.png" alt="" />
                    <img src="./camera.png" alt="" />
                    <img src="./mic.png" alt="" />
                </div>
                <input 
                type="text" 
                value={text} 
                onChange={(e) => setText(e.target.value)} 
                placeholder="Type a message..." />
                <div className="emoji">
                    <img src="./emoji.png" 
                    alt="" 
                    onClick={() => setOpen((prev) => !prev)}
                    />
                    <div className="emojiPicker">
                      <EmojiPicker  open={open} onEmojiClick={handleEmoji}/>
                    </div>
                </div>
                <button className="sendButton">Send</button>
            </div>
        </div>        
             
    )    
}                
export default Chat


