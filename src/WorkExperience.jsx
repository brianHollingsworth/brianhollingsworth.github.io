import React from 'react';
import JobList from './JobList'

export default function WorkExperience(props) {
    return (
        <div id="work-experience">
            <h2>Work Experience</h2>
            <JobList/>
            <div className="spacer"></div>
        </div>
    );
}
