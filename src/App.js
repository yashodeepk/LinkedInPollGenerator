import './App.css';
import { AiOutlineArrowUp } from 'react-icons/ai';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';

import heart from './assests/images/Linkedin-Heart.png';
import like from './assests/images/LinkedIn-Like.png';
import support from './assests/images/Linkedin-Support.png';
import insight from './assests/images/Linkedin-Insightful.png';
import curious from './assests/images/Linkedin-Curious.png';
import celebrate from './assests/images/Linkedin-Celebrate.png';

//import Canvas from './components/Canvas';
import {useState} from 'react';
function App() {
  const [reactionTitle, setReactionTitle] = useState('What do you prefer?');

  const [showLikeIcon, setLikeIcon] = useState({
    isShowing: true,
    title: "Work From Home"
  });

  const [showHeartIcon, setHeartIcon] = useState({
    isShowing: true,
    title: "Work From Office"
  });

  const [showCelebrateIcon, setCelebrateIcon] = useState({
    isShowing: false,
    title: ""
  });

  const [showSupportIcon, setSupportIcon] = useState({
    isShowing: false,
    title: ""
  });

  const [showInsightIcon, setInsightIcon] = useState({
    isShowing: true,
    title: "Hybrid"
  });

  const [showCuriousIcon, setCuriousIcon] = useState({
    isShowing: false,
    title: ""
  });

  function downloadimg() {
    const options = { width: 542, height: 400 }
    const nodeElement = document.querySelector('.canvas')
    domtoimage.toBlob(nodeElement, options).then(function (blob) {
      window.saveAs(blob, `${reactionTitle}_Generator_Image`)
    })
  }

  return (
    <div className = "App">
      <h1>LinkedIn Reaction Poll Generator</h1>
      <div>
        <label style={{fontSize: 20, margin: 10}}>
          Poll Title: 
          <input 
            type="text" 
            placeholder="Poll Title" 
            value={reactionTitle} 
            onChange={(e) => setReactionTitle(e.target.value)}
            style={{fontSize: 20, width: 350, margin: 10}}
          />
        </label>
      </div>
      <Canvas />
      <div className='iconGrid'>
        <div className='iconShow'>
          <div className='iconGroup'>
            <input 
              type="checkbox" 
              id="like" 
              name="like" 
              value="like"
              onChange={(e) => {
                setLikeIcon({
                  isShowing: e.target.checked,
                  title: showLikeIcon.title
                })
              }}
              checked = {showLikeIcon.isShowing}
            />
            <img 
              src={like}
              style={{ width: 70, height: 70 , margin: 10}} 
              alt="like"
            />
          </div>
          <label>
              <input 
                className="input-text-Style" 
                type="text" 
                onChange={(e) => {
                  setLikeIcon({
                    isShowing: showLikeIcon.isShowing,
                    title: e.target.value
                  });
                }} 
                value={showLikeIcon.title} 
                placeholder= "Enter Label For Like Icon" />
          </label>
        </div>

        <div className='iconShow'>
          <div className='iconGroup'>
            <input 
              type="checkbox" 
              id="Celebrate" 
              name="Celebrate" 
              value="Celebrate"
              onChange={(e) => {
                setCelebrateIcon({
                  isShowing: e.target.checked,
                  title: showCelebrateIcon.title
                })
              }}
              checked = {showCelebrateIcon.isShowing}
            />
            <img 
              src={celebrate}
              style={{ width: 70, height: 70 , margin: 10}} 
              alt="Celebrate"
            />
          </div>
          <label>
              <input 
                className="input-text-Style" 
                type="text" 
                onChange={(e) => {
                  setCelebrateIcon({
                    isShowing: showCelebrateIcon.isShowing,
                    title: e.target.value
                  });
                }} 
                value={showCelebrateIcon.title} 
                placeholder= "Enter Label For Celebrate Icon" />
          </label>
        </div>
        
        <div className='iconShow'>
          <div className='iconGroup'>
            <input 
              type="checkbox" 
              id="Support" 
              name="Support" 
              value="Support"
              onChange={(e) => {
                setSupportIcon({
                  isShowing: e.target.checked,
                  title: showSupportIcon.title
                })
              }}
              checked = {showSupportIcon.isShowing}
            />
            <img 
              src={support}
              style={{ width: 70, height: 70 , margin: 10}} 
              alt="Support"
            />
          </div>
          <label>
              <input 
                className="input-text-Style" 
                type="text" 
                onChange={(e) => {
                  setSupportIcon({
                    isShowing: showSupportIcon.isShowing,
                    title: e.target.value
                  });
                }} 
                value={showSupportIcon.title} 
                placeholder= "Enter Label For Support Icon" />
          </label>
        </div>

        <div className='iconShow'>
          <div className='iconGroup'>
            <input 
              type="checkbox" 
              id="Heart" 
              name="Heart" 
              value="Heart"
              onChange={(e) => {
                setHeartIcon({
                  isShowing: e.target.checked,
                  title: showHeartIcon.title
                })
              }}
              checked = {showHeartIcon.isShowing}
            />
            <img 
              src={heart}
              style={{ width: 70, height: 70 , margin: 10}} 
              alt="Heart"
            />
          </div>
          <label>
              <input 
                className="input-text-Style" 
                type="text" 
                onChange={(e) => {
                  setHeartIcon({
                    isShowing: showHeartIcon.isShowing,
                    title: e.target.value
                  });
                }} 
                value={showHeartIcon.title} 
                placeholder= "Enter Label For Heart Icon" />
          </label>
        </div>

        <div className='iconShow'>
          <div className='iconGroup'>
            <input 
              type="checkbox" 
              id="Insight" 
              name="Insight" 
              value="Insight"
              onChange={(e) => {
                setInsightIcon({
                  isShowing: e.target.checked,
                  title: showInsightIcon.title
                })
              }}
              checked = {showInsightIcon.isShowing}
            />
            <img 
              src={insight}
              style={{ width: 45, height: 70 , margin: 10}} 
              alt="Insight"
            />
          </div>
          <label>
              <input 
                className="input-text-Style" 
                type="text" 
                onChange={(e) => {
                  setInsightIcon({
                    isShowing: showInsightIcon.isShowing,
                    title: e.target.value
                  });
                }} 
                value={showInsightIcon.title} 
                placeholder= "Enter Label For Insight Icon" />
          </label>
        </div>

        <div className='iconShow'>
          <div className='iconGroup'>
            <input 
              type="checkbox" 
              id="Curious" 
              name="Curious" 
              value="Curious"
              onChange={(e) => {
                setCuriousIcon({
                  isShowing: e.target.checked,
                  title: showCuriousIcon.title
                })
              }}
              checked = {showCuriousIcon.isShowing}
            />
            <img 
              src={curious}
              style={{ width: 70, height: 70 , margin: 10}} 
              alt="Curious"
            />
          </div>
          <label>
              <input 
                className="input-text-Style" 
                type="text" 
                onChange={(e) => {
                  setCuriousIcon({
                    isShowing: showCuriousIcon.isShowing,
                    title: e.target.value
                  });
                }} 
                value={showCuriousIcon.title} 
                placeholder= "Enter Label For Curious Icon" />
          </label>
        </div>
      </div>
      <button className="submit-button" onClick={downloadimg}>Download</button>
      <p id="footer">Made with ❤️ by <a href="https://www.linkedin.com/in/yashodeep-kacholiya-84904911b/">Yashodeep Kacholiya</a></p>
      <p id="footer">Special Mentions! Mentor: <a href="https://www.linkedin.com/in/alexander-chiou/">Alex Chiou </a> 
      and <a href="https://www.linkedin.com/in/rpandey1234/"> Rahul pandey </a>
       Design: <a href="https://www.linkedin.com/in/luke-hovee-2433b7b4/"> Luke Hovee</a></p>
    </div>
  );
  
  function Canvas() {
    return(
      <div className='box'>
        <div className='canvas'>
          <h1 className='titleRef'>{reactionTitle}</h1>
          <div className='imageGrid'>
            {showLikeIcon.isShowing && (
                <div className='displayIcon'>
                  <p>{showLikeIcon.title}</p>
                  <div className='previewGroup'>
                    <AiOutlineArrowUp size={28} id="likeIcon" className='arrowIcon'/>
                    <img src={like} alt='Like Icon'/>
                  </div>
                </div>
              )
            }

            {showCelebrateIcon.isShowing && (
                <div className='displayIcon'>
                  <p>{showCelebrateIcon.title}</p>
                  <div className='previewGroup'>
                    <AiOutlineArrowUp size={28} id="celebrateIcon" className='arrowIcon'/>
                    <img src={celebrate} alt='celebrate Icon'/>
                  </div>
                </div>
              )
            }

            {showHeartIcon.isShowing && (
                <div className='displayIcon'>
                  <p>{showHeartIcon.title}</p>
                  <div className='previewGroup'>
                    <AiOutlineArrowUp size={28} id="heartIcon" className='arrowIcon'/>
                    <img src={heart} alt='Heart Icon'/>
                  </div>
                </div>
              )
            }

            {showSupportIcon.isShowing && (
                <div className='displayIcon'>
                  <p>{showSupportIcon.title}</p>
                  <div className='previewGroup'>
                    <AiOutlineArrowUp size={28} id="supportIcon" className='arrowIcon'/>
                    <img src={support} alt='Support Icon'/>
                  </div>
                </div>
              )
            }

            {showInsightIcon.isShowing && (
                <div className='displayIcon'>
                  <p>{showInsightIcon.title}</p>
                  <div className='previewGroup'>
                    <AiOutlineArrowUp size={28} id="insightIcon" className='arrowIcon'/>
                    <img src={insight} alt='Insight Icon'/>
                  </div>
                </div>
              )
            }

            {showCuriousIcon.isShowing && (
                <div className='displayIcon'>
                  <p>{showCuriousIcon.title}</p>
                  <div className='previewGroup'>
                    <AiOutlineArrowUp size={28} id="curiousIcon" className='arrowIcon'/>
                    <img src={curious} alt='Curious Icon'/>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </div>
    );
  }
}
export default App;
