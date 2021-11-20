import './emojiChecker.css';

export default function EmojiChecker(props)
{
    const valueIs = "Enter label for ";
    return (
        <div className = "emoji-card" >
            <input type="checkbox" id={props.type} name={props.type} value={props.type}/>
            <img 
                src={props.img}
                style={{ width: 60, height: 70 , margin: 10}} 
                alt={props.type}
            />
            <form>
                <label>
                    <input className="input-text-Style" type="text" value={valueIs} />
                </label>
            </form>
        </div>
    );
}