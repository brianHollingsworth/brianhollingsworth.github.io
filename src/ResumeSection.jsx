import React from 'react';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ResumeSection(props) {
    return (
        <li>
            <NavLink to={props.route} exact style={{color: '#6e7179', textDecoration: 'none'}} activeStyle={{color: 'white', textDecoration: 'none', borderLeft: 'solid white 0.15em', paddingLeft: '0.85em'}}><FontAwesomeIcon icon={props.icon} /></NavLink>
        </li>
    );
}