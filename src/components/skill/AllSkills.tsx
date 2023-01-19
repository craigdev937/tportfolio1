import React from "react";
import "./Skill.css";
import { Skill } from "./Skill";
import { skills } from "../../data/dBase";

export const AllSkills = (): JSX.Element => {
    return (
        <React.Fragment>
            <section 
                id="skills" 
                className="app__section skills"
            >
                {skills.map((skill) => (
                    <Skill 
                        key={skill.id} 
                        skill={skill} 
                    />      
                ))}
            </section>
        </React.Fragment>
    );
};

