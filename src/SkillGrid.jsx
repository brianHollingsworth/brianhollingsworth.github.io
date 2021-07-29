import React, { Component } from 'react'
import Languages from './js/Languages.json'
import Frameworks from './js/Frameworks.json'
import Tools from './js/Tools.json'
import Platforms from './js/Platforms.json'
import SkillProficiency from './SkillProficiency'
import './css/Skillset.css'

class SkillGrid extends Component {
    render () {
        return (
            <div>
                <div className='flex-container'>
                        {Languages.map((language)=>{
                        return <div className="skill-container">
                                <img className="skill-image" alt={language.Name} src={language.Icon}/>
                                <div className="skill-overlay">
                                    <div class="text">{language.Name}</div>
                                    <SkillProficiency proficiency={language.Proficiency}/>
                                </div>
                            </div>
                        })}
                        <div className="hr-container">
                            <hr className="skillset-divider"></hr>
                        </div>
                        {Frameworks.map((framework)=>{
                        return <div className="skill-container">
                                <img className="skill-image" alt={framework.Name} src={framework.Icon}/>
                                <div className="skill-overlay">
                                    <div class="text">{framework.Name}</div>
                                    <SkillProficiency proficiency={framework.Proficiency}/>
                                </div>
                            </div>
                        })}
                        <div className="hr-container">
                            <hr className="skillset-divider"></hr>
                        </div>
                        {Tools.map((tool)=>{
                        return <div className="skill-container">
                                <img className="skill-image" alt={tool.Name} src={tool.Icon}/>
                                <div className="skill-overlay">
                                    <div class="text">{tool.Name}</div>
                                    <SkillProficiency proficiency={tool.Proficiency}/>
                                </div>
                            </div>
                        })}
                        <div className="hr-container">
                            <hr className="skillset-divider"></hr>
                        </div>
                        {Platforms.map((platform)=>{
                        return <div className="skill-container">
                                <img className="skill-image" alt={platform.Name} src={platform.Icon}/>
                                <div className="skill-overlay">
                                    <div class="text">{platform.Name}</div>
                                    <SkillProficiency proficiency={platform.Proficiency}/>
                                </div>
                            </div>
                        })}
                </div>
            </div>
        )
    }
}

export default SkillGrid