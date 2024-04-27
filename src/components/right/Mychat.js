import './Mychat.css';
import MY from './../../resourse/LM.png'
function Mychat(props) {
    return (
<div className="Mychat">
    <img src={MY} className="Mychatpicture" alt="es-lint want to get"></img>
    <div className="MychatText">
    {props.message}
    </div>
</div>
  );
}

export default Mychat;