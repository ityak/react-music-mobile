import React, { Component } from "react";
import { WingBlank, List, WhiteSpace } from "antd-mobile";
import "./yellowTab.css";
import axios from "../tools/toolOfAxios";

const Item = List.Item;

class VideoPlayer extends Component {
  state = {
    src: ""
  };

  handleplay = id => {
    const { src } = this.state;
    if (!src) {
      axios("/mv/url", { data: { id } })
        .then(res => {
          this.setState({
            src: res.data.url
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  render() {
    const val = this.props.data;

    return (
      <div className="videoTab">
        <WingBlank>
          <video
            src={this.state.src}
            poster={val.cover}
            controls
            width="100%"
            height = "200px"
            onClick={() => this.handleplay(val.id)}
            autoPlay
          />
          <p>{val.briefDesc}</p>

          <Item
            className="videoimg"
            arrow="horizontal"
            align="top"
            thumb={val.cover}
            multipleLine
          >
            <span style={{ color: "#555" }}>{val.artistName}</span>
          </Item>
        </WingBlank>
        <WhiteSpace />
      </div>
    );
  }
}

export default VideoPlayer;
