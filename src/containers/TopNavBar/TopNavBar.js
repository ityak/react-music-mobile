import './TopNavBar.css';
import '../../assets/iconfont/iconfont-common.css';
import React, { Component } from 'react';
import { TabBar, Icon, Flex, WingBlank } from 'antd-mobile';

import smile from '../../assets/inconFont/smile.svg';
import smileFill from '../../assets/inconFont/smile-fill.svg';
import find from '../../assets/inconFont/compass.svg';
import findFill from '../../assets/inconFont/compass-fill.svg';
import team from '../../assets/inconFont/team.svg';
import teamFill from '../../assets/inconFont/team-fill.svg';
import video from '../../assets/inconFont/video.svg';
import videoFill from '../../assets/inconFont/video-fill.svg';
// import menu from '../../assets/inconFont/menu.svg';

class TopNavBar extends Component {
  state = {
    selectedTab: '',
  };

  render() {
    return (
      // <WingBlank >
      <Flex direction="row" justify="between" className="top-nav-bar-box">
        <Flex
          className="top-nav-bar-blank"
          justify="center"
          onClick={() => {
            console.log(444);
          }}>
          <span className="am-my-icon icon-my-menu" />
        </Flex>
        <div className="top-nav-bar-mid">
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
            tabBarPosition="top">
            <TabBar.Item
              key="Life"
              icon={
                <div
                  style={{
                    width: '23px',
                    height: '23px',
                    background: `url(${smile}) center center /  23px 23px no-repeat`,
                  }}
                />
              }
              selectedIcon={
                <div
                  style={{
                    width: '23px',
                    height: '23px',
                    background: `url(${smileFill}) center center /  23px 23px no-repeat`,
                  }}
                />
              }
              selected={this.state.selectedTab === 'blueTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'blueTab',
                });
              }}
              data-seed="logId"
            />

            <TabBar.Item
              icon={
                <div
                  style={{
                    width: '23px',
                    height: '23px',
                    background: `url(${find}) center center /  23px 23px no-repeat`,
                  }}
                />
              }
              selectedIcon={
                <div
                  style={{
                    width: '23px',
                    height: '23px',
                    background: `url(${findFill}) center center /  23px 23px no-repeat`,
                  }}
                />
              }
              key="Koubei"
              selected={this.state.selectedTab === 'redTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'redTab',
                });
              }}
              data-seed="logId1"
            />

            <TabBar.Item
              icon={
                <div
                  style={{
                    width: '23px',
                    height: '23px',
                    background: `url(${team}) center center /  23px 23px no-repeat`,
                  }}
                />
              }
              selectedIcon={
                <div
                  style={{
                    width: '23px',
                    height: '23px',
                    background: `url(${teamFill}) center center /  23px 23px no-repeat`,
                  }}
                />
              }
              key="Friend"
              selected={this.state.selectedTab === 'greenTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'greenTab',
                });
              }}
            />

            <TabBar.Item
              icon={
                <div
                  style={{
                    width: '23px',
                    height: '23px',
                    background: `url(${video}) center center /  23px 23px no-repeat`,
                  }}
                />
              }
              selectedIcon={
                <div
                  style={{
                    width: '23px',
                    height: '23px',
                    background: `url(${videoFill}) center center /  23px 23px no-repeat`,
                  }}
                />
              }
              key="mv"
              selected={this.state.selectedTab === 'mv'}
              onPress={() => {
                this.setState({
                  selectedTab: 'mv',
                });
              }}
            />
          </TabBar>
        </div>
        <Flex className="top-nav-bar-blank" justify="center">
          <span className="am-my-icon icon-my-search" />
        </Flex>
      </Flex>
      // </WingBlank>
    );
  }
}

export default TopNavBar;
