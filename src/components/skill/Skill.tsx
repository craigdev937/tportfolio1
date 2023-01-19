import React from "react";
import "./Skill.css";
import { ISkills } from "../../models/Interfaces";

type SKI = {
    skill: ISkills
};

export const Skill = ({skill}: SKI): JSX.Element => {
    return (
        <React.Fragment>
            <div className="skill__container">
                <aside>
                    <skill.icon 
                        className="skill__icon" 
                        fill={skill.color} 
                        aria-hidden="true" 
                    />
                    <p>{skill.text}</p>
                </aside>
            </div>
        </React.Fragment>
    );
};


