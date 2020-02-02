import React from 'react';
import './index.css';

const ROBOTS_API = 'https://robohash.org';
const ROBOTS_SIZE = '100x100';

const RobotCard = ({name, type, id, base_experience: experience}) => (
    <div className="robot-card">
        <p className="name">{name}</p>
        <img className="avatar" src={`${ROBOTS_API}/${id}?set=set3&size=${ROBOTS_SIZE}`} alt={name}/>
        <p className="type">Type: {type}</p>
        <p className="exp">EXP: {experience}</p>
    </div>
);

export default RobotCard;