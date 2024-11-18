import { useState } from 'react'
import "./chatlist.css"
const       Chatlist = () => {    
    const [addMode, setAddMode] = useState([false]);
    return (    
        <div className="chatlist">
            <div className="search">
              <div className="searchBar">
                <img src="./search.png" alt="" />
                <input type="text" placeholder="Search..." />
              </div>
              <img 
              src={addMode ? "./minus.png" : "./plus.png"}
              alt="" 
              onClick={() => setAddMode((prev) => !prev)} 
              className="add" />
            </div>
            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className='texts'>
                  <span><b>John Doe</b></span>
                  <p>Hello</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className='texts'>
                  <span><b>John Doe</b></span>
                  <p>Hello</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className='texts'>
                  <span><b>John Doe</b></span>
                  <p>Hello</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className='texts'>
                  <span><b>John Doe</b></span>
                  <p>Hello</p>
                </div>
            </div>
        </div>        
    )    
}            
export default Chatlist