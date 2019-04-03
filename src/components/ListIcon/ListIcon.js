/**
 *  列表组件--带图标
 *
 */
import './ListIcon.css';

import React from 'react';
// import PropTypes from 'prop-types';
import { List } from 'antd-mobile';
import { withRouter } from 'react-router-dom';

const Item = List.Item;

function ListIcon({ dataSource }) {
  return (
    <div className="list-icon">
      <List>
        {dataSource &&
          dataSource.map((v, i) => {
            return (
              <Item
                key={`${v.title}_${i}`}
                thumb={<span className={`iconfont icon-my-${v.iconName} list-icons`} />}
                arrow="horizontal"
                onClick={() => {}}>
                {`${v.title} (${v.number})`}
              </Item>
            );
          })}
      </List>
    </div>
  );
}

// ListIcon.defaultProps = {
//   // dataSource: PropTypes.
// };

export default withRouter(ListIcon);
