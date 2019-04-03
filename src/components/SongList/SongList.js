import './SongList.css';

import React from 'react';
import { Flex } from 'antd-mobile';

function SongList({ imgUrl, title, num, by }) {
  return (
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
        <svg className="icon top-nav-bar-mid-icon" aria-hidden="true">
          <use xlinkHref="#icon-my-ellipsis-gray" />
        </svg>
      </div>
    </Flex>
  );
}

export default SongList;
