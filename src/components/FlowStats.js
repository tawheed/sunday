import React, { Component } from 'react';

export default class FlowStats extends Component {
  render() {
    return (
      <div className="stats">
        <p># of Sessions Today: {this.props.numSessions}, {this.props.numMinutes} minutes.</p>
      </div>
    )
  }
}