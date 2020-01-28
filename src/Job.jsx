import React from 'react';
import './css/Job.css';

const Job = props => {
    return (
        <div className="job">
            <div className="job-header">
                <h4 className="job-title">{props.title}</h4>
                <h5 className="job-company">{props.company}</h5>
                <h5 className="job-tenure">{props.tenure}</h5>
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur odit, dolores unde atque recusandae expedita dignissimos eum tempora veniam perspiciatis.
            </p>
            <hr></hr>
        </div>
    );
};

export default Job;