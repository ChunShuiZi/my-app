import './Mainmenu.css';
import BackgroundMusic from '../resourse/bgm.js'
import Leftmenu from './left/leftmenu.js';
import Rightchatmenu from './right/rightchatmenu.jsx';
import Login from './right/login.js';
import Character from './right/character.js';
import React, { useState ,useEffect } from 'react';
import OpenAI from "openai"

const openai = new OpenAI({apiKey:"",
 dangerouslyAllowBrowser:true });


function Mainmenu() {

  const [actions,setactions] = useState([]);
  const [dichas, setDichas] = useState([]);
  const [chats,setchats] = useState([]);

  useEffect(() => {  
    Promise.all([
      fetch('http://localhost:8080/actions').then(response => response.json()),
      fetch('http://localhost:8080/dichas').then(response => response.json()),
      // main().then(responseData => responseData)
    ])
    .then(([actionsData, dichasData]) => {
      console.log("Data received:", actionsData, dichasData);
      setactions(actionsData);
      setDichas(dichasData);
      // setchats(chats => [...chats, responseData]);
    })
    .catch(error => {  
      console.error('Error:', error);  
    });  
  }, []);


  const [showRightChatMenu, setShowRightChatMenu] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [showCharacterMenu, setShowCharacterMenu] = useState(false);

// 创建一个 useRef 来引用组件



  const handleLoginButtonClick = () => {
    setShowRightChatMenu(false);
    setShowLogin(true);
    setShowCharacterMenu(false);
    
  };

  const handleCreateChatButtonClick = () => {
    setShowCharacterMenu(true);
    setShowLogin(false);
    setShowRightChatMenu(false);
  
  };

  const handleChatButtonClick = () => {
    setShowCharacterMenu(false);
    setShowLogin(false);
    setShowRightChatMenu(true);
  };
  
  useEffect(() => {
    if (showRightChatMenu) {
      async function main() {
        try {
          const completion = await openai.chat.completions.create({
            messages: [{ role: "user", content: "请说:开始对话吧！"}],
            model: "gpt-3.5-turbo",
          });
          return completion.choices[0];
        } catch (error) {
          console.error('Error:', error);
          return null;
        }
      }
  
      setTimeout(function() {
        // 调用main函数
        main()
        .then(responseData => {
            // 将API响应数据存入chats数组
            if (responseData) {
                setchats(chats => [...chats, responseData]);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }, 2000);
    }
  }, [showRightChatMenu]);

  return (
    <div>
      <div className="Mainmenu">

        <div className="Actionmainmenu" >
          <Leftmenu
            actions={actions}
            handleChatButtonClick={handleChatButtonClick}
            handleLoginButtonClick={handleLoginButtonClick}
            handleCreateChatButtonClick={handleCreateChatButtonClick}
          />
        </div>

        <div className="Chatmainmenu">
        <div className={`character-menu ${showCharacterMenu ? 'slide-in' : ''}`}>
          {showCharacterMenu && <Character dichas={dichas} />}
          </div>
          <div className={`right-chat-menu ${showRightChatMenu ? 'slide-in' : ''}`}>
          {showRightChatMenu && <Rightchatmenu chats={chats} setChats={setchats} />}
          </div>
        <div className={`login-menu ${showLogin ? 'slide-in' : ''}`}>
          {showLogin && <Login />}
        </div>
       </div>
       </div>



      <div className="footer">
        Copyright © 2024 纯水子 &ensp;|&ensp;
        All Rights Reserved.<BackgroundMusic />
      </div>
      
    </div>
  );
}

export default Mainmenu;