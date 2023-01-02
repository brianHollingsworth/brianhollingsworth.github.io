import React, { Component } from 'react'
import Course from './Course';
import CoursesData from './js/Courses.json'

class CourseList extends Component {
    render () {
        return (
            <div style={{ paddingBottom: "2em" }}>
                {CoursesData.map((courseDetail)=>{
                    return <Course key={courseDetail.key} name={courseDetail.Name} semester={courseDetail.Semester} description={courseDetail.Description}/>
                })}
            </div>
        )
    }
}

export default CourseList