import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import mixpanel from 'mixpanel-browser';
import { MixpanelProvider, MixpanelConsumer } from 'react-mixpanel';
 
export class SundayVideo extends Component {

	onProgress(data) {
		this.mixpanel.track("Watched Sunday Video", { "playedSeconds": data.playedSeconds});
	}

	render () {
       return (
            <MixpanelConsumer>
              {mixpanel => <ReactPlayer url='https://tkkader.wistia.com/medias/vz4r6x59gv' width="100%" height="100%" className='player' playing progressInterval='60000' mixpanel={mixpanel} onProgress={this.onProgress}/>}
            </MixpanelConsumer>
	    );
	}
}