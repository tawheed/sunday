import React, { Component } from 'react';
import { MigrateModal } from './MigrateModal';

export class Upsells extends Component {

    constructor(props) {
        super(props);
        this.state = {isOpen: false};
        this.handleClick = this.handleClick.bind(this);        
    }

    handleClick(e) {
        if(!this.state.isOpen) {
            this.props.mixpanel.track('Clicked Sunday Upsell');
        }
        this.setState(state => ({
            isOpen: !state.isOpen
        }));
    }
    render() {
        var show = false;
        var day = new Date().getDay();
        if(day === 0 || day === 1 || day > 4) {
            show = true;
        }
        
        if(show) {
            return (
            <div className="sunday-upsells">       
                <h3>Want to Reflect on the Past Week And Create a Plan for the Coming Week?</h3>
                <p className="small">You've been using Unstoppable Flow to stay focused, now it's time to practice Unstoppable Sunday to pause, reflect, and plan your week.</p>
                <a className="button green" onClick={this.handleClick}>Yes! I want to Plan My Week</a>
                <MigrateModal show={this.state.isOpen} onClose={this.handleClick}></MigrateModal>
            </div> 
            );
        } 
        else {
            return null;
        }
    }
}