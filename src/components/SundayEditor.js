import React, { Component } from 'react';
import { TrixEditor } from "react-trix";
import  'trix'

export class SundayEditor extends Component {
    handleEditorReady(editor) {
        // this is a reference back to the editor if you want to
        // do editing programatically

        var isTodaySunday = (new Date().getDay() === 0);
        var todayDateString = new Date().toLocaleDateString("en-US", { year: 'numeric', month: 'short', day: 'numeric' });
        var lastSundayEntry = localStorage.getItem("last-sunday-entry");
        var sundayEntries = localStorage.getItem("sunday-entries");
        var newEntryTemplate = "<b>" + todayDateString + "</b><h1>Where am I?</h1><ul><li>What’re you feeling?<br><br></li><li>What’re the things that are bothering you?<br><br></li><li>What were your successes from the past week (little or small)?<br><br></li><li>What’re the things you’re excited about?<br><br></li><li>What’re the things you’re behind on?</li></ul><div><br>&lt;start writing here&gt;<br><br></div><h1>What do I do next?</h1><ul><li>To solve that problem that’s bothering me, here are the 3 things I need to do to make it <em>better<br></em><br></li><li>I really want to prioritize X<br><br></li><li>I don’t think I should waste time on Y so try to get out of it<br><br></li><li>Do this again 7 days from now. The key to this working is establishing a discipline EVERY SUNDAY to check in on yourself in this document, and keep making strides. I personally do this EVERY SUNDAY --- and I call it my UNSTOPPABLE SUNDAY.</li></ul><div><br>&lt;start writing here&gt;</div><br/>"

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
        localStorage.setItem("sunday-entries", html)
    }

    render() {
        return (
            <div className="trix-container__inner">
                <TrixEditor onChange={this.handleChange} onEditorReady={this.handleEditorReady}/>
            </div>
        );
    }
}