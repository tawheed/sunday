import React, { Component } from 'react';

const formatTime = (timeLeftInSecond, timeLabel) => {
  let minute = Math.floor(timeLeftInSecond / 60);
  if (minute < 10) minute = '0' + minute;

  let second = timeLeftInSecond - 60 * minute;
  if (second < 10) second = '0' + second;

  if(timeLeftInSecond == 0)
  {
    document.title = "Unstoppable Flow"
  }
  else {
    document.title = `${minute}:${second} ${timeLabel} - Unstoppable Flow`;
  }

  return `${minute}:${second}`;
}

export default class PomodoroTimes extends Component {
  render() {
    return (
      <div className="times">
        <div className="times-content">
          <label id="timer-label">{this.props.timeLabel}</label>
          <span id="time-left">{formatTime(this.props.timeLeftInSecond, this.props.timeLabel)}</span>
        </div>
      </div>
    )
  }
}