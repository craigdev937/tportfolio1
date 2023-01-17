import React from "react";
import { Home } from "../containers/home/Home";
import { About } from "../containers/about/About";
import { Projects } from "../containers/projects/Projects";
import { Contact } from "../containers/contact/Contact";

export const Main = (): JSX.Element => {
    return (
        <React.Fragment>
            <Home />
            <About />
            <Projects />
            <Contact />
        </React.Fragment>
    );
};

