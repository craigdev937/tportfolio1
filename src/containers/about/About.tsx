import React from "react";
import "./About.css";
import Resume from "@public/cv-cjohnson.pdf";

export const About = (): JSX.Element => {
    return (
        <React.Fragment>
            <section id="about" 
            className="app__section about">
                <h1 className="about__title">About</h1>
                <aside className="about__text">
                    <p>I enjoy building web applications with 
                        clean and beautiful interfaces that provide 
                        a delightful user experience. 
                    </p>
                    <p>I love learning 
                        new technologies and concepts related 
                        to web development. I find delight 
                        in solving problems with clean, simple, 
                        and easy-to-understand code.
                    </p>
                    <p>
                        I am excited to work with and 
                        learn from the experts in the industry, 
                        and continue to grow myself as a developer.
                    </p>
                    <p>
                        In my spare time I enjoy writing 
                        Science Fiction and Fantasy novels.
                    </p>
                </aside>
                <aside className="about__resume">
                    <a  target="_blank"
                        rel="noreferrer"
                        href={Resume}>
                            <button
                                className="about__resume-btn"
                            >Resume</button>
                    </a>
                </aside>
            </section>
        </React.Fragment>
    );
};


