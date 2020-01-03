import React from 'react';

export default function Profile(props) {
    return (
        <div>
            <h2>Profile</h2>
            <p>If it wasn't apparent by the URL, I'm Brian Hollingsworth. I made
                brian.hollingsworth.codes for a multitude of reasons: I wanted an always-changing
                side project for experimenting with new web frameworks; updating a paper resume felt
                antiquated, and LinkedIn became tiresome. Nothing makes me feel more homogeneous
                than flaunting my profile on the same platform as every other developer out there.
                <br/>I am still in the process of fully migrating from my previous <a
                className="App-link"
                href="https://github.com/brianHollingsworth/brian.hollingsworth.codes"
                target="_blank"
                rel="noopener noreferrer">Node.js resume</a>, so feel free to pull from that repository 
                in the meantime.</p>
        </div>
    );
}
