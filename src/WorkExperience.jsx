import React from 'react';
import JobList from './JobList'

export default function WorkExperience(props) {
    return (
        <div id="work-experience">
            <h1>Work Experience</h1>
            <JobList/>
            <div className="spacer"></div>
        </div>
    );
}
