import React from 'react';
import parse from 'html-react-parser';
import './css/OMSCS.css';

const Course = props => {
    return (
        <div className="course">
            <div className="course-header">
                <h4 className="course-name">{props.name}</h4>
                <h5 className="course-semester">{props.semester}</h5>
            </div>
            <div className="course-body">
                <p>
                { parse(props.description) }
                </p>
            </div>
            <hr className="course-divider"></hr>
        </div>
    );
};

export default Course;