import React, { Component } from "react";
import { WingBlank, Carousel, WhiteSpace, Flex, Grid } from "antd-mobile";
import "./greenTab.css";
import axios from "../tools/toolOfAxios";
//推荐1
const datasrc = [
  "http://p1.music.126.net/4uArR0uhSx44-QdnrVbxRQ==/109951163906501707.jpg?param=140y140",
  "http://p2.music.126.net/gpSqSFWCbxw1H14ISdEuWw==/109951163758119620.jpg?param=140y140",
  "http://p2.music.126.net/MwFqb4NbPVrtJ9XcfVr4FQ==/109951163667683779.jpg?param=140y140"
];
const data = datasrc.map((_val, i) => ({
  icon: _val
}));
//推荐2
const datasrc1 = [
  "http://p2.music.126.net/urUXkh2vU8mvGHh_31TVkw==/109951163629320801.jpg?param=140y140",
  "http://p2.music.126.net/_rYtyQ-NskJNaz_h8H3gDg==/109951163833608945.jpg?param=140y140",
  "http://p1.music.126.net/wXqQp7K-CLgxj1PvAcsS5Q==/109951163647554520.jpg?param=140y140"
];
const data1 = datasrc1.map((_val, i) => ({
  icon: _val
}));

class GreenTab extends Component {
  state = {
    data: [],
    imgHeight: 176
  };
  componentDidMount() {
    // simulate img loading
    axios("/banner", {})
      .then(res => {
        console.log(res.banners);
        this.setState({
          data: res.banners
        });
      })
      .catch(err => {
        console.log(err);
      });

    // setTimeout(() => {
    //   this.setState({
    //     data: [
    //       "http://p1.music.126.net/xIvTEjoGyKFxqmoLNUQ-iw==/109951163952380949.jpg",
    //       "http://p1.music.126.net/AMzTPRFVxZhnqrXLG1eXqw==/109951163949651120.jpg",
    //       "http://p1.music.126.net/LtLnX_gVhQH_BthwZl963Q==/109951163951596638.jpg",
    //       "http://p1.music.126.net/zxN6xS1onr6EdTBChjaTRQ==/109951163952392595.jpg",
    //       "http://p1.music.126.net/DUC8LVwCQC-uzwnOs39OVg==/109951163952495521.jpg",
    //       "http://p1.music.126.net/n7Es-GJSlQV4wXo7z9yS9Q==/109951163952721100.jpg",
    //       "http://p1.music.126.net/TKZuvNPUHMKGcoAAbHJMfw==/109951163951581708.jpg",
    //       "http://p1.music.126.net/gWqqXlDu36m4eoOL04gERA==/109951163951562414.jpg",
    //       "http://p1.music.126.net/caYd6YvGLjSOOQLyskwB2g==/109951163951562231.jpg"
    //     ]
    //   });
    // }, 100);
  }
  render() {
    return (
      <div className="greenTab">
        <WhiteSpace size="xs" />
        <WingBlank>
          <Carousel
            infinite
            autoplay

            // beforeChange={(from, to) =>
            //   console.log(`slide from ${from} to ${to}`)
            // }
            // afterChange={index => console.log("slide to", index)}
          >
            {this.state.data.map(val => (
              <img
                key={val.imageUrl}
                src={val.imageUrl}
                alt=""
                style={{
                  width: "100%",
                  verticalAlign: "top",
                  borderRadius: "4px"
                }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event("resize"));
                  this.setState({ imgHeight: "auto" });
                }}
              />
            ))}
          </Carousel>
        </WingBlank>
        <WhiteSpace size="lg" />
        <WingBlank>
          <Flex>
            <Flex.Item className="imgs">
              <div>
                <img src="http://imgsrc.baidu.com/forum/w%3D580/sign=8904183a13950a7b75354ecc3ad1625c/6a3c9d18972bd407f0f690f175899e510fb309a5.jpg" />
              </div>
            </Flex.Item>
            <Flex.Item className="imgs">
              <div>
                <img src="http://imgsrc.baidu.com/forum/w%3D580/sign=6fe7163202f3d7ca0cf63f7ec21ebe3c/20b1b426cffc1e177d47dd3d4490f603728de9df.jpg" />
              </div>
            </Flex.Item>
            <Flex.Item className="imgs">
              <div>
                <img src="http://imgsrc.baidu.com/forum/w%3D580/sign=f6839623b0096b6381195e583c328733/da197c90f603738d55b25d2ebd1bb051f919ecdf.jpg" />
              </div>
            </Flex.Item>
            <Flex.Item className="imgs">
              <div>
                <img src="http://imgsrc.baidu.com/forum/w%3D580/sign=d39412faa9efce1bea2bc8c29f50f3e8/e45cddf81a4c510f9a82b3166e59252dd42aa514.jpg" />
              </div>
            </Flex.Item>
            <Flex.Item className="imgs">
              <div>
                <img src="http://imgsrc.baidu.com/forum/w%3D580/sign=1455dd0495504fc2a25fb00dd5dce7f0/18d33c46f21fbe095018921865600c338744ad14.jpg" />
              </div>
            </Flex.Item>
          </Flex>
        </WingBlank>
        <WhiteSpace size="xs" />
        <WingBlank>
          <Flex>
            <Flex.Item className="imgstext">
              <span style={{ color: "#555" }}>每日推荐</span>
            </Flex.Item>
            <Flex.Item className="imgstext">
              <span style={{ color: "#555" }}>歌单</span>
            </Flex.Item>
            <Flex.Item className="imgstext">
              <span style={{ color: "#555" }}>排行榜</span>
            </Flex.Item>
            <Flex.Item className="imgstext">
              <span style={{ color: "#555" }}>电台</span>
            </Flex.Item>
            <Flex.Item className="imgstext">
              <span style={{ color: "#555" }}>直播</span>
            </Flex.Item>
          </Flex>
        </WingBlank>
        <h3>推荐歌单</h3>
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
                  晚安 我记得你以前很少熬夜的
                </span>
              </Flex.Item>
              <Flex.Item>
                <span style={{ fontSize: " 12px" }}>
                  想和你躺在草坪上，慵懒地晒着太阳☀
                </span>
              </Flex.Item>
              <Flex.Item>
                <span style={{ fontSize: " 12px" }}>一条小团团OvO</span>
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
                <span style={{ fontSize: " 12px" }}>隔壁老樊的孤单</span>
              </Flex.Item>
              <Flex.Item>
                <span style={{ fontSize: " 12px" }}>嗨歌，北鼻打了吧了舅</span>
              </Flex.Item>
              <Flex.Item>
                <span style={{ fontSize: " 12px" }}>
                  猫和老鼠：我的两位古典乐启蒙老师
                </span>
              </Flex.Item>
            </Flex>
          </WingBlank>
        </div>
      </div>
    );
  }
}
export default GreenTab;
