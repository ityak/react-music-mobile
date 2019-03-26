import React, { Component } from "react";
import { TabBar, Icon, Drawer, List } from "antd-mobile";
import "./nav.css";
import {withRouter} from "react-router-dom"

class MusicPage extends Component {
  state = {
    open: false,
    selectedTab: "library"
  };
  // componentWillMount(){
  //   this.props.history.push('/');
  // }
  onOpenChange = (...args) => {
    // console.log(args);
    console.log(this.handleSelect.value)
    this.setState({ open: !this.state.open });
  };
  handleSelect = value => {
   value = value
   this.setState({ selectedTab: value });
    if(value == "library"){
      this.props.history.push('/');
     
    } else{
      this.props.history.push(value)
    }
    
    // window.location.href = "/11";
  };

  render() {
    return (
      <div className="tab-box">
        <TabBar
        barTintColor = "#d43c33"
          unselectedTintColor="#fff"
          tintColor="#33A3F4"
          tabBarPosition="top"
          noRenderContent={true}
        >
          <TabBar.Item
            icon={<img src="https://gw.alipayobjects.com/zos/rmsportal/iXVHARNNlmdCGnwWxQPH.svg" className="am-icon am-icon-md" alt="" />}
           
            onPress={() => this.onOpenChange("docked")}
          />
          <TabBar.Item
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(http://imgsrc.baidu.com/forum/w%3D580/sign=c0f4d73345fbfbeddc59367748f1f78e/e193901ea8d3fd1fdb6fe4363e4e251f95ca5f74.jpg) center center /  21px 21px no-repeat"
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(http://imgsrc.baidu.com/forum/w%3D580/sign=3d0748bbe750352ab16125006342fb1a/db819f014c086e061a6178470c087bf40bd1cb8d.jpg) center center /  21px 21px no-repeat"
                }}
              />
            }
            key="library"
            selected={this.state.selectedTab === "library"}
            onPress={() => {
              this.handleSelect("library");
            }}
          />
          <TabBar.Item
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  borderRadius: "50%",
                  background:
                    "url(http://imgsrc.baidu.com/forum/w%3D580/sign=a843a29e02f431adbcd243317b37ac0f/c3f43efa513d2697431a4f515bfbb2fb4216d88d.jpg) center center /  22px 22px no-repeat"
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  borderRadius: "50%",
                  background:
                    "url(http://imgsrc.baidu.com/forum/w%3D580/sign=d0fcaa0fc695d143da76e42b43f18296/b240fabf6c81800a8b83cf02bf3533fa828b4774.jpg) center center /  22px 22px no-repeat"
                }}
              />
            }
            key="find"
            selected={this.state.selectedTab === "greenTab"}
            onPress={() => {
              this.handleSelect("greenTab");
            }}
          />
          <TabBar.Item
            icon={
              <div
                style={{
                  borderRadius: "50%",
                  width: "22px",
                  height: "22px",
                  background:
                    "url(http://imgsrc.baidu.com/forum/w%3D580/sign=10004391c5ef76093c0b99971edca301/3225109759ee3d6d490fc0c74d166d224e4ade8d.jpg) center center /  22px 22px no-repeat"
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  borderRadius: "50%",
                  width: "22px",
                  height: "22px",
                  background:
                    "url(http://imgsrc.baidu.com/forum/w%3D580/sign=d874170402d79123e0e0947c9d355917/343427dfa9ec8a1371d310ecf903918fa1ecc08d.jpg) center center /  22px 22px no-repeat"
                }}
              />
            }
            key="my"
            selected={this.state.selectedTab === "yellowTab"}
            onPress={() => {
              this.handleSelect("yellowTab");
            }}
          />
          <TabBar.Item
            icon={<Icon type="search" />}
            onLeftClick={() => this.onDock("docked")}
          />
        </TabBar>
       
      </div>
    );
  }
}
export default withRouter(MusicPage);
