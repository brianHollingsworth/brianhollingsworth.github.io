import React from 'react';
import './css/Profile.css';

export default function Profile(props) {
    return (
        <div id="profile">
            <h1>Brian J. Hollingsworth</h1>
            <span id="profile-span">
            <p id="foreward">I am a software engineer, and this is my ever-changing alternative to LinkedIn and
                paper resume. Originally developed as a <a
                className="profile-link"
                href="https://github.com/brianHollingsworth/brian.hollingsworth.codes"
                target="_blank"
                rel="noopener noreferrer">Node.js</a> application on the free tier of OpenShift, it has
                been refactored into React and placed on <a
                className="profile-link"
                href="https://aws.amazon.com/amplify/"
                target="_blank"
                rel="noopener noreferrer">AWS Amplify</a>.</p>
            </span>
        </div>
    );
}
