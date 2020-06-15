import React, { Component } from 'react';
import { MigrateModal } from './MigrateModal';

export class SundayHeader extends Component {
    constructor(props) {
      super(props);
      this.state = { isOpen: false };
    }

    componentDidMount() {
        this.props.mixpanel.track('Loaded Unstoppable App');
    }

    toggleModal = () => {
      if(localStorage.getItem("sunday-entries").length < 400)
        window.location = "https://app.unstoppablesunday.com/users/sign_up";
      else {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    }

    render() {
        return (
            <div className="intro_overview">
              
              <img className="logo" src="https://www.getunstoppable.com/wp-content/uploads/2018/02/ICON@1x.jpg" alt="TK Kader Unstoppable Logo"></img> 
              
              <p className="subtitle">TK Kader</p>

              <p className="title">Unstoppable Sunday</p>

              <p className="small"><strong>In just 30 minutes, we'll help you punch the Sunday jitters in the face and plan out your week ahead.</strong></p>

              <p className="migrate button" onClick={this.toggleModal} >Upgrade to the New Unstoppable App</p>

              <MigrateModal show={this.state.isOpen}
                onClose={this.toggleModal}>
                Here's some content for the modal
              </MigrateModal>
            </div>
        );
    }
}