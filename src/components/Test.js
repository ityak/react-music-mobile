import React, { Component } from "react";
import { List, WhiteSpace, WingBlank, Grid, Flex } from "antd-mobile";
import "./test.css";
const datasrc = [
  "http://p1.music.126.net/XiwVb_kVBjlf6A3RLLKDZg==/109951163942889551.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp",
  "http://p1.music.126.net/bP8JJSs-Ag8o0KGm-Pk1Mw==/109951163937127600.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp",
  "http://p2.music.126.net/D4BfBJ3E-7xM4KoFewID-A==/109951163870067107.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp"
];
const datasrc1 = [
  "http://p2.music.126.net/Cj1rPLdLVssVXUgqj_MmKA==/109951163112106912.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp",
  "http://p2.music.126.net/1E1VZ0ARGDFtZxPibgrAZA==/109951163807542054.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp",
  "http://p2.music.126.net/7apGXDWa9JWKwTlVjhTd8Q==/1365593462750692.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp"
]
// const title1 =

const data = datasrc.map((_val, i) => ({
  icon: _val
}));
const data1 = datasrc1.map((_val, i) => ({
  icon: _val
}));


const PlaceHolder = ({ className = "", ...restProps }) => (
  <div className={`${className} placeholder`} {...restProps}>
    {" "}
  </div>
);
const Item = List.Item;
const Brief = Item.Brief;
class Test extends Component {
  render() {
    return (
      <div className="App">
        <List renderHeader={() => "音乐列表"}>
          <Item
            thumb="http://imgsrc.baidu.com/forum/w%3D580/sign=1958d00495504fc2a25fb00dd5dce7f0/18d33c46f21fbe095d159f1865600c338744ad0f.jpg"
            onClick={() => {}}
          >
            <span style={{ fontSize: "14px" }}>本地音乐</span>
          </Item>
          <Item
            thumb="http://imgsrc.baidu.com/forum/w%3D580/sign=be8cc66dfddeb48ffb69a1d6c01e3aef/b4325659252dd42a6b425da70d3b5bb5c9eab80f.jpg"
            onClick={() => {}}
          >
            <span style={{ fontSize: "14px" }}>最近播放</span>
          </Item>
          <Item
            thumb="http://imgsrc.baidu.com/forum/w%3D580/sign=ea1d91e0df00baa1ba2c47b37710b9b1/55c9192eb9389b503ae2bc5e8b35e5dde7116eb1.jpg"
            onClick={() => {}}
          >
            <span style={{ fontSize: "14px" }}>下载管理</span>
          </Item>
          <Item
            thumb="http://imgsrc.baidu.com/forum/w%3D580/sign=0fa9e48dc51349547e1ee86c664f92dd/599fdf50352ac65c414e3a7ff5f2b21193138a0f.jpg"
            onClick={() => {}}
          >
            <span style={{ fontSize: "14px" }}>我的电台</span>
          </Item>
          <Item
            thumb="http://imgsrc.baidu.com/forum/w%3D580/sign=bcdd953f9c45d688a302b2ac94c27dab/15de91efce1b9d1682dac66dfddeb48f8c5464b1.jpg"
            onClick={() => {}}
          >
            <span style={{ fontSize: "14px" }}>我的收藏</span>
          </Item>
        </List>
        <h3>我的歌单</h3>
        {/* <Grid data={data} activeStyle={false} /> */}
        <div>
          <Grid
            data={data}
            columnNum={3}
            renderItem={dataItem => (
              <div style={{ margin: "5px" }}>
                <img
                  src={dataItem.icon}
                  style={{ width: "100%", height: "100%" }}
                  alt=""
                />
              </div>
            )}
          />
          <WingBlank size="sm">
            <Flex>
              <Flex.Item>
                <span style={{ fontSize: " 12px" }}>
                  急聘：冬去春来，聘一人陪我过春天
                </span>
              </Flex.Item>
              <Flex.Item>
                <span style={{ fontSize: " 12px" }}>
                can you 蹦迪 with me?
                </span>
              </Flex.Item>
              <Flex.Item>
                <span style={{ fontSize: " 12px" }}>
                  用最孤独的时光，塑造最好的自己
                </span>
              </Flex.Item>
            </Flex>
          </WingBlank>
        </div>
        <div>
          <Grid
            data={data1}
            columnNum={3}
            renderItem={dataItem => (
              <div style={{ margin: "5px" }}>
                <img
                  src={dataItem.icon}
                  style={{ width: "100%", height: "100%" }}
                  alt=""
                />
              </div>
            )}
          />
          <WingBlank size="sm">
            <Flex>
              <Flex.Item>
                <span style={{ fontSize: " 12px" }}>
                他们为她们写的歌 轻松hold住少女风
                </span>
              </Flex.Item>
              <Flex.Item>
                <span style={{ fontSize: " 12px" }}>
                每次在回家的路上 你会选择听哪些歌
                </span>
              </Flex.Item>
              <Flex.Item>
                <span style={{ fontSize: " 12px" }}>
                年会舞蹈看这: 群魔乱舞,MV盘点
                </span>
              </Flex.Item>
            </Flex>
          </WingBlank>
        </div>
        
      </div>
    );
  }
}

export default Test;
