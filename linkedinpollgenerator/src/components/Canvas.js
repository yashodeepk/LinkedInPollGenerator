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
      emojiCount: 2,
      imgWidth: 150,
      imgHeight: 150,
      xPosition: 350,
      yPosition: 350,
      checked: [false,false,false,false,false,false],
      count: 1,
      constantDistance: 350,
      title: '',
      imgData: "",      
      mainCanvasVisibleStyle: {
        display: 'inline-block'
      },
      isSelectDisabled: true,
    }
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.addEmoji = this.addEmoji.bind(this);
    this.handleEmojiChange = this.handleEmojiChange.bind(this);
  }

  componentDidMount()
  {
    let canvas =  this.refs.resultCanvas;
    this.setState({xPosition: canvas.width/4-75});
    this.setState({constantDistance: canvas.width/2});
  }

  handleEmojiChange(event) {
    if(event.target.value>=1 && event.target.value <=4)
    {
      let canvas =  this.refs.resultCanvas;
      const context = canvas.getContext("2d"); 
      context.clearRect(0,0,canvas.width, canvas.height);
      this.setState({emojiCount: event.target.value});
      this.setState({count: 1});
      console.log(event.target.value);
      this.setState({checked: [false,false,false,false,false,false]});
      switch(event.target.value)
      {
        case '1':
          console.log("in 1st case");
          this.setState({xPosition: canvas.width/2-75});
          break;
        case '2':
          this.setState({xPosition: canvas.width/4-75});
          this.setState({constantDistance: canvas.width/2});
          break;
        case '3':
          this.setState({xPosition: canvas.width/4-75});
          this.setState({constantDistance: canvas.width/4});
          break;
        case '4':
          this.setState({xPosition: canvas.width/8-75});
          this.setState({constantDistance: canvas.width/4});
          break;
        case '5':
          break;
        case '6':
          break;
        default:
          console.log('In Switch Case');
      }
    }
  }

  handleTitleChange(event) {    
    this.setState({title: event.target.value});
    this.showText(event.target.value);
  }

  getCanvasMidPoint()
  {
    const canvas = this.refs.resultCanvas;
    let xPoint = canvas.width /2;
    let yPoint = canvas.height /2;
    return {
      x: xPoint,
      y: yPoint
    };
  }
  
  showText(title){
    let canvas =  this.refs.resultCanvas;
    const context = canvas.getContext("2d");
    let _this = this;
    
    context.save();
    context.font = "bold 55px Arial";
    context.clearRect(0, 0, canvas.width, 150);
    context.textAlign = 'center';
    context.fillText(title,canvas.width/2, 100);
    context.restore();

    _this.setState({imgData: canvas.toDataURL('image/jpeg')});
    _this.setState({isSelectDisabled: false});
  }

  showImage(type){
    let canvas =  this.refs.resultCanvas;
    const context = canvas.getContext("2d"); 
    let _this = this;

    let imageWidth = this.state.imgWidth;
    let imageHeight = this.state.imgHeight;
    let constantDis = this.state.constantDistance;
    let cnt = this.state.count;
    let xPos = this.state.xPosition;
    let yPos = this.state.yPosition;


    var image = new Image();
    if(type === "heart") image.src = heart;
    else if(type === "like") image.src = like;
    else if(type === "celebrate") image.src = celebrate;
    else if(type === "support") image.src = support;
    else if(type === "insight") image.src = insight;
    else if(type === "curious") image.src = curious;
    image.onload = function() {
      context.save();
      context.textAlign = 'center';     
      context.drawImage(image, xPos + constantDis*(cnt - 1), yPos, imageWidth, imageHeight);
      context.restore();
      _this.setState({imgData: canvas.toDataURL('image/jpeg')});
      _this.setState({isSelectDisabled: false});
    };

    this.setState({count: cnt+1});
  }

  downloadImg()
  {
    let canvas =  this.refs.resultCanvas;
    const context = canvas.getContext("2d");
    let _this = this;
    context.globalCompositeOperation = 'destination-over'
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);
    _this.setState({imgData: canvas.toDataURL('image/jpeg')});
    _this.setState({isSelectDisabled: false});
    console.log("downloadImg");
    console.log(this.state.imgData);
    var dt = this.state.imgData;
    this.refs.downloadBtn.href = dt;
  }

  addEmoji = (checked, type) =>
  {
    if(checked)
    {
      if(this.state.count <= this.state.emojiCount)
      {
        this.showImage(type);
        console.log("Emoji added");
      }
    }
    else
    {
      let canvas =  this.refs.resultCanvas;
      const context = canvas.getContext("2d"); 
      context.clearRect(0,0,canvas.width, canvas.height);
      this.setState({count: 1});
      //window.location.reload(false);
      this.setState({checked: [false,false,false,false,false,false]});
      this.setState({});
    }
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
          <label style={{fontSize: 20, marginLeft: 10}}>
            Icon Count
          </label>
          <input 
            type="number" 
            placeholder="EmojiCount" 
            value={this.state.emojiCount} 
            onChange={this.handleEmojiChange}
            style={{fontSize: 20, width: 50, marginLeft: 4}}
          />
        </div>       
        <canvas className="canvas" ref="resultCanvas" style={this.state.mainCanvasVisibleStyle} width="1200" height="628"/>
        <div className = "icongrid">
          <EmojiChecker type="like" img={like} addEmoji = {this.addEmoji} checked = {this.state.checked[0]}/>
          <EmojiChecker type="celebrate" img={celebrate} addEmoji = {this.addEmoji} checked = {this.state.checked[1]}/>
          <EmojiChecker type="support" img={support} addEmoji = {this.addEmoji} checked = {this.state.checked[2]}/>
          <EmojiChecker type="heart" img={heart} addEmoji = {this.addEmoji} checked = {this.state.checked[3]}/>
          <EmojiChecker type="insight" img={insight} addEmoji = {this.addEmoji} checked = {this.state.checked[4]}/>
          <EmojiChecker type="curious" img={curious} addEmoji = {this.addEmoji} checked = {this.state.checked[5]}/>
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