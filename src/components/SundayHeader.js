import React, { Component } from 'react';

export class SundayHeader extends Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
        this.props.mixpanel.track('Loaded Unstoppable App');
    }

    render() {
        return (
            <div className="intro_overview">
              
              <img className="logo" src="https://www.getunstoppable.com/wp-content/uploads/2018/02/ICON@1x.jpg" alt="TK Kader Unstoppable Logo"></img> 

              <p className="title">Unstoppable</p>

              <p className="small"><strong>Get into an instant flow state with the power of the Pomodoro technique and Alpha Waves playing in the background.</strong></p>

            </div>
        );
    }
}