import './TopNavBar.css';

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { TabBar, Flex } from 'antd-mobile';

class TopNavBar extends Component {
  state = {
    selectedTab: this.props.location.pathname,
  };

  handlePress = value => {
    this.setState(
      {
        selectedTab: value,
      },
      () => {
        this.props.history.push(`${value}`);
      },
    );
  };

  render() {
    console.log(this.props.location.pathname)
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
              selected={this.state.selectedTab === '/My'}
              onPress={() => this.handlePress('/My')}
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
              selected={this.state.selectedTab === '/Find'}
              onPress={() => this.handlePress('/Find')}
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
              selected={this.state.selectedTab === '/Friend'}
              onPress={() => this.handlePress('/Friend')}
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
              key="MV"
              selected={this.state.selectedTab === '/MV'}
              onPress={() => this.handlePress('/MV')}
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
