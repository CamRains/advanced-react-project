import React, { Component } from "react";
import axios from "axios";

export default class DataFetcher extends Component {
  constructor() {
    super();
    this.state = {
      data: null
    };
  }

  fetchMaData = () => {
    axios.get(this.props.url).then(res => {
      console.log("RESPONSE HERE IN DATA FETCHER", res);
      this.setState({
        data: res.data
      });
    });
  };
  render() {
    return (
      <div>
        {this.state.data
          ? this.props.renderProducts(this.state.data)
          : this.fetchMaData()}
      </div>
    );
  }
}
