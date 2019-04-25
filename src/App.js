import React, { Component } from 'react';
import 'trix/dist/trix.css'
import './App.css';
import { SundayEditor } from './components/SundayEditor';
import { SundayHeader } from './components/SundayHeader';
import { SundayVideo } from './components/SundayVideo';

class App extends Component {
  render() {
    return (
      <main className="layout">
          <section className="intro">
            <div className="intro__inner">
              <SundayHeader/>
              <SundayVideo/>
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
