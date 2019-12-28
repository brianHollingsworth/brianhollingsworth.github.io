import React from 'react';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ResumeSection(props) {
    return (
        <NavLink to={props.route} exact style={{color: 'white', textDecoration: 'none'}} activeStyle={{color: '#61dafb', textDecoration: 'none'}}><FontAwesomeIcon icon={props.icon} /></NavLink>
    );
}