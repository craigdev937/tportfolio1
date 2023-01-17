import React from "react";
import "./Main.css";
import { Navbar } from "./Navbar";
import { Home } from "../containers/home/Home";
import { About } from "../containers/about/About";
import { Projects } from "../containers/projects/Projects";
import { Contact } from "../containers/contact/Contact";

export const Main = (): JSX.Element => {
    return (
        <main className="main">
            // Navbar/Header goes here with NavView!
            <Navbar />
            <section className={"navView" ? "main__pages blur" : "main__pages"}>
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

