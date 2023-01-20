import React from "react";
import { Navbar } from "./Navbar";
import { Home } from "../containers/home/Home";
import { About } from "../containers/about/About";
import { Skills } from "../components/skills/Skills";
import { Portfolio } from "../containers/projects/Portfolio";
import { Contact } from "../containers/contact/Contact";
import { Footer } from "../components/footer/Footer";

export const Main = (): JSX.Element => {
    const [viewNav, setViewNav] = React.useState(false);
    // const [contactVisible, setContactVisible] = React.useState(false);
    // const myRef = React.useRef<Element | null>(null);
    
    // React.useEffect(() => {
    //     console.log("myRef", myRef.current);
    //     const observer = new IntersectionObserver(
    //         (entries) => {
    //             const entry = entries[0];
    //             console.log("entry", entry);
    //             setContactVisible(entry.isIntersecting);
    //         });
    //         observer.observe(myRef.current!);
    // }, []);

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
        <React.Fragment>
            <Navbar 
                viewNav={viewNav} changeView={changeView}
                closeView={closeView}
            />
            <section className={viewNav 
                ? "app__pages blur" 
                : "app__pages"
            }>
                <React.Fragment>
                    <Home />
                    <About />
                    <Skills />
                    <Portfolio />
                    <Contact />
                </React.Fragment>
            </section>
            <Footer />
        </React.Fragment>
    );
};


