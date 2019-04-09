import './TopNavBar.css';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { TabBar, Flex } from 'antd-mobile';
import SVG from '../../components/SVG/SVG';

const MyFlex = name => (
  <Flex className="top-nav-bar-blank">
    <SVG svgName={name} myClass="top-nav-bar-blank-icon" />
  </Flex>
);
const items = [
  { key: '/My', icon: 'smile', selectedIcon: 'smile-fill' },
  { key: '/Find', icon: 'compass', selectedIcon: 'compass-fill' },
  { key: '/MV', icon: 'video', selectedIcon: 'video-fill' },
];

class TopNavBar extends Component {
  state = { selectedTab: this.props.location.pathname };

  handlePress = value => {
    this.setState({ selectedTab: value });
    this.props.history.push(value);
  };

  render() {
    return (
      <Flex justify="between" className="top-nav-bar-box">
        {MyFlex('menu')}

        <div className="top-nav-bar-mid">
          <TabBar tabBarPosition="top">
            {items.map(v => (
              <TabBar.Item
                key={v.key}
                icon={<SVG svgName={v.icon} myClass="top-nav-bar-blank-icon" />}
                selectedIcon={
                  <SVG svgName={v.selectedIcon} myClass="top-nav-bar-blank-icon" />
                }
                selected={this.state.selectedTab === v.key}
                onPress={() => this.handlePress(v.key)}
              />
            ))}
          </TabBar>
        </div>

        {MyFlex('search')}
      </Flex>
    );
  }
}

export default withRouter(TopNavBar);
