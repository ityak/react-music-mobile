import './FindSongList.css';
import React from 'react';
import SquareIconList from '../../components/SquareIconList/SquareIconList';

const FindSongList = props => (
  <div className="find-song-list">
    <div className="find-song-list-top">
      <div className="top-title">
        {props.title}
        {props.subTitle ? <span>{props.subTitle}</span> : null}
      </div>
      <div className="top-more">
        {props.more}
      </div>
    </div>
    <SquareIconList data={props.dataList}/>
  </div>
);

export default FindSongList;
