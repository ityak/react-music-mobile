import './RoundIconList.css';

import React from 'react';
import { Flex } from 'antd-mobile';
import { withRouter } from 'react-router-dom';

function RoundIconList({ imgUrl, title, type, navTo }) {
  function handleClick(type, navTo) {
    console.log(type, navTo);
  }

  return (
    <div className="round-icon-list">
      <Flex
        style={{ height: '100%' }}
        direction="column"
        justify="between"
        onClick={() => handleClick(type, navTo)}>
        <img src={imgUrl} alt={title} />
        <span>{title}</span>
      </Flex>
    </div>
  );
}

export default withRouter(RoundIconList);
