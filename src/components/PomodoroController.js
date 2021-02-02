import React, { Component } from 'react';
import { SundayVideo } from './SundayVideo';

export default class PomodoroController extends Component {
  render() {
    return (
      <div className="controller">
        <button className='button normal' id="start_stop" onClick={this.props.onStartStop}>
          {this.props.isStart ? 'Stop' : 'Start'}
        </button>
        <button className='button normal' id="reset" onClick={this.props.onReset}>Reset</button>
      </div>
    )
  }
}