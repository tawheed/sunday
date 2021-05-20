import React, { Component } from 'react';
import { TrixEditor } from "react-trix";
import { Upsells } from './Upsells';
import  'trix'
import mixpanel from 'mixpanel-browser';
import { MixpanelProvider, MixpanelConsumer } from 'react-mixpanel';

export class SundayEditor extends Component {
    handleEditorReady(editor) {
        // this is a reference back to the editor if you want to
        // do editing programatically

        var todayDateString = new Date().toLocaleDateString("en-US", { year: 'numeric', month: 'short', day: 'numeric' });
        var lastDayEntry = localStorage.getItem("last-day-entry");
        var sundayEntries = localStorage.getItem("sunday-entries");
        var newEntryTemplate = "<b>" + todayDateString + "</b><h1>What do I want to accomplish today?</h1><ul><li>Your most urgent item...</li><li>Your most important item...</li><li>One more thing you want to get done...</li><li><del>Something you already got done today...</del></li></ul><br/>"

        if(sundayEntries == null || sundayEntries === "" || sundayEntries.length < 100) {
            sundayEntries = newEntryTemplate;
        }

        if(todayDateString !== lastDayEntry) {
            if(sundayEntries === null) { sundayEntries = ""; }
            sundayEntries = newEntryTemplate + sundayEntries;
            localStorage.setItem("sunday-entries", sundayEntries);
            lastDayEntry = todayDateString;
            localStorage.setItem("last-day-entry", lastDayEntry);
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
                  {mixpanel => <Upsells mixpanel={mixpanel}/>}
                </MixpanelConsumer>
                
                <MixpanelConsumer>
                  {mixpanel => <TrixEditor mixpanel={mixpanel} onChange={this.handleChange} onEditorReady={this.handleEditorReady}/>}
                </MixpanelConsumer>
            </div>
        );
    }
}