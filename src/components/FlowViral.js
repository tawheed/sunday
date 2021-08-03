import React, { Component } from 'react';
import { TwitterShareButton, TwitterDMButton } from 'react-twitter-embed';

export default class FlowViral extends Component {

    constructor(props) {
      super(props);
    }

    render() {
        var day = new Date().getDay();
        if(this.props.numMinutes > 15) {
            var viralText = "I've unlocked " + this.props.numMinutes + " minutes of flow state today thanks to the Unstoppable Flow desktop app! Pomodoro timer plus alpha waves playing in the background 🙏🙌."
            return (
                <div className="flowviral">
                    <p className="tweet-preview">
                        {viralText}
                    </p>
                    <TwitterShareButton
                        key={this.props.numMinutes}
                        url={'https://getunstoppable.com/flow'}
                        options={{ text: viralText, via: 'tawheed', size: 'large', 'show-count': true }}
                    />
                </div>
            );        
        }
        else if(day != 0 && day != 1 && day < 5) {
            return (
                <div className="upsells">
                    <br/>
                    <a href="https://offers.tkkader.com/peak-performance-blueprint-for-founders?utm_source=flow" target="_new"><img width="125px" src="https://offers.tkkader.com/hosted/images/6a/a53672a5e7494f817545065238e6dc/Black-and-White-Minimalist-Typography-Book-Cover-9-.png"></img></a>
                    <p className="small">Want to adopt the whole Unstoppable system to run at peak performance? Grab your copy of the <a href="https://offers.tkkader.com/peak-performance-blueprint-for-founders?utm_source=flow" target="_new">Unstoppable Peak Performance Blueprint.</a></p>
                    <br/>
                </div>
            )
        }
        else {
            return null;
        }
    }
}
