import './MV.css';

import React, { Component } from 'react';
import VideoItem from '../../components/VideoItem/VideoItem';

class MV extends Component {
  state = {
    playerSource: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
    inputVideoUrl: 'http://www.w3schools.com/html/mov_bbb.mp4',
  };

  render() {
    return (
      <div className="mv-box">
        <VideoItem refName="player"/>
      </div>
    );
  }
}

export default MV;
