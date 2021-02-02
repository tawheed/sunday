import React, { Component } from 'react';
import { TrixEditor } from "react-trix";
import  'trix'
import mixpanel from 'mixpanel-browser';
import { MixpanelProvider, MixpanelConsumer } from 'react-mixpanel';

export class SundayEditor extends Component {
    handleEditorReady(editor) {
        // this is a reference back to the editor if you want to
        // do editing programatically

        var isTodaySunday = (new Date().getDay() === 0);
        var todayDateString = new Date().toLocaleDateString("en-US", { year: 'numeric', month: 'short', day: 'numeric' });
        var lastSundayEntry = localStorage.getItem("last-sunday-entry");
        var sundayEntries = localStorage.getItem("sunday-entries");
        var newEntryTemplate = "<b>" + todayDateString + "</b><h1>What do I want to do today?</h1><ul><li>You can start writing here...</li></ul><br/>"

        if(sundayEntries == null || sundayEntries === "" || sundayEntries.length < 100) {
            sundayEntries = newEntryTemplate;
        }

        if(todayDateString !== lastSundayEntry && isTodaySunday) {
            if(sundayEntries === null) { sundayEntries = ""; }
            sundayEntries = newEntryTemplate + sundayEntries;
            localStorage.setItem("sunday-entries", sundayEntries);
            lastSundayEntry = todayDateString;
            localStorage.setItem("last-sunday-entry", lastSundayEntry);
        }
        
        editor.insertHTML(sundayEntries);
    }
    
    handleChange(html, text) {
        var numWords = html.length;

        localStorage.setItem("sunday-entries", html)
        
        var lastCountTimeStamp = localStorage.getItem("last-count-timestamp");

        if(lastCountTimeStamp == null)
        {
            lastCountTimeStamp = Date.now();
            localStorage.setItem("last-count-timestamp", lastCountTimeStamp);
        }

        if((Date.now() - lastCountTimeStamp) / 1000 > 60)
        {
            this.mixpanel.track('Practiced Sunday', { "numWords": numWords});
            lastCountTimeStamp = Date.now();
            localStorage.setItem("last-count-timestamp", lastCountTimeStamp);            
        }

    }

    render() {
        return (
            <div className="trix-container__inner">
                <MixpanelConsumer>
                  {mixpanel => <TrixEditor mixpanel={mixpanel} onChange={this.handleChange} onEditorReady={this.handleEditorReady}/>}
                </MixpanelConsumer>
            </div>
        );
    }
}