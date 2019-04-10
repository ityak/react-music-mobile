import './MV.css';

import React, { Component } from 'react';
import VideoItem from '../../components/VideoItem/VideoItem';
import axios from '../../tools/toolOfAxios';

class MV extends Component {
  state = { data: [] };

  componentDidMount() {
    (async () => {
      await axios('/mv/first', { data: { limit: 10,offset: 2, } }).then(res => {
        this.setState({
          data: res.data,
        });
      });

      await console.log('xxxx');
    })();
  }

  render() {
    const { data } = this.state;
    return (
      <div className="mv-box">
        {data.map(v => (
          <VideoItem key={v.id} refName="player" datas={v} />
        ))}
      </div>
    );
  }
}

export default MV;
