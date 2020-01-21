import React from 'react';
import Job from './Job';

export default function WorkExperience(props) {
    return (
        <div id="work-experience">
            <h2>Work Experience</h2>
            {/* TODO: Implement a read-from-JSON feature, similar to the
            original brian.hollingsworth.codes read displayed information. */}
            <Job title="Software Engineer" company="Optum"/>
            <Job title="Associate Software Engineer" company="Optum"/>
            <Job title="Applications Developer II" company="Optum"/>
            <Job title="Tech Dev Program Senior Associate" company="Optum"/>
            <Job title="Tech Dev Program Intern" company="Optum"/>
            <Job title="Software Engineering Intern" company="Maverick Software Consulting"/>
            <Job title="Software Quality Assurance Intern" company="Symantec"/>
            <Job title="Manager" company="Marnanteli's Pizza"/>
            <Job title="Fulfillment Associate" company="Merrill Corporation"/>
        </div>
    );
}
