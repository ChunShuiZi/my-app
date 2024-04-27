import './Action.css';
import React from 'react';

function Action(props) {
  return (
    <div className="Action" onClick={props.handleChatButtonClick}>
      <div className="ActionTitle">
        ({props.sum}) {props.name}
      </div>
      <p></p>
      <div className="ActionText">
        {props.time}
      </div>
    </div>
  );
}

export default Action;
