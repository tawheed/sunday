import React, { Component } from 'react';
import 'trix/dist/trix.css'
import './App.css';
import mixpanel from 'mixpanel-browser';
import { MixpanelProvider, MixpanelConsumer } from 'react-mixpanel';
import { SundayEditor } from './components/SundayEditor';
import { SundayVideo } from './components/SundayVideo';
import { SundayHeader } from './components/SundayHeader';
import { Upsells } from './components/Upsells';
import { Pomodoro } from './components/Pomodoro';
import { MigrateModal } from './components/MigrateModal';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { isOpen: true };
  }

  toggleModal = () => {
    // if(localStorage.getItem("sunday-entries").length < 400)
    //   window.location = "https://app.unstoppablesunday.com/users/sign_up";
    // else {
      this.setState({
        isOpen: !this.state.isOpen
      });
    // }
  }


  render() {
    return (
      <main className="layout">
          
          <section className="intro">
            <div className="intro__inner">
              <MixpanelConsumer>
                {mixpanel => <SundayHeader mixpanel={mixpanel} darkMode={true}/>}
              </MixpanelConsumer> 

              <SundayVideo/>
              
              <Pomodoro 
                githubURL="https://github.com/completejavascript/pomodoro-clock"
                defaultBreakLength='5' 
                defaultSessionLength='15' />


              <div className="upsells">
                <Upsells toggleModal={this.toggleModal}/>
              </div> 
              
            </div>
          </section>

          <section className="trix-container">
            <SundayEditor/>
          </section>

      </main>
    );
  }
}

export default App;
