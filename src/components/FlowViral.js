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
                    <br/>
                    <img width="75px" src="https://images.clickfunnels.com/cb/5f711903be4fb496f8d1fcd8c1c80c/Black-and-White-Minimalist-Typography-Book-Cover-2-.png"></img>
                    <p className="small">Want to adopt the whole Unstoppable system to run at peak performance? Grab your copy of the <a href="https://offers.tkkader.com/unstoppable-life?utm_source=flow" target="_new">Unstoppable Life Strategy Blueprint.</a></p>
                    <br/>
                </div>
            )
        }
    }
}
