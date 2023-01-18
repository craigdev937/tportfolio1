import React from "react";
import { ISkills } from "../../models/Interfaces";

type SKI = {
    skill: ISkills
};

export const Skill = ({skill}: SKI): JSX.Element => {
    return (
        <React.Fragment>
            <skill.icon 
                className="icon" 
                fill={skill.color} 
                aria-hidden="true" 
            />
            <p>{skill.text}</p>
        </React.Fragment>
    );
};


