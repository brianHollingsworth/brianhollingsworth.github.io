import React, { Component } from 'react'
import Job from './Job';
import JobsData from './js/Jobs.json'

class JobList extends Component {
    render () {
        return (
            <div>
                {JobsData.map((jobDetail)=>{
                    return <Job title={jobDetail.Title} company={jobDetail.Company} tenure={jobDetail.Tenure}/>
                })}
            </div>
        )
    }
}

export default JobList