import React from 'react';
import CertificationGrid from './CertificationGrid'
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
                rel="noopener noreferrer">AWS Amplify</a>.<br/><br/>My fandom of AWS drove me to become an <a
                className="aws-certified-cloud-practitioner"
                href="https://www.credly.com/badges/f37e7393-999b-4d45-92ac-49a29a9468de"
                target="_blank"
                rel="noopener noreferrer">AWS Certified Cloud Practitioner</a> and an <a
                className="aws-certified-developer-associate"
                href="https://www.credly.com/badges/07c5983e-d7f0-43d2-84a4-6dac97b6be3c"
                target="_blank"
                rel="noopener noreferrer">AWS Certified Developer – Associate</a>. A professional-level certification will be my next pursuit.
            </p>
            </span>
            <CertificationGrid/>
        </div>
    );
}
