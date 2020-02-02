import React, { Component } from 'react'
import LanguagesData from './js/Languages.json'
import ToolsData from './js/Tools.json'
import EnvironmentsData from './js/Environments.json'
import './css/Skillset.css'

class SkillGrid extends Component {
    render () {
        return (
            <div>
                <div className='flex-container'>
                        {LanguagesData.map((languageDetail, index)=>{
                        return <div>
                            <img alt={languageDetail.Name} src={languageDetail.Icon}/>
                            </div>
                        })}
                        <hr></hr>
                        {ToolsData.map((toolDetail, index)=>{
                        return <div>
                            <img alt={toolDetail.Name} src={toolDetail.Icon}/>
                            </div>
                        })}
                        <hr></hr>
                        {EnvironmentsData.map((environmentDetail, index)=>{
                        return <div>
                            <img alt={environmentDetail.Name} src={environmentDetail.Icon}/>
                            </div>
                        })}
                </div>
            </div>
        )
    }
}

export default SkillGrid