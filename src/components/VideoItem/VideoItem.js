import './VideoItem.css';
import React, { Component } from 'react';
import { Player, BigPlayButton, LoadingSpinner, ControlBar } from 'video-react';
import { WingBlank, WhiteSpace } from 'antd-mobile';

import axios from '../../tools/toolOfAxios';

// import SVG from '../SVG/SVG';

class VideoItem extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      playerSource: '',
      isFetch: false,
      // hidden: true
    };
    this[props.refName] = React.createRef();
  }

  componentDidMount() {
    // const { refName } = this.props;
    // console.log(this.refs[refName].getState().player);
  }

  handlePlay = id => {
    const { isFetch } = this.state;
    !isFetch &&
      axios('/mv/url', { data: { id, } }).then(res => {
        this.setState({
          playerSource: res.data.url,
          isFetch: true,
          hidden: true,
        });
      });
  };

  render() {
    const { refName } = this.props;
    const { cover, id } = this.props.datas;
    return (
      <div className="video-box">
        <WingBlank>
          <div className="video-player" onClick={() => this.handlePlay(id)}>
            <div className="video-top">
              <Player
                autoPlay
                poster={cover}
                src={this.state.playerSource}
                ref={refName}
                videoId="video-1">
                <BigPlayButton position="center" />
                <LoadingSpinner />
                <ControlBar
                  autoHideTime={2500}
                  autoHide={true}
                  disableDefaultControls={false}>
                  {/* <VolumeMenuButton /> */}
                </ControlBar>
              </Player>
              {/* {hidden ? (
                <>
                  <div className="video-tag">{`#${tag || '评论榜'}#`}</div>
                  <div className="video-play-volume">
                    <SVG svgName="video-play" />
                    播放量
                  </div>
                  <div className="video-play-times">
                    <SVG svgName="video-times" />
                    视频时间
                  </div>
                </>
              ) : null} */}
            </div>
          </div>

          <div className="video-title">视频标题</div>

          <div className="video-info">视频信息</div>
        </WingBlank>
        <WhiteSpace className="video-white-space" />
      </div>
    );
  }
}

export default VideoItem;
