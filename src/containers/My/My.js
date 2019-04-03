import './My.css';
import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { WhiteSpace } from 'antd-mobile';

import RoundIconList from '../../components/RoundIconList/RoundIconList';
import ListIcon from '../../components/ListIcon/ListIcon';
import MySongAccordion from './MySongAccordion';
import SongList from '../../components/SongList/SongList';

const data = [
  {
    imgUrl:
      'https://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
    title: '私人FM',
    type: 1,
    navTo: 'xx1',
  },
  {
    imgUrl:
      'https://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
    title: '最新电音',
    type: 2,
    navTo: 'xx2',
  },
  {
    imgUrl:
      'https://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
    title: 'Sati空间',
    type: 3,
    navTo: 'xx3',
  },
  {
    imgUrl:
      'https://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
    title: '私藏推荐',
    type: 4,
    navTo: 'xx4',
  },
  {
    imgUrl:
      'https://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
    title: '亲子频道',
    type: 5,
    navTo: 'xx5',
  },
  {
    imgUrl:
      'https://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
    title: '古典专区',
    type: 6,
    navTo: 'xx6',
  },
  {
    imgUrl:
      'https://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
    title: '跑步FM',
    type: 6,
    navTo: 'xx6',
  },
  {
    imgUrl:
      'https://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
    title: '小冰电台',
    type: 6,
    navTo: 'xx6',
  },
  {
    imgUrl:
      'https://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
    title: '驾驶模式',
    type: 6,
    navTo: 'xx6',
  },
];

const listData = [
  {
    thumb: 'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png',
    title: '本地音乐',
    iconName: 'yinyue',
    number: 2,
    navTo: '1',
  },
  {
    thumb: 'https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png',
    title: '最近播放',
    iconName: 'recent-play',
    number: 200,
    navTo: '2',
  },
  {
    thumb: 'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png',
    title: '下载管理',
    iconName: 'down-music',
    number: 0,
    navTo: '3',
  },
  {
    thumb: 'https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png',
    title: '我的电台',
    iconName: 'FM',
    number: 3,
    navTo: '4',
  },
  {
    thumb: 'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png',
    title: '我的收藏',
    iconName: 'collect-music',
    number: 32,
    navTo: '5',
  },
];

const songLists1 = [
  {
    imgUrl: 'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png',
    title: '适合视频剪辑BGM的音乐',
    num: 395,
  },
  {
    imgUrl: 'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png',
    title: '愿山野浓雾都有路灯 风雨漂泊都有归舟',
    num: 60,
  },
  {
    imgUrl: 'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png',
    title: '纯音乐 (想难题/背单词/学习时用)',
    num: 180,
  },
  {
    imgUrl: 'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png',
    title: '适合视频剪辑BGM的音乐',
    num: 395,
  },
  {
    imgUrl: 'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png',
    title: '愿山野浓雾都有路灯 风雨漂泊都有归舟',
    num: 60,
  },
  {
    imgUrl: 'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png',
    title: '纯音乐 (想难题/背单词/学习时用)',
    num: 180,
  },
];

const songLists2 = [
  {
    imgUrl: 'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png',
    title: '适合视频剪辑BGM的音乐',
    num: 395,
    by: '如意',
  },
  {
    imgUrl: 'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png',
    title: '愿山野浓雾都有路灯 风雨漂泊都有归舟',
    num: 60,
    by: '鹏鹏',
  },
  {
    imgUrl: 'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png',
    title: '纯音乐 (想难题/背单词/学习时用)',
    num: 180,
    by: '苹果',
  },
  {
    imgUrl: 'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png',
    title: '适合视频剪辑BGM的音乐',
    num: 395,
    by: '吃鱼',
  },
  {
    imgUrl: 'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png',
    title: '愿山野浓雾都有路灯 风雨漂泊都有归舟',
    num: 60,
    by: '团子',
  },
];

class My extends Component {
  render() {
    return (
      <div className="my-box">
        <div className="my-nav">
          {data.map((v, i) => {
            return (
              <RoundIconList
                title={v.title}
                imgUrl={v.imgUrl}
                type={v.type}
                navTo={v.navTo}
                key={v.title}
              />
            );
          })}
        </div>

        <div className="my-list-nav">
          <ListIcon dataSource={listData} />
        </div>

        <WhiteSpace className="my-white-space" />

        <MySongAccordion itemKey={1} title="创建的歌单" num={songLists1.length}>
          {songLists1.map((v, i) => {
            return (
              <SongList
                key={`${v.title}_${i}`}
                title={v.title}
                imgUrl={v.imgUrl}
                num={v.num}
              />
            );
          })}
        </MySongAccordion>

        <MySongAccordion itemKey={2} title="收藏的歌单" num={songLists2.length}>
          {songLists2.map((v, i) => {
            return (
              <SongList
                key={`${v.title}_${i}`}
                title={v.title}
                imgUrl={v.imgUrl}
                num={v.num}
              />
            );
          })}
        </MySongAccordion>
      </div>
    );
  }
}

export default My;
