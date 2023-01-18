import React from "react";
import "./Footer.css";

export const Footer = (): JSX.Element => {
    return (
        <React.Fragment>
            <section className="footer">
                <h5 className="footer__title">
                    <a 
                        href="https://github.com/craigdev937" 
                        className="footer__link"
                        target="_blank"
                        rel="noreferrer"
                        >Created by Craig Johnson, 2023
                    </a>
                </h5>
            </section>
        </React.Fragment>
    );
};


