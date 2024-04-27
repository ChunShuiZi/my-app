import './login.css';
import React from 'react';
function Login() {
    return (
        <div>
        <div className="Loginmenu">
            <div className="ipbox">
            <div className='Remaintext'>
            在此输入您的OpenAI密钥
            </div>
            <div className='Textbox2'>
            <input className="LoginText" type='password'>

            </input>
            </div>
            <div className='Loginbutton' align="center">
              Login
            </div>
            <a href="https://platform.openai.com/api-keys">
            <div className='Getbutton' align="center">
              Get a Key
            </div>
            </a>
            </div>
            <div className='notice' >
            <div className='notice2' >
              <p className='title' align="center">提示</p>
              &emsp;&emsp;本程序是基于OpenAI构建的一款人工智能对话程序,
              使用本程序需要获得一个OpenAI提供的api密钥,
              点击"Get Key"访问OpenAI官网获取一个访问密钥并在上方输入,
              即可体验完整的对话功能。</div>
              <p align="center" className='connect'>作者联系方式&thinsp;:&thinsp;https://github.com/ChunShuiZi</p>
            </div>
        </div>
        </div>
  );
}

export default Login;