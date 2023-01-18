import React from "react";
import "./Navbar.css";
import { motion } from "framer-motion";
import Resume from "@public/cv-cjohnson.pdf";

type NAV = {
    viewNav: boolean,
    changeView: () => void,
    closeView: () => void
};

export const Navbar = 
({viewNav, changeView, closeView}: NAV): JSX.Element => {
    const [navbar, setNavbar] = React.useState(false);
    const [open, setOpen] = React.useState(false);

    const navigate = (): void => {
        setOpen(false);
        closeView();
    };

    const setActive = 
    (event: React.MouseEvent<
        HTMLButtonElement, MouseEvent
    >) => {
        if (!open) {
            setOpen(true);
            changeView();
        } else {
            setOpen(false);
            changeView();
        }
    };

    const changeNavbar = (): void => {
        if (window.scrollY >= 100) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    React.useEffect(() => {
        window.addEventListener("scroll", changeNavbar);
        return () => {
            window.removeEventListener("scroll", changeNavbar);
        };
    }, []);

    return (
        <React.Fragment>
            <motion.header
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 2 }}
                className={navbar ? 
                    "header header__scroll" : 
                    "header"
                }
            >
                <section 
                    className="logo navlist__item" 
                    onClick={navigate}>
                        <a href="#home">CraigDev937</a>
                </section>
                <section className={viewNav ? "nav__links show" 
                    : "nav__links hidden"}>
                    <ul className="navlist">
                        <li 
                            className="navlist__item" 
                            onClick={navigate}
                            ><a href="#about">About</a>
                        </li>
                        <li 
                            className="navlist__item" 
                            onClick={navigate}
                            ><a href="#skills">Skills</a>
                        </li>
                        <li 
                            className="navlist__item" 
                            onClick={navigate}
                            ><a href="#projects">Projects</a>
                        </li>
                        <li 
                            className="navlist__item" 
                            onClick={navigate}
                            ><a href="#contact">Contact</a>
                        </li>
                        <li 
                            className="navlist__item" >
                                <a 
                                    className="high__button"
                                    target="_blank"
                                    rel="noreferrer"
                                    href={Resume}
                                >Resume</a>
                        </li>
                    </ul>
                </section>
                <button className={open 
                    ? "menu__button is-active" 
                    : "menu__button"}
                    onClick={(event) => setActive(event)}>
                        <aside className="menu__box">
                        <aside className="menu__inner"></aside>
                    </aside>
                </button>
            </motion.header>
        </React.Fragment>
    );
};



