import React, { Component } from 'react';
import { TwitterShareButton, TwitterDMButton } from 'react-twitter-embed';

export default class FlowViral extends Component {

    constructor(props) {
      super(props);
    }

    render() {
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
        else {
            return (
                <div className="upsells">
                <h3>Unstoppable Life Planning Guide</h3>
                <p className="small">Want to adopt the whole Unstoppable system to run at peak performance? Grab your free copy of the <a href="https://getunstoppable.com/life-strategy?utm_source=flow" target="_new">Unstoppable Life Planning Guide.</a></p>
                </div>
            )
        }
    }
}
