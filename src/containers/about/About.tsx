import React from "react";
import "./About.css";

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
                </aside>
            </section>
        </React.Fragment>
    );
};


