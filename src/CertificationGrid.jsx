import React, { Component } from 'react'
import Certifications from './js/Certifications.json'
import './css/Skillset.css'

class CertificationGrid extends Component {
    render () {
        return (
            <div>
                <div className='flex-container'>
                        {Certifications.map((certification)=>{
                        return <div className="cert-container">
                                <img className={certification.Certified ? 'cert-image-certified' : "cert-image-todo"} alt={certification.Name} src={certification.Icon}/>
                                <span className="cert-date">{certification.Date}</span>
                            </div>
                        })}
                </div>
            </div>
        )
    }
}

export default CertificationGrid