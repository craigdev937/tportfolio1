import React from "react";
import "./App.css";
import { Main } from "../routes/Main";

export const App = (): JSX.Element => {
    return (
        <main className="app">
            <React.Fragment>
                <Main />
            </React.Fragment>
        </main>
    );
};


