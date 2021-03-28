import React, { Component } from 'react';

export default class FlowViral extends Component {

    constructor(props) {
      super(props);
    }

    render() {
        if(this.props.numMinutes > 15) {
            return (
                <div className="flowviral">
                <hr/>
                <p>
                    You've unlocked {this.props.numMinutes} minutes of flow state. Share with your friends:
                </p>
                    <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-size="large" data-text="I&#39;m having my most productive day ever thanks to the Unstoppable Flow desktop app! Pomodoro timer plus alpha waves playing in the background 🙏🙌." data-url="https://getunstoppable.com/flow" data-via="tawheed" data-related="tawheed" data-show-count="false">Tweet</a>                
                
                </div>
            );    
        }
        else {
            return (
            <div className="flowviral">
                <hr/>
                <p>Share with friends:</p> 
                <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-size="large" data-text="I&#39;m having my most productive day ever thanks to the Unstoppable Flow desktop app! Pomodoro timer plus alpha waves playing in the background 🙏🙌." data-url="https://getunstoppable.com/flow" data-via="tawheed" data-related="tawheed" data-show-count="false">Tweet</a>                
            </div>);
        }
    }
}