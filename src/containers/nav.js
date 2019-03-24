import React, { Component } from "react";
import { TabBar } from "antd-mobile";
import "./nav.css";

class MusicPage extends Component {
  state = { selectedTab: "library" };

  handleSelect = value => {
    this.setState({ selectedTab: value });
    // this.props.history.push('')
  };

  render() {
    return (
      <div className="tab-box">
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          tabBarPosition="top"
          noRenderContent={true}
        >
          <TabBar.Item
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1953613854,3813387204&fm=26&gp=0.jpg) center center /  21px 21px no-repeat"
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1953613854,3813387204&fm=26&gp=0.jpg) center center /  21px 21px no-repeat"
                }}
              />
            }
            title="曲库"
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
                    "url(https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=447626437,2055884992&fm=26&gp=0.jpg) center center /  22px 22px no-repeat"
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
                    "url(https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=447626437,2055884992&fm=26&gp=0.jpg) center center /  22px 22px no-repeat"
                }}
              />
            }
            title="发现"
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
                    "url(https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1903028679,3782879263&fm=26&gp=0.jpg) center center /  22px 22px no-repeat"
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
                    "url(https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1903028679,3782879263&fm=26&gp=0.jpg) center center /  22px 22px no-repeat"
                }}
              />
            }
            title="我的"
            badge={1}
            key="my"
            selected={this.state.selectedTab === "yellowTab"}
            onPress={() => {
              this.handleSelect("yellowTab");
            }}
          />
        </TabBar>
      </div>
    );
  }
}
export default MusicPage;
