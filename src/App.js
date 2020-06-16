import React, { Component } from 'react';
import 'trix/dist/trix.css'
import './App.css';
import mixpanel from 'mixpanel-browser';
import { MixpanelProvider, MixpanelConsumer } from 'react-mixpanel';
import { SundayEditor } from './components/SundayEditor';
import { SundayHeader } from './components/SundayHeader';
import { SundayVideo } from './components/SundayVideo';
import { Upsells } from './components/Upsells';
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
                {mixpanel => <SundayHeader mixpanel={mixpanel}/>}
              </MixpanelConsumer> 


              <SundayVideo/>

              <div className="upsells">
                <Upsells toggleModal={this.toggleModal}/>
              </div> 
              
            </div>
          </section>

          <section className="trix-container">
            <SundayEditor/>
          </section>

          <MigrateModal show={this.state.isOpen} onClose={this.toggleModal}>
          </MigrateModal>

      </main>
    );
  }
}

export default App;
