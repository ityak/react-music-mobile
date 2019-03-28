import React, { Component } from 'react';
import axios from '../tools/toolOfAxios';

import { SearchBar, WhiteSpace } from 'antd-mobile';

class Search extends Component {
  state = { searchValue: '' };

  handleSubmit = val => {
    const value = val.trim();
    if (value) {
      axios(`/search`, {
        data: {
          keywords: value,
          limit: 20,
        },
      })
        .then(response => {
          console.log(response);
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  render() {
    const { searchValue } = this.state;

    return (
      <>
        {/* <WhiteSpace /> */}
        <SearchBar
          placeholder="点击搜索"
          maxLength={10}
          value={searchValue}
          showCancelButton
          cancelText="搜索"
          onChange={value => this.setState({ searchValue: value })}
          onSubmit={this.handleSubmit}
          onCancel={() => this.handleSubmit(searchValue)}
        />
        {/* <WhiteSpace /> */}
      </>
    );
  }
}

export default Search;
