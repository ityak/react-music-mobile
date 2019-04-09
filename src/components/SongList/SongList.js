import './SongList.css';

import React from 'react';
import { Flex } from 'antd-mobile';
import SVG from '../SVG/SVG';

export default ({ imgUrl, title, num, by }) => (
  <Flex className="song-list-box" justify="start">
    <div className="song-list-left">
      <img src={imgUrl} alt={title} />
    </div>

    <div className="song-list-mid">
      <Flex direction="column" justify="between" align="start">
        <span>{title}</span>
        {by ? <span>{`${num}首 by ${by}`}</span> : <span>{`${num}首`}</span>}
      </Flex>
    </div>

    <div className="song-list-right">
      <SVG myClass="top-nav-bar-mid-icon" svgName="ellipsis-gray" />
    </div>
  </Flex>
);
