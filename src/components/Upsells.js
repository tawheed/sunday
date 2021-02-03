import React, { Component } from 'react';


export class Upsells extends Component {

    constructor(props) {
      super(props);
    }


    render() {
        return (
            <div className="upsells">
                <hr/>
                <h3>Share with your friends:</h3><br/> <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-size="large" data-text="I&#39;m having my most productive day ever thanks to the Unstoppable Flow desktop app! Pomodoro timer plus alpha waves playing in the background 🙏🙌." data-url="https://getunstoppable.com/flow" data-via="tawheed" data-related="tawheed" data-show-count="false">Tweet</a>        
            </div>
        );
    }
}