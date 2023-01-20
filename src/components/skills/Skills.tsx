import React from "react";
import "./Skills.css";
import { skills } from "../../data/dBase";

export const Skills = (): JSX.Element => {
    return (
        <React.Fragment>
            <section id="skills" className="app__section">   
                <h1 className="skills__title">Skills</h1>
                <aside className="skills__grid">
                    {skills.map((skill) => (
                        <aside className="skill__flex">
                            <skill.icon 
                                className="skill__icon" 
                                fill={skill.color} 
                                aria-hidden="true" 
                            />
                            <p>{skill.text}</p>
                        </aside>
                    ))}
                </aside>
            </section>
        </React.Fragment>
    );
};


