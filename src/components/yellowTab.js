import React, { Component } from "react";
import { WingBlank, Flex, List, Badge,WhiteSpace } from "antd-mobile";
import "./yellowTab.css";
const Item = List.Item;
const Brief = Item.Brief;
class YellowTab extends Component {
  render() {
    return (
      <div className="yellowTab">
        <div className="videoTab">
          <WingBlank>
            <video
              src="https://vodkgeyttp8.vod.126.net/cloudmusic/593d/core/0c65/326c08e6fb50fdf5d84ab42288d43f5a.mp4?wsSecret=8d17b742d9543e233c4440a9c7194b06&wsTime=1553607892"
              width="100%"
              height="75%"
              controls
            />
            <p>隔壁老樊的热门单曲《我曾》MV上线!!!!</p>
            <Item
            className = "videoimg"
            arrow="horizontal"
              align="top"
              thumb="http://p1.music.126.net/KK3YNRE9flpcZCYkDS8Z3g==/109951163826159510.jpg?param=50y50&quality=100"
              multipleLine
            >
               <span style = {{color:"#555"}}>隔壁老樊</span>
            </Item>
          </WingBlank>
        </div>
        <WhiteSpace />
        <div className="videoTab">
          <WingBlank>
            <video
              src="https://vodkgeyttp8.vod.126.net/cloudmusic/593d/core/0c65/326c08e6fb50fdf5d84ab42288d43f5a.mp4?wsSecret=8d17b742d9543e233c4440a9c7194b06&wsTime=1553607892"
              width="100%"
              height="75%"
              controls
            />
            <p>隔壁老樊的热门单曲《我曾》MV上线!!!!</p>
            <Item
            className = "videoimg"
            arrow="horizontal"
              align="top"
              thumb="http://p1.music.126.net/KK3YNRE9flpcZCYkDS8Z3g==/109951163826159510.jpg?param=50y50&quality=100"
              multipleLine
            >
               <span style = {{color:"#555"}}>隔壁老樊</span>
            </Item>
          </WingBlank>
        </div>
        
      </div>
    );
  }
}
export default YellowTab;
