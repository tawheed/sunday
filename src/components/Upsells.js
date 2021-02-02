import React, { Component } from 'react';


export class Upsells extends Component {

    constructor(props) {
      super(props);
    }


    render() {
        return (
            <div className="upsells">
                <h3>Join TK's Life Accelerator</h3>
                <p>Accomplish your wildest goals by adopting an unstoppable strategy for your life.</p>
                <a href="https://getunstoppable.com/go?utm_source=pomodoro" className="migrate button" target="_new" >Learn More &rarr;</a>

            </div>
        );
    }
}