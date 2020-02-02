import React from 'react';
import RobotCard from "../RobotCard";
import './index.css';

const RobotDex = ({robots, isWinner, experience}) => (
    <div className="robots-dex">
        <div className={`info ${isWinner ? 'info-winner' : 'info-looser'}`}>
            <p>Total Experience: <strong>{experience}</strong></p>
            <p><strong>{isWinner ? 'WINNER!' : 'LOOSER!'}</strong></p>
        </div>
        <div className="robots-list">
            {robots.map(robot => <RobotCard {...robot}/>)}
        </div>
    </div>
);

export default RobotDex;