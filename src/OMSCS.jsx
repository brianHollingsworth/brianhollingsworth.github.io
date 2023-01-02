import React from 'react';
import CourseList from './CourseList';
import './css/OMSCS.css'

export default function OMSCS(props) {
    return (
        <div id="omscs">
            <h1>OMSCS</h1>
            <span id="omscs-span">
            <p id='gt-foreward'>
                I am currently enrolled in Georgia Tech's <a
                className="profile-link"
                href="https://omscs.gatech.edu/"
                target="_blank"
                rel="noopener noreferrer">OMSCS</a> program with a specialization in Computing Systems.
                I will be contemporaneously logging my experience in each course I take.
            </p>
            </span>
            <CourseList/>
            <div className="spacer"></div>
        </div>
    );
}