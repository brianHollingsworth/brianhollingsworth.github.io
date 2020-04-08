import React from 'react';
import SkillGrid from './SkillGrid'

export default function Skillset(props) {
    return (
        <div id="skillset">
            <h1>Skillset</h1>
            <p>Loosely following the <a href="http://www.bumc.bu.edu/facdev-medicine/files/2012/03/Dreyfus-skill-level.pdf" target="_blank" rel="noopener noreferrer">
                <i>Dreyfus model of skill acquisition</i></a>, I've laid out what I believe to be my top skills into three categories: languages, tools, and operating systems.</p>
            <SkillGrid/>
        </div>
    );
}
