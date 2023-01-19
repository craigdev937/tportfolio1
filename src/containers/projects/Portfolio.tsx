import React from "react";
import "./Projects.css";
import { projects } from "../../data/dBase";
import { Project } from "./Project";

export const Portfolio = (): JSX.Element => {
    return (
        <React.Fragment>
            <section id="projects" className="portfolio">
                <h1 className="projects__title">Projects</h1>
                <aside className="projects__grid">
                    {projects.map((project) => (
                        <Project 
                            key={project.id} 
                            project={project} 
                        />
                    ))}
                </aside>
            </section>
        </React.Fragment>
    );
};


