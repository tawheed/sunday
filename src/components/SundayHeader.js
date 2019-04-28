import React, { Component } from 'react';

export class SundayHeader extends Component {
    componentDidMount() {
        this.props.mixpanel.track('Loaded Unstoppable App');
    }

    render() {
        return (
            <div className="intro_overview">
              
              <img className="logo" src="https://www.getunstoppable.com/wp-content/uploads/2018/02/ICON@1x.jpg" alt="TK Kader Unstoppable Logo"></img> 
              
              <p className="subtitle">TK Kader</p>

              <p className="title">Unstoppable Sunday</p>

              <p className="small"><strong>In just 30 minutes, we'll help you punch the Sunday jitters in the face and plan out your week ahead.</strong></p>

            </div>
        );
    }
}