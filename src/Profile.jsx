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
                href="https://www.youracclaim.com/badges/5931d596-c2da-4b98-ace2-81e46d0c231b/public_url"
                target="_blank"
                rel="noopener noreferrer">AWS Certified Cloud Practitioner</a>. With some more time working in an enterprise setting,
                the AWS Certified Developer - Associate is certainly my next endeaver.
            </p>
            </span>
            <CertificationGrid/>
        </div>
    );
}
