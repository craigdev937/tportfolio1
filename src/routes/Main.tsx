import React from "react";
import { Navbar } from "./Navbar";
import { Home } from "../containers/home/Home";
import { About } from "../containers/about/About";
import { Projects } from "../containers/projects/Projects";
import { Contact } from "../containers/contact/Contact";

export const Main = (): JSX.Element => {
    const [viewNav, setViewNav] = React.useState(false);

    React.useEffect(() => {
        window.history.scrollRestoration = "manual";
    }, []);

    const changeView = (): void => {
        setViewNav(!viewNav)
    };

    const closeView = (): void => {
        setViewNav(false);
    };
    
    return (
        <main className="main">
            <Navbar 
                viewNav={viewNav} changeView={changeView}
                closeView={closeView}
            />
            <section className={viewNav 
                ? "main__pages blur" 
                : "main__pages"
            }>
                <React.Fragment>
                    <Home />
                    <About />
                    <Projects />
                    <Contact />
                </React.Fragment>
            </section>
        </main>
    );
};


