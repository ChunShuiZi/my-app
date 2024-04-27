import './rightchatmenu.css';
import React, { useState } from 'react';
import Aichat from './Aichat';
import Mychat from './Mychat';
import OpenAI from "openai";
import axios from 'axios';

const openai = new OpenAI({
    apiKey: "",
    dangerouslyAllowBrowser: true
});

function Rightchatmenu(props) {
    const { chats, setChats } = props; // Receive chats and setChats function from parent component
    const [sendtext, setSendtext] = useState(''); // State to store the value of sendtext

    let chatsComponents;

    if (chats && Array.isArray(chats)) {
        chatsComponents = chats.map((chat, index) => {
            if (chat.index === 0) {
                return <Aichat key={index} message={chat.message.content} />;
            } else if (chat.index === 1) {
                return <Mychat key={index} message={chat.message.content} />;
            } else {
                // Handle other cases if needed
                return null;
            }
        });
    } else {
        // Handle case where chats is not present or not an array
        chatsComponents = null;
    }

    const handleSend = async () => {
        try {
            const completion = await openai.chat.completions.create({
                messages: [{ role: "user", content: sendtext }],
                model: "gpt-3.5-turbo",
            });
            const responseData = completion.choices[0];
            if (responseData) {
                // 添加用户发送的消息到 chats 中
                setChats(chats => [...chats, { index: 1, message: { content: sendtext } }]);
                // 添加 AI 返回的消息到 chats 中
                setChats(chats => [...chats, responseData]);
            }
                if (responseData) {   
                    // 发送数据到后端
                    await axios.post('http://localhost:8080/api/saveChats', chats.map(chat => ({
                        index: chat.index,
                        message: chat.message.content, // 根据 ChatMessage 类的结构获取消息内容
                        timestamp: chat.message.timestamp // 如果有时间戳的话
                    })));
                    
                
            }
        } catch (error) {
            console.error('Error:', error);
        }
        setSendtext(''); // 清空 sendtext
    };

    return (
        <div>
            <div className="Chatmenu">
                <React.StrictMode>
                    {chatsComponents}
                </React.StrictMode>
            </div>
            <div className="Textbox">
                <textarea className="ChatText" value={sendtext} onChange={(e) => setSendtext(e.target.value)}>
  
                </textarea>
            </div>
            <div className="Setbox" align="center" onClick={handleSend}>
                Send
            </div>
        </div>
    );
}

export default Rightchatmenu;
