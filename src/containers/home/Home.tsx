import React from "react";
import "./Home.css";
import { motion } from "framer-motion";

export const Home = (): JSX.Element => {
    return (
        <React.Fragment>
            <section id="home" 
                className="app__section">
                <motion.p
                    className="intro__text"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ 
                        duration: 1, 
                        ease: "easeIn"
                    }}
                >hello, my name is
                </motion.p>
                <motion.h1
                    className="my__name large__head"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ 
                        duration: 1, 
                        ease: "easeIn", 
                        delay: 1
                    }}
                >Craig Johnson
                </motion.h1>
                <motion.h5
                    className="title large__head"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 1, 
                        ease: "easeIn", 
                        delay: 1.2
                    }}
                >I'm a Web Developer.
                </motion.h5>
                <motion.p
                    className="description"
                    >I'm based out of the 
                    Metropolitan New York City area with 
                    a passion for computer technology.
                </motion.p>
            </section>
        </React.Fragment>
    );
};


