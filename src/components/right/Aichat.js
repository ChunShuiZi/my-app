import './Aichat.css';
import AI from './../../resourse/MLS.png'
function Aichat(props) {
    return (
<div className="Aichat">
    <img src={AI} className="Aichatpicture" alt="es-lint want to get"></img>
    <div className="AichatText">
    {props.message}
    </div>
</div>
  );
}

export default Aichat;