import React, { Component } from 'react';
import 'trix/dist/trix.css'
import './App.css';
import mixpanel from 'mixpanel-browser';
import { MixpanelProvider, MixpanelConsumer } from 'react-mixpanel';
import { SundayEditor } from './components/SundayEditor';
import { SundayHeader } from './components/SundayHeader';
import { SundayVideo } from './components/SundayVideo';
import { Upsells } from './components/Upsells';

class App extends Component {
  render() {
    return (
      <main className="layout">
          
          <section className="intro">
            <div className="intro__inner">
              <MixpanelConsumer>
                {mixpanel => <SundayHeader mixpanel={mixpanel}/>}
              </MixpanelConsumer> 

              <div className="video-wrapper">
                <SundayVideo/>
              </div>

              <div className="upsells">
                <Upsells/>
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
