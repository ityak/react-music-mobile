import './SquareIconList.css';
import React from 'react';
import { Grid } from 'antd-mobile';

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
