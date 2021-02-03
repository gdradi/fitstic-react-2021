import React from "react";
import ReactDOM from "react-dom";
import { LiftingStateComponent } from "./components/LiftingStateComponent";

import "./styles/app.css"

/**
 * Componente principale "App"
 */
let App: React.FunctionComponent = () => {

    return <>
        <LiftingStateComponent />
    </>   
}

ReactDOM.render( <App />, document.getElementById('root'));