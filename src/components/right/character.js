import './character.css';
import React from 'react';
import Dicha from './dicha';
import axios from 'axios';

function Character(props) {
  const { dichas } = props;

  // 在 useEffect 中发送数据，并将 dichas 添加为依赖项
  React.useEffect(() => {
    const sendData = async () => {
      try {
        await axios.post('http://localhost:8080/api/dichas', dichas);
        console.log('Data sent successfully');
      } catch (error) {
        console.error('Error sending data:', error);
      }
    };

    sendData();

  }, [dichas]); // 将 dichas 添加到依赖数组中

  // Dynamically generate Dicha components based on the data
  const dichaComponents = dichas.map((dicha, index) => (
    <Dicha key={index} name={dicha.name} startsay={dicha.startsay}/>
  ));

  return (
    <div>
      <div className="Chamenu">
        <React.StrictMode>
          {dichaComponents}
        </React.StrictMode>
      </div>
    </div>
  );
}

export default Character;
