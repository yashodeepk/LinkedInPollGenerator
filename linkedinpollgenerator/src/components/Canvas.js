import React, { Component } from 'react';
import './ImageEditor.css';

import heart from '../assests/images/Linkedin-Heart.png';
import like from '../assests/images/LinkedIn-Like.png';
import support from '../assests/images/Linkedin-Support.png';
import insight from '../assests/images/Linkedin-Insightful.png';
import curious from '../assests/images/Linkedin-Curious.png';
import celebrate from '../assests/images/Linkedin-Celebrate.png';

import EmojiChecker from './emojiChecker';

class ImageEditor extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      title: "",
      imgData: "",      
      mainCanvasVisibleStyle: {
        display: 'inline-block'
      },
      isSelectDisabled: true,
    }
    this.handleTitleChange = this.handleTitleChange.bind(this);
  }
    

  handleTitleChange(event) {
    this.setState({title: event.target.value});
    this.showText(this.state.title);
  }
  
  getCanvasMidPoint()
  {
    const canvas = this.refs.resultCanvas;
    let xPoint = canvas.width /2 - this.state.selection.width / 2;
    let yPoint = canvas.height /2 - this.state.selection.height / 2;
    return {
      x: xPoint,
      y: yPoint
    };
  }
  
  showText(title){
    let canvas =  this.refs.resultCanvas;
    const context = canvas.getContext("2d");
    let _this = this;
    context.font = "60px Arial";
    context.fillStyle = "red";
    context.clearRect(0, 0, canvas.width, canvas.height); 
    context.fillText(title,10, 50);
    _this.setState({imgData: canvas.toDataURL('image/jpeg')});
    _this.setState({isSelectDisabled: false});
  }

  showImage(){
    let canvas =  this.refs.resultCanvas;
    const context = canvas.getContext("2d"); 
    let _this = this;
    var image = new Image();
    image.src = heart;
    image.onload = function() {  
      context.clearRect(0, 0, canvas.width, canvas.height); 
      let imgSize = {
        width: image.width,
        height: image.height
      };
      _this.setState({selection: imgSize}); 
      context.save();
      context.translate(_this.getCanvasMidPoint().x, _this.getCanvasMidPoint().y);      
      context.drawImage(image, 0, 0);
      context.restore();
      _this.setState({imgData: canvas.toDataURL('image/jpeg')});
      _this.setState({isSelectDisabled: false});
    };
  }

  loadCanvas(imgData){
    let canvas =  this.refs.resultCanvas;
    const context = canvas.getContext("2d"); 
    let _this = this;
    
    var image = new Image();
    image.onload = function() {  
      context.clearRect(0, 0, canvas.width, canvas.height); 
      let imgSize = {
        width: image.width,
        height: image.height
      };
      _this.setState({selection: imgSize}); 
      context.save();
      context.translate(_this.getCanvasMidPoint().x, _this.getCanvasMidPoint().y);      
      context.drawImage(image, 0, 0);
      context.restore();
      _this.setState({imgData: canvas.toDataURL('image/jpeg')});
      _this.setState({isSelectDisabled: false});
    };
    image.src =  this.state.imgData;
  }

  
  
  loadFile()
  {
     var file = document.querySelector('input[type=file]').files[0];
     var reader = new FileReader();
     var _this = this;

     reader.onloadend = function () {
       _this.setState({imgData: reader.result});
       _this.loadCanvas(reader.result);           
     }
     
     if (file) {
       reader.readAsDataURL(file); 
     }   
  }


  downloadImg()
  {
    console.log("downloadImg");
    console.log(this.state.imgData);
    var dt = this.state.imgData;
    this.refs.downloadBtn.href = dt;
  }



  render(){
    return (
      <div class="imageEditor"> 
        <h1>LinkedIn Reaction Poll Generator</h1>
        {/* <img src={heart} /> */}
        <div className="preview">
          <input 
            type="text" 
            placeholder="Poll Title" 
            value={this.state.title} 
            onChange={this.handleTitleChange}
            style={{fontSize: 20, width: 350}}
          />
        </div>       
        <canvas className="canvas" ref="resultCanvas" style={this.state.mainCanvasVisibleStyle} width="1200" height="628"/>
        <div className = "icongrid">
          <EmojiChecker type="like" img={like}/>
          <EmojiChecker type="celebrate" img={celebrate}/>
          <EmojiChecker type="support" img={support}/>
          <EmojiChecker type="heart" img={heart}/>
          <EmojiChecker type="insight" img={insight}/>
          <EmojiChecker type="curious" img={curious}/>
        </div>
        <a id="download" ref="downloadBtn" onClick={this.downloadImg.bind(this)} download="LinkeIn_Reaction_Poll_Image.jpg" href={this.state.imgData}> 
          <button disabled={this.state.isSelectDisabled} className="submit-button">Download</button>
        </a>
        <p id="footer">Made with ❤️ by <a href="https://www.linkedin.com/in/yashodeep-kacholiya-84904911b/">Yashodeep Kacholiya</a></p>
      </div>
    );
  }  

}
export default ImageEditor;