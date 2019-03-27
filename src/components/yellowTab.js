import React, { Component } from "react";
import { WingBlank, List, WhiteSpace } from "antd-mobile";
import { Player, ControlBar } from "video-react";
import "./yellowTab.css";
import "../../node_modules/video-react/dist/video-react.css";
import axios from "../tools/toolOfAxios";

import VideoPlayer from "./VideoPlayer";

const Item = List.Item;
const Brief = Item.Brief;

class YellowTab extends Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios("mv/first", {
      data: {
        limit: 50
      }
    })
      .then(res => {
        // console.log(res.data);
        this.setState({
          data: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  // handleplay = () => {
  //   // let { src } = this.videoRef.current;
  //   console.log(66);
  //   // if (!src) {
  //   //   axios("/mv/url", { data: { id: 10858669 } })
  //   //     .then(res => {
  //   //       this.videoRef.current.src = res.data.url;
  //   //       this.videoRef.current.autoplay = true;
  //   //     })
  //   //     .catch(err => {
  //   //       console.log(err);
  //   //     });
  //   // }
  // };

  // videoClick = (id, name) => {
  //   console.log(id, name);
  //   console.log(this.videoRef.current);
  //   // axios("/mv/url", { data: { id: v } })
  //   //   .then(res => {
  //   //     console.log(res.data.url);
  //   //     console.log(name);
  //   //     console.dir(this.refs);
  //   //     this.refs.谁.src = res.data.url;
  //   //   })
  //   //   .catch(err => {
  //   //     console.log(err);
  //   //   });
  // };

  render() {
    return (
      <div className="yellowTab">
        {this.state.data.map((data, i) => {
          return <VideoPlayer data={data} key={data.id} />;
        })}
      </div>
    );
  }
}
export default YellowTab;
