import './My.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { WhiteSpace } from 'antd-mobile';

import RoundIconList from '../../components/RoundIconList/RoundIconList';
import ListIcon from '../../components/ListIcon/ListIcon';
import MySongAccordion from './MySongAccordion';

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
    number: 2,
    navTo: '1',
  },
  {
    thumb: 'https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png',
    title: '最近播放',
    number: 200,
    navTo: '2',
  },
  {
    thumb: 'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png',
    title: '下载管理',
    number: 0,
    navTo: '3',
  },
  {
    thumb: 'https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png',
    title: '我的电台',
    number: 3,
    navTo: '4',
  },
  {
    thumb: 'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png',
    title: '我的收藏',
    number: 32,
    navTo: '5',
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
              />
            );
          })}
        </div>

        <div className="my-list-nav">
          <ListIcon dataSource={listData} />
        </div>

        <WhiteSpace className="my-white-space" />
        <MySongAccordion itemKey={1} title="创建的歌单">
          这是内容1
        </MySongAccordion>
        <MySongAccordion itemKey={2} title="收藏的歌单">
          这是内容2
        </MySongAccordion>
      </div>
    );
  }
}

export default My;
