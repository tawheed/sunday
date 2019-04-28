import React, { Component } from 'react'
import ReactPlayer from 'react-player'
 
export class SundayVideo extends Component {
  render () {
    return <ReactPlayer url='https://tkkader.wistia.com/medias/fciw4wbeuz' width="100%" height="100%" className='player' playing />
  }
}