import React from 'react';
import parse from 'html-react-parser';
import './css/Job.css';

const Job = props => {
    return (
        <div className="job">
            <div className="job-header">
                <h4 className="job-title">{props.title}</h4>
                <h5 className="job-company">{props.company}</h5>
                <h5 className="job-tenure">{props.tenure}</h5>
            </div>
            <div className="job-body">
                <p>
                { parse(props.description) }
                </p>
            </div>
            <hr className="job-divider"></hr>
        </div>
    );
};

export default Job;