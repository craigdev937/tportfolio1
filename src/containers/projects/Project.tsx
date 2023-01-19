import React from "react";
import "./Projects.css";
import { TfiGithub } from "react-icons/tfi";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { IProject } from "../../models/Interfaces";

type PRO = {
    project: IProject
};

export const Project = ({project}: PRO): JSX.Element => {
    return (
        <React.Fragment>
            <section className="project">
                <h3>{project.title}</h3>
                <p className="project__description"
                    >{project.description}
                </p>
                <img
                    className="project__img"
                    alt={project.title} 
                    src={project.img} 
                />
                <p className="project__tech"
                    >{project.technology}
                </p>
                <a href={project.link}
                    aria-label="website"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaExternalLinkSquareAlt 
                        className="project__icon" 
                    />
                </a>
                <a href={project.github}
                    aria-label="github"
                    target="_blank"
                    rel="noreferrer"
                >
                    <TfiGithub 
                        className="project__icon" 
                    />
                </a>
            </section>
        </React.Fragment>
    );
};


