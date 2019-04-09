import './Find.css';
import React from 'react';
import { connect } from 'react-redux';
import { Carousel, WingBlank } from 'antd-mobile';

import RoundIconList from '../../components/RoundIconList/RoundIconList';
import FindSongList from './FindSongList';

import axios from '../../tools/toolOfAxios';

const listIcons = [
  {
    imgUrl:
      'https://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
    title: '每日推荐',
    type: 1,
    navTo: 'xx1',
  },
  {
    imgUrl:
      'https://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
    title: '歌单',
    type: 2,
    navTo: 'xx2',
  },
  {
    imgUrl:
      'https://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
    title: '排行榜',
    type: 3,
    navTo: 'xx3',
  },
  {
    imgUrl:
      'https://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
    title: '电台',
    type: 4,
    navTo: 'xx4',
  },
];

class Find extends React.Component {
  state = { data: [], tuijian: [] };

  componentDidMount() {
    axios('/banner', {}).then(res => {
      this.setState({
        data: res.banners,
      });
    });

    axios('/personalized', {}).then(res => {
      this.setState({
        tuijian: res.result.slice(0, 29),
      });
    });
  }

  render() {
    return (
      <div className="find-box">
        <div className="find-carousel">
          <WingBlank>
            <Carousel autoplay infinite>
              {this.state.data.map((val, i) => (
                <div className="find-banner" key={`${val.targetId}_${i}`}>
                  <img
                    src={val.imageUrl}
                    alt={`${val.targetId}`}
                    onLoad={() => window.dispatchEvent(new Event('resize'))}
                  />
                  <div
                    className="find-banner-tag"
                    style={{ backgroundColor: `${val.titleColor}` }}>
                    {val.typeTitle}
                  </div>
                </div>
              ))}
            </Carousel>
          </WingBlank>
        </div>

        <div className="find-nav-list">
          {listIcons.map((v, i) => (
            <RoundIconList
              key={i}
              imgUrl={v.imgUrl}
              title={v.title}
              type={v.type}
              navTo={v.navTo}
            />
          ))}
        </div>

        <FindSongList
          title="推荐歌单"
          more="歌单广场"
          dataList={this.state.tuijian}
        />
      </div>
    );
  }
}

export default connect()(Find);
