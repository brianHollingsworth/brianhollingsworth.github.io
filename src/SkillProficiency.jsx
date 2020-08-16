import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const SkillProficiency = props => {

    const stars = []

    for (var i = 0; i < props.proficiency; i++) {
        stars.push(<FontAwesomeIcon icon={faStar} size='xs'/>)
    }

    return (
        <div id="stars-div">
            {stars}
        </div>
    )
}

export default SkillProficiency;