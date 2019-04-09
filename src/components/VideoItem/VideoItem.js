import './VideoItem.css';
import React, { Component } from 'react';
import { Player, BigPlayButton } from 'video-react';
import { WingBlank, WhiteSpace } from 'antd-mobile';

class VideoItem extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      playerSource: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
      inputVideoUrl: 'http://www.w3schools.com/html/mov_bbb.mp4',
      hidden: true,
    };
    this[props.refName] = React.createRef();
  }

  componentDidMount() {
    const { refName } = this.props;
    console.log(this.refs[refName].getState().player);
  }

  render() {
    const { hidden } = this.state;

    return (
      <div className="video-box">
        <div className="video-player">
          <WingBlank>
            <Player
              autoPlay
              src={this.state.playerSource}
              ref={this.props.refName}
              videoId="video-1">
              <BigPlayButton position="center" />
            </Player>

            {hidden ? (
              <div className="video-tag">{`#${this.props.tag ||
                '评论榜'}#`}</div>
            ) : null}

            {/* <div className="video-play-volume">播放量</div> */}

            <div className="video-play-times">视频时间</div>
          </WingBlank>
        </div>

        <div className="video-title">
          <WingBlank>视频标题</WingBlank>
        </div>

        <div className="video-info">
          <WingBlank>视频信息</WingBlank>
        </div>

        <WhiteSpace className="video-white-space" />
      </div>
    );
  }
}

export default VideoItem;
