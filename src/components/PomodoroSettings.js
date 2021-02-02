import React, { Component } from 'react';

export default class PomodoroSettings extends Component {
  render() {
    const btnClassName = this.props.isStart ? 'button disable' : 'button normal';

    return (
      <div className="settings">
        <div className="settings-section">
          <label id="break-label">Break Length</label>
          <div>
            <button className={btnClassName} id="break-decrement" onClick={this.props.onDecreaseBreak}>-</button>
            <span id="break-length">{this.props.breakLength}</span>
            <button className={btnClassName} id="break-increment" onClick={this.props.onIncreaseBreak}>+</button>
          </div>
        </div>
        <div className="settings-section">
          <label id="session-label">Session Length</label>
          <div>
            <button className={btnClassName} id="session-decrement" onClick={this.props.onDecreaseSession}>-</button>
            <span id="session-length">{this.props.sessionLength}</span>
            <button className={btnClassName} id="session-increment" onClick={this.props.onIncreaseSession}>+</button>
          </div>
        </div>
      </div>
    )
  }
}