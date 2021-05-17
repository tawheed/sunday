import React, { Component } from 'react';
import Settings from './PomodoroSettings';
import Times from './PomodoroTimes';
import FlowStats from './FlowStats';
import FlowViral from './FlowViral';
import Controller from './PomodoroController';
import ReactPlayer from 'react-player'
import Datejs from 'datejs'
import './Pomodoro.css';

export class Pomodoro extends Component {
  constructor(props) {
    super(props);

    this.audioBeep = React.createRef();

    this.state = {
      breakLength: Number.parseInt(this.props.defaultBreakLength, 10),
      sessionLength: Number.parseInt(this.props.defaultSessionLength, 10),
      timeLabel: 'Session',
      timeLeftInSecond: Number.parseInt(this.props.defaultSessionLength, 10) * 60,
      isStart: false,
      timerInterval: null,
      beepPlaying: false,
      stats: [],
      numSessions: 0,
      numMinutes: 0,
      todayString: null,
      admin: false
    }

    this.onIncreaseBreak = this.onIncreaseBreak.bind(this);
    this.onDecreaseBreak = this.onDecreaseBreak.bind(this);
    this.onIncreaseSession = this.onIncreaseSession.bind(this);
    this.onDecreaseSession = this.onDecreaseSession.bind(this);
    this.onReset = this.onReset.bind(this);
    this.onStartStop = this.onStartStop.bind(this);
    this.decreaseTimer = this.decreaseTimer.bind(this);
    this.phaseControl = this.phaseControl.bind(this);

    if(localStorage.getItem("flow-stats") != null) {
      this.stats = JSON.parse(localStorage.getItem("flow-stats"));
      if(this.stats[Date.today().toString("MM-dd-yyyy")] == null) {
        this.stats[Date.today().toString("MM-dd-yyyy")] = [];  
      }
    }
    else {
      this.stats = new Array();
      this.stats[Date.today().toString("MM-dd-yyyy")] = [];
    }
  }

  onIncreaseBreak() {
    if (this.state.breakLength < 60 && !this.state.isStart) {
      this.setState({
        breakLength: this.state.breakLength + 1
      });
    }
  }

  onDecreaseBreak() {
    if (this.state.breakLength > 1 && !this.state.isStart) {
      this.setState({
        breakLength: this.state.breakLength - 1
      });
    }
  }

  onIncreaseSession() {
    if (this.state.sessionLength < 60 && !this.state.isStart) {
      this.setState({
        sessionLength: this.state.sessionLength + 1,
        timeLeftInSecond: (this.state.sessionLength + 1) * 60
      });
    }
  }

  onDecreaseSession() {
    if (this.state.sessionLength > 1 && !this.state.isStart) {
      this.setState({
        sessionLength: this.state.sessionLength - 1,
        timeLeftInSecond: (this.state.sessionLength - 1) * 60
      });
    }
  }

  onReset() {
    this.setState({
      breakLength: Number.parseInt(this.props.defaultBreakLength, 10),
      sessionLength: Number.parseInt(this.props.defaultSessionLength, 10),
      timeLabel: 'Session',
      timeLeftInSecond: Number.parseInt(this.props.defaultSessionLength, 10) * 60,
      isStart: false,
      timerInterval: null
    });

    this.audioBeep.current.seekTo(0);
    this.setState({beepPlaying: false});

    this.state.timerInterval && clearInterval(this.state.timerInterval);
  }

  onStartStop() {
    if (!this.state.isStart) {
      this.setState({
        isStart: !this.state.isStart,
        timerInterval: setInterval(() => {
          this.decreaseTimer();
          this.phaseControl();
        }, 1000)
      })
    } else {
      this.audioBeep.current.seekTo(0);
      this.setState({beepPlaying: false});
      this.state.timerInterval && clearInterval(this.state.timerInterval);

      this.setState({
        isStart: !this.state.isStart,
        timerInterval: null
      });
    }
  }

  decreaseTimer() {
    this.setState({
      timeLeftInSecond: this.state.timeLeftInSecond - 1
    });
  }

  phaseControl() {
    if (this.state.timeLeftInSecond === 0) {
      this.audioBeep.current.seekTo(0);
      this.setState({beepPlaying: true});
      this.props.mixpanel.track('Performed Pomodoro Session');
    } else if (this.state.timeLeftInSecond === -1) {
      if (this.state.timeLabel === 'Session') {
        this.setState({
          timeLabel: 'Break',
          timeLeftInSecond: this.state.breakLength * 60
        });

        // Update State Time-Series
        var today = new Date();
        var todayString = today.toString("MM-dd-yyyy")
        var hourString = today.toString("H");

        var stats = this.state.stats;

        if(stats[todayString])
        {
          if(!stats[todayString][hourString]) {
            stats[todayString][hourString] = {};
          }
          stats[todayString][hourString].sessions = stats[todayString][hourString].sessions + 1;
          stats[todayString][hourString].minutes = stats[todayString][hourString].minutes + this.state.sessionLength;
        }
        else 
        {
          stats[todayString] = [];
          stats[todayString][hourString] = {}
          stats[todayString][hourString].sessions = 1;
          stats[todayString][hourString].minutes = this.state.sessionLength;
        }
        this.setState({stats: stats})
        this.setState({numSessions: this.state.numSessions + 1});
        this.setState({numMinutes: this.state.numMinutes + this.state.sessionLength});
        this.setState({todayString: todayString});

      } else {
        this.props.mixpanel.track('Performed Pomodoro Break');
        this.setState({
          timeLabel: 'Session',
          timeLeftInSecond: this.state.sessionLength * 60
        });;
      }
    }
  }

  render() {
    return (
      <div className="pomodoro-clock">
        <div className="pomodoro-clock-main">
            <Times
                timeLabel={this.state.timeLabel}
                timeLeftInSecond={this.state.timeLeftInSecond}
            />

            <Controller
                onReset={this.onReset}
                onStartStop={this.onStartStop}
                isStart={this.state.isStart}
            />
        </div>
        
        <Settings
          breakLength={this.state.breakLength}
          sessionLength={this.state.sessionLength}
          isStart={this.state.isStart}
          onDecreaseBreak={this.onDecreaseBreak}
          onDecreaseSession={this.onDecreaseSession}
          onIncreaseBreak={this.onIncreaseBreak}
          onIncreaseSession={this.onIncreaseSession}
        />

        <FlowStats 
          numSessions= {this.state.numSessions}
          numMinutes= {this.state.numMinutes}
          todayString= {this.state.todayString}
          stats = {this.state.stats}
          admin = {this.state.admin}
        />


        <FlowViral 
          numSessions= {this.state.numSessions}
          numMinutes= {this.state.numMinutes}
          admin= {this.state.admin}
        />
        
        <ReactPlayer
						ref={this.audioBeep}
						className='player-beep'
						width='100%'
						height='35px'
						url={'https://tk-unstoppable.s3.amazonaws.com/BeepSound.wav'}
						playing={this.state.beepPlaying}
            controls={true}
            volume='0.2'
						loop={false}
					/>
      </div>
    );
  }
}