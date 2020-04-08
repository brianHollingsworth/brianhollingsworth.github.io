import React, { Component } from 'react'
import Languages from './js/Languages.json'
import Tools from './js/Tools.json'
import Environments from './js/Environments.json'
import './css/Skillset.css'

class SkillGrid extends Component {
    render () {
        return (
            <div>
                <div className='flex-container'>
                        {Languages.map((language)=>{
                        return <div>
                            <img className="skill-image" alt={language.Name} src={language.Icon}/>
                            </div>
                        })}
                        <div className="hr-container">
                            <hr className="skillset-divider"></hr>
                        </div>
                        {Tools.map((tool)=>{
                        return <div>
                            <img className="skill-image" alt={tool.Name} src={tool.Icon}/>
                            </div>
                        })}
                        <div className="hr-container">
                            <hr className="skillset-divider"></hr>
                        </div>
                        {Environments.map((environment)=>{
                        return <div>
                            <img className="skill-image" alt={environment.Name} src={environment.Icon}/>
                            </div>
                        })}
                </div>
            </div>
        )
    }
}

export default SkillGrid