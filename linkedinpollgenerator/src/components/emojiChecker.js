import './emojiChecker.css';
import {useState} from 'react';

export default function EmojiChecker(props)
{
    const [isChecked, setIsChecked] = useState(false);
    const [message, setMessage] = useState("");

    const valueIs = `Enter label for ${props.type}`;

    // const handleOnChange = () => {
    //     setIsChecked(!isChecked);
    // }

    const handleTextChange = (e) => {
        setMessage(e.target.value)
    }

    return (
        <div className = "emoji-card" >
            <form>
                <input 
                    type="checkbox" 
                    id={props.type} 
                    name={props.type} 
                    value={props.type}
                    onChange={() => {
                        setIsChecked(!isChecked);
                        props.addEmoji(!isChecked,props.type);
                    }}
                    checked = {isChecked}
                />
                <img 
                    src={props.img}
                    style={{ width: 60, height: 70 , margin: 10}} 
                    alt={props.type}
                />
                <label>
                    <input className="input-text-Style" type="text" onChange={handleTextChange} value={message} placeholder={valueIs} />
                </label>
            </form>
        </div>
    );
}