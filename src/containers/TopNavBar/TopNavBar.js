import './TopNavBar.css';

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { TabBar, Flex } from 'antd-mobile';

class TopNavBar extends Component {
  state = {
    selectedTab: 'mime',
  };

  render() {
    return (
      <Flex direction="row" justify="between" className="top-nav-bar-box">
        <Flex className="top-nav-bar-blank" justify="center" onClick={() => {}}>
          <svg className="icon top-nav-bar-blank-icon" aria-hidden="true">
            <use xlinkHref="#icon-my-menu" />
          </svg>
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
                <svg className="icon top-nav-bar-mid-icon" aria-hidden="true">
                  <use xlinkHref="#icon-my-smile" />
                </svg>
              }
              selectedIcon={
                <svg className="icon top-nav-bar-mid-icon" aria-hidden="true">
                  <use xlinkHref="#icon-my-smile-fill" />
                </svg>
              }
              selected={this.state.selectedTab === 'mime'}
              onPress={() => {
                this.setState({
                  selectedTab: 'mime',
                });
              }}
              data-seed="logId"
            />

            <TabBar.Item
              icon={
                <svg className="icon top-nav-bar-mid-icon" aria-hidden="true">
                  <use xlinkHref="#icon-my-compass" />
                </svg>
              }
              selectedIcon={
                <svg className="icon top-nav-bar-mid-icon" aria-hidden="true">
                  <use xlinkHref="#icon-my-compass-fill" />
                </svg>
              }
              key="Koubei"
              selected={this.state.selectedTab === 'find'}
              onPress={() => {
                this.setState({
                  selectedTab: 'find',
                });
              }}
              data-seed="logId1"
            />

            <TabBar.Item
              icon={
                <svg className="icon top-nav-bar-mid-icon" aria-hidden="true">
                  <use xlinkHref="#icon-my-team" />
                </svg>
              }
              selectedIcon={
                <svg className="icon top-nav-bar-mid-icon" aria-hidden="true">
                  <use xlinkHref="#icon-my-team-fill-copy" />
                </svg>
              }
              key="Friend"
              selected={this.state.selectedTab === 'friend'}
              onPress={() => {
                this.setState({
                  selectedTab: 'friend',
                });
              }}
            />

            <TabBar.Item
              icon={
                <svg className="icon top-nav-bar-mid-icon" aria-hidden="true">
                  <use xlinkHref="#icon-my-video" />
                </svg>
              }
              selectedIcon={
                <svg className="icon top-nav-bar-mid-icon" aria-hidden="true">
                  <use xlinkHref="#icon-my-video-fill" />
                </svg>
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
          <svg className="icon top-nav-bar-blank-icon" aria-hidden="true">
            <use xlinkHref="#icon-my-search" />
          </svg>
        </Flex>
      </Flex>
    );
  }
}

export default withRouter(TopNavBar);
