import React, { Component } from 'react';

export class SundayHeader extends Component {
    state = {
      darkMode: false
    }

    darkMode = () => {
      this.setState({ darkMode: !this.state.darkMode })
      if(this.state.darkMode) {
        document.body.className = 'dark';
      }
      else {
        document.body.className = '';
      }
    }    

    constructor(props) {
      super(props);
    }

    componentDidMount() {
        this.props.mixpanel.track('Loaded Unstoppable App');
        this.setState({ darkMode: this.props.darkMode});
    }

    render() {
        return (
            <div className="intro_overview">
              
              <img className="logo" src="https://www.getunstoppable.com/wp-content/uploads/2018/02/ICON@1x.jpg" alt="TK Kader Unstoppable Logo"></img> 

              <a className="darkMode" onClick={this.darkMode}>🌙</a>

              <p className="title">Unstoppable Flow</p>

              <p className="small"><strong>Get into an instant flow state with the power of the Pomodoro technique and Alpha Waves playing in the background.</strong></p>

            </div>
        );
    }
}