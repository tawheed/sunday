import React, { Component } from 'react';


export class Upsells extends Component {

    constructor(props) {
      super(props);
    }


    render() {
        return (
            <div className="upsells">
                <h3>Save Your Data & Create an Account</h3>
                <ul>
                    <li>Securely store your entries</li>
                    <li>Text Reminder to Practice Sunday</li>
                    <li>Text Reminder to Celebrate Your Wins</li>
                    <li>Special Monthly Sunday training</li>
                </ul>

                <p className="migrate button" onClick={this.props.toggleModal} >Create Account &rarr;</p>

            </div>
        );
    }
}