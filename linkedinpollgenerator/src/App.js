import './App.css';
import EmojiChecker from './components/emojiChecker';

import heart from './assests/images/Linkedin-Heart.png';
import like from './assests/images/LinkedIn-Like.png';
import support from './assests/images/Linkedin-Support.png';
import insight from './assests/images/Linkedin-Insightful.png';
import curious from './assests/images/Linkedin-Curious.png';
import celebrate from './assests/images/Linkedin-Celebrate.png';

function App() {
  return (
    <div className="App">
      <h1>LinkedIn Reaction Poll Generator</h1>
      <div>
        <form>
          <label>
            <input type="text" value="Poll Title"/>
          </label>
        </form>
        <p>POLL PERVIEW</p>
      </div>
      <div className="App-header">
        <EmojiChecker type="like" img={like}/>
        <EmojiChecker type="celebrate" img={celebrate}/>
        <EmojiChecker type="support" img={support}/>
        <EmojiChecker type="heart" img={heart}/>
        <EmojiChecker type="insight" img={insight}/>
        <EmojiChecker type="curious" img={curious}/>
      </div>
      <button type = "submit">
        Submit and Download
      </button>
    </div>
  );
}

export default App;
