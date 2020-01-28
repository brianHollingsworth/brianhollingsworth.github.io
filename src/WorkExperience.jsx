import React from 'react';
import Job from './Job';

export default function WorkExperience(props) {
    return (
        <div id="work-experience">
            <h2>Work Experience</h2>
            {/* TODO: Implement a read-from-JSON feature, similar to the
            original brian.hollingsworth.codes read displayed information. */}
            <Job title="Software Engineer" company="Optum" tenure="October 2018 - Present"/>
            <Job title="Associate Software Engineer" company="Optum" tenure="August 2018 - October 2018"/>
            <Job title="Applications Developer II" company="Optum" tenure="January 2018 - August 2018"/>
            <Job title="Tech Dev Program Senior Associate" company="Optum" tenure="November 2016 - January 2018"/>
            <Job title="Tech Dev Program Intern" company="Optum" tenure="June 2016 - August 2016"/>
            <Job title="Software Engineering Intern" company="Maverick Software Consulting" tenure="March 2014 – April 2016"/>
            <Job title="Software Quality Assurance Intern" company="Symantec" tenure="May 2015 – August 2015"/>
            <Job title="Manager" company="Marnanteli's Pizza" tenure="January 2012 – February 2016"/>
            <Job title="Fulfillment Associate" company="Merrill Corporation" tenure="July 2012 – February 2014"/>
            <div className="spacer"></div>
        </div>
    );
}
