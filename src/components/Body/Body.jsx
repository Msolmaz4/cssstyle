import React, { Component } from 'react';

export default class Body extends Component {
  render() {
    return <div>
      <h1>{this.props.baslik}</h1>
      <button style={{
        backgroundColor:'red'
      }}>submit</button>
    </div>;
  }
}

