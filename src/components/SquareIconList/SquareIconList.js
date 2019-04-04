import './SquareIconList.css';
import React from 'react';
import { Grid } from 'antd-mobile';

const data = Array.from(new Array(6)).map((_val, i) => ({
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
  text: `name${i}_name${i}`,
}));

export default props => (
  <div className="square-icon-list-box">
    <Grid
      data={props.data}
      activeStyle={false}
      columnNum={3}
      hasLine={false}
      square={false}
      renderItem={dataItem => (
        <div className="square-icon-list-item">
          <img src={dataItem.picUrl} alt={dataItem.copywriter} />
          <div className="square-icon-list-item-title">{dataItem.name}</div>
        </div>
      )}
    />
  </div>
);
