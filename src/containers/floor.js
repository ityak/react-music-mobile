import React, { Component } from "react";
import "./floor.css";
class Floor extends Component {
  state = {
    floorimg: "floorimg"
  };
  // play(){
  //   console.log(111)
  // }
  playing = () => {
    this.setState({ floorimg: "turn" });
  };
  pause = () => {
    this.setState({ floorimg: "floorimg" });
  };
  render() {
    return (
      <div>
        <div className="floorMusic">
          {/* <div className="floorimg">
        
        </div> */}
          <img
            className={this.state.floorimg}
            src="http://p4.music.126.net/Fs0DjAvcAAyAZa1dgXzFfQ==/109951163571833739.jpg?param=200y200"
          />
          <audio
            src="http://ip.h5.rc03.sycdn.kuwo.cn/4d5d68b6a1a6db2e4d91f6570ee57282/5c98a9df/resource/a3/75/71/944250963.aac"
            controls="controls"
            preload="preload"
            onPlaying={this.playing}
            onPause={this.pause}
          />
        </div>
      </div>
    );
  }
}
export default Floor;
