import React from "react";
import axios from "axios";

function hoc(Component, url) {
  return class extends React.Component {
    constructor() {
      super();
      this.state = {
        data: null
      };
    }

    getMeData = () => {
      axios.get(url).then(res => {
        console.log("GET DATA FROM SERVER", res);
        this.setState({
          data: res.data
        });
      });
    };

    render() {
      return (
        <div>
          {this.state.data ? (
            <Component {...this.props} data={this.state.data} />
          ) : (
            this.getMeData()
          )}
        </div>
      );
    }
  };
}

export default hoc;
