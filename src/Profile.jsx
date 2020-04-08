import React from 'react';
import './css/Profile.css';

export default function Profile(props) {
    return (
        <div id="profile">
            <h1>Brian J. Hollingsworth</h1>
            <span id="profile-span">
            <p id="foreward">I am a software engineer, and this is my ever-changing alternative to LinkedIn and
                paper resume. Originally developed as a <a
                id="original-repo-link"
                href="https://github.com/brianHollingsworth/brian.hollingsworth.codes"
                target="_blank"
                rel="noopener noreferrer">Node.js</a> application on the free tier of OpenShift, it has
                been refactored into React and placed on GitHub Pages.</p>
            </span>
        </div>
    );
}
