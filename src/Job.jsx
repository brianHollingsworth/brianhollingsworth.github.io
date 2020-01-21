import React from 'react';
import './css/Job.css';

const Job = props => {
    return (
        <div className="job">
            <div className="job-header">
                <h4>{props.title}</h4>
                <h6>{props.company}</h6>
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur odit, dolores unde atque recusandae expedita dignissimos eum tempora veniam perspiciatis.
            </p>
            <hr></hr>
        </div>
    );
};

export default Job;