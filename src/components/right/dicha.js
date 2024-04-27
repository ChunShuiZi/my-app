import './dicha.css';
import React from 'react';

function Dicha(props) {
  
  return (
    <div className="ChaMain">
      <div className="ChaPic">
      {props.name}
      </div>
      <div className="ChaName">
      {props.startsay}
      </div>
    </div>
  );
}

export default Dicha;
