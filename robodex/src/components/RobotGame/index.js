import React from "react";
import RobotDex from "../RobotDex";

const getRandomRobots = (robots) => {
    const hands1 = [];
    const hands2 = [...robots];

    while(hands1.length < hands2.length) {
        let randomIndex = Math.floor(Math.random() * hands2.length);
        let randomRobot = hands2.splice(randomIndex, 1)[0];
        hands1.push(randomRobot);
    }

    return { hands1, hands2 };
};

const getExperiences = (hands1, hands2) => {
    const exp1 = hands1.reduce((exp, robot) => robot.base_experience + exp, 0 );
    const exp2 = hands2.reduce((exp, robot) => robot.base_experience + exp, 0 );

    return { exp1, exp2 };
};

const RobotGame = ({robots}) => {
    const { hands1, hands2 } = getRandomRobots(robots);
    const { exp1, exp2 } = getExperiences(hands1, hands2);

    return (
        <>
            <RobotDex robots={hands1} experience={exp1} isWinner={exp1 > exp2}/>
            <RobotDex robots={hands2} experience={exp2} isWinner={exp2 > exp1}/>
        </>
    );
};

RobotGame.defaultProps = {
    robots: [
        {id: 4, name: "Charmander", type: "fire", base_experience: 62},
        {id: 7, name: "Squirtle", type: "water", base_experience: 63},
        {id: 11, name: "Metapod", type: "bug", base_experience: 72},
        {id: 12, name: "Butterfree", type: "flying", base_experience: 178},
        {id: 25, name: "Pikachu", type: "electric", base_experience: 112},
        {id: 39, name: "Jigglypuff", type: "normal", base_experience: 95},
        {id: 94, name: "Gengar", type: "poison", base_experience: 225},
        {id: 133, name: "Eevee", type: "normal", base_experience: 65}
    ]
};

export default RobotGame;
