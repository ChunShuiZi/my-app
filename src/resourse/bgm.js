import React, { Component } from 'react';
import BGM from './bgm1.mp3'
import './bgm.css'

class BackgroundMusic extends Component {
  constructor(props) {
    super(props);
    this.audio = new Audio(BGM);
    this.state = {
      isPlaying: false
    };
  }

  playMusic = () => {
    this.audio.play();
    this.setState({ isPlaying: true });
  };

  pauseMusic = () => {
    this.audio.pause();
    this.setState({ isPlaying: false });
  };

  render() {
    const { isPlaying } = this.state;
    return (
      <div className="bgm">
        <button onClick={isPlaying ? this.pauseMusic : this.playMusic} className="bgm1">
          {isPlaying ? '♪' : '♪'}
        </button>
      </div>
    );
  }
}

export default BackgroundMusic;