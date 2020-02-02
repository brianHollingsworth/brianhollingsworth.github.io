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
                            <img alt={language.Name} src={language.Icon}/>
                            </div>
                        })}
                        <hr></hr>
                        {Tools.map((tool)=>{
                        return <div>
                            <img alt={tool.Name} src={tool.Icon}/>
                            </div>
                        })}
                        <hr></hr>
                        {Environments.map((environment)=>{
                        return <div>
                            <img alt={environment.Name} src={environment.Icon}/>
                            </div>
                        })}
                </div>
            </div>
        )
    }
}

export default SkillGrid