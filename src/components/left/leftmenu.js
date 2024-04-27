import './leftmenu.css';
import Action from './Action';
import React from 'react';

function Leftmenu(props) {
  const { actions } = props; // Assuming actions is an array of action objects

  // Dynamically generate Action components based on the data
  const actionComponents = actions.map((action, index) => (
    <Action key={index} name={action.name} time={action.time} sum={action.sum} handleChatButtonClick={props.handleChatButtonClick}/>
  ));



  return (
    <div>
      <div className="Actionmenu">
        <React.StrictMode>
          {actionComponents}
        </React.StrictMode>
      </div>
      <div className="Button" align="center"  onClick={props.handleLoginButtonClick}>
        Login
      </div>
      <div className="Button2" align="center"  onClick={props.handleCreateChatButtonClick}>
        Create Chat
      </div>
    </div>
  );
}

export default Leftmenu;