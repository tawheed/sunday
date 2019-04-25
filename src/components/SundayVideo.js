import React, { Component } from 'react'
import ReactPlayer from 'react-player'
 
export class SundayVideo extends Component {
  render () {
    return <ReactPlayer url='https://www.youtube.com/watch?v=D-2BlejUn0g&t=34s' width="100%" height="180px" playing />
  }
}