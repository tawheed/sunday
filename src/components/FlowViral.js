import React, { Component } from 'react';
import { TwitterShareButton, TwitterDMButton } from 'react-twitter-embed';
import { MigrateModal } from './MigrateModal';

export default class FlowViral extends Component {

    constructor(props) {
      super(props);
      this.state = {isOpen: false};
      this.handleClick = this.handleClick.bind(this);      
    }

    handleClick(e) {
        if(!this.state.isOpen) {
            this.props.mixpanel.track('Created Unstoppable Account');
        }
        this.setState(state => ({
            isOpen: !state.isOpen
        }));
    }

    onHasAccount = () => {
        localStorage.setItem("has-unstoppable-account", "1")
    }
    

    render() {
        var day = new Date().getDay();
        if(this.props.numMinutes > 90) {
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
                    <h3>Save Your Data</h3>
                    <p className="small">Save your data and use the full Unstoppable system by creating your Unstoppable account.</p>
                    <a className="button green" onClick={this.handleClick}>Yes! Create My Account &rarr;</a>
                    <MigrateModal show={this.state.isOpen} onClose={this.handleClick}></MigrateModal>
                    <p className="small login">Or, <a href="https://app.unstoppablesunday.com/users/sign_in" onClick={this.onHasAccount}>Log In to Your Unstoppable Account</a></p>
                </div>
            )
        }
    }
}
