import './App.css';
import EmojiChecker from './components/emojiChecker';

import heart from './assests/images/Linkedin-Heart.png';
import like from './assests/images/LinkedIn-Like.png';
import support from './assests/images/Linkedin-Support.png';
import insight from './assests/images/Linkedin-Insightful.png';
import curious from './assests/images/Linkedin-Curious.png';
import celebrate from './assests/images/Linkedin-Celebrate.png';
import { useState } from 'react';

function App() {
  const [title, setTitle] = useState();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }
  return (
    <div className = "App">
      <h1>LinkedIn Reaction Poll Generator</h1>
      <div className="preview">
        <input 
          type="text" 
          placeholder="Poll Title" 
          value={title} 
          onChange={handleTitleChange}
          style={{fontSize: 20, width: 350}}
        />
        <p style={{margin: 20}}>POLL PERVIEW</p>
      </div>
      <div className = "icongrid">
        <EmojiChecker type="like" img={like}/>
        <EmojiChecker type="celebrate" img={celebrate}/>
        <EmojiChecker type="support" img={support}/>
        <EmojiChecker type="heart" img={heart}/>
        <EmojiChecker type="insight" img={insight}/>
        <EmojiChecker type="curious" img={curious}/>
      </div>
      <button className="submit-button">Submit and Download</button>
    </div>
  );
}

export default App;
