import './ListIcon.css';

import React from 'react';
import { List } from 'antd-mobile';
import { withRouter } from 'react-router-dom';

const Item = List.Item;

function ListIcon({ dataSource}) {

  return (
    <div className="list-icon">
      <List>
            {dataSource.map((v, i) => {
              return (
                <Item thumb={v.thumb} arrow="horizontal" onClick={() => {}}>
                  {`${v.title} (${v.number})`}
                </Item>
              );
            })}
          </List>
    </div>
  );
}

export default withRouter(ListIcon);
