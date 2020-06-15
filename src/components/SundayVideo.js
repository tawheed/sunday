import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import mixpanel from 'mixpanel-browser';
import { MixpanelProvider, MixpanelConsumer } from 'react-mixpanel';
 
export class SundayVideo extends Component {
	state = {
		url: 'https://tkkader.wistia.com/medias/vz4r6x59gv',
		pip: false,
		playing: true,
		controls: false,
		light: false,
		volume: 0.8,
		muted: false,
		played: 0,
		loaded: 0,
		duration: 0,
		playbackRate: 1.0,
		loop: false,
		progressInterval: 60000,
		fastForwardMode: true
	}

	playPause = () => {
		this.setState({ playing: !this.state.playing })
	}

	stop = () => {
		this.setState({ url: null, playing: false })
	}

	toggleControls = () => {
		const url = this.state.url
		this.setState({
		  controls: !this.state.controls,
		  url: null
		}, () => this.load(url))
	}

	toggleLight = () => {
		this.setState({ light: !this.state.light })
	}

	toggleLoop = () => {
		this.setState({ loop: !this.state.loop })
	}

	setVolume = e => {
	this.setState({ volume: parseFloat(e.target.value) })
	}

	toggleMuted = () => {
		this.setState({ muted: !this.state.muted })
	}

	setPlaybackRate = e => {
		this.setState({ playbackRate: parseFloat(e.target.value) })
	}

	togglePIP = () => {
		this.setState({ pip: !this.state.pip })
	}

	onPlay = () => {
		console.log('onPlay')
		this.setState({ playing: true })
	}

	onEnablePIP = () => {
		console.log('onEnablePIP')
		this.setState({ pip: true })
	}

	onDisablePIP = () => {
		console.log('onDisablePIP')
		this.setState({ pip: false })
	}

	onPause = () => {
		console.log('onPause')
		this.setState({ playing: false })
	}

	onSeekMouseDown = e => {
		this.setState({ seeking: true })
	}

	onSeekChange = e => {
		this.setState({ played: parseFloat(e.target.value) })
	}

	onSeekMouseUp = e => {
		this.setState({ seeking: false })
		this.player.seekTo(parseFloat(e.target.value))
	}

	onProgress = state => {
		console.log('onProgress', state)
		// We only want to update time slider if we are not currently seeking
		if (!this.state.seeking) {
		  this.setState(state)
		}
		mixpanel.track("Watched Sunday Video", { "playedSeconds": state.playedSeconds});
		if(state.playedSeconds > 375)
		{
			this.setState({fastForwardMode: false});
		}

	}

	onEnded = () => {
		console.log('onEnded')
		this.setState({ playing: this.state.loop })
	}

	onDuration = (duration) => {
		console.log('onDuration', duration)
		this.setState({ duration })
	}


	skipToGoodStuff = (event) => {
		if(this.state.fastForwardMode) {
			this.player.seekTo(375, 'seconds')
			this.setState({fastForwardMode: false});
		}
		else
		{
			this.player.seekTo(this.player.getCurrentTime() - 30, 'seconds')
			this.setState({fastForwardMode: false});			
		}
		console.log(event.target);
	}

  	ref = player => {
    	this.player = player
	}

	render () {
	    const { url, playing, controls, light, volume, muted, loop, played, loaded, duration, playbackRate, pip, progressInterval } = this.state
		return (
			<div>
				<div className="video-wrapper">
				    <MixpanelConsumer>
				      {mixpanel => <ReactPlayer
						ref={this.ref}
						className='player'
						width='100%'
						height='100%'
						url={url}
						pip={pip}
						playing={playing}
						controls={controls}
						light={light}
						loop={loop}
						playbackRate={playbackRate}
						volume={volume}
						muted={muted}
						progressInterval={progressInterval}
						onReady={() => console.log('onReady')}
						onStart={() => console.log('onStart')}
						onPlay={this.onPlay}
						onEnablePIP={this.onEnablePIP}
						onDisablePIP={this.onDisablePIP}
						onPause={this.onPause}
						onBuffer={() => console.log('onBuffer')}
						onSeek={e => console.log('onSeek', e)}
						onEnded={this.onEnded}
						onError={e => console.log('onError', e)}
						onProgress={this.onProgress}
						onDuration={this.onDuration}
					/>}
				    </MixpanelConsumer>                
	            </div>
	            <br/>
	            <div>
	            	<button className="button normal" onClick={this.playPause}>{this.state.playing ? 'Pause' : 'Play'}</button> 
	            	<a className="tiny" href="#" onClick={this.skipToGoodStuff}>{this.state.fastForwardMode ? 'Skip to the good stuff →' : '⟲ Go back 30 seconds'}</a>
	            </div>
	        </div>
		);
	}
}