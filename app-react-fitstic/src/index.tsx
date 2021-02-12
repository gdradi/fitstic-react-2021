import React from "react";
import ReactDOM from "react-dom";
import { LiftingStateComponent } from "./components/LiftingStateComponent";

import "./styles/app.css"

import axios from "axios";

/**
 * Componente principale "App"
 */
let App: React.FunctionComponent = () => {

    return <>
        <LiftingStateComponent />
    </>   
}

ReactDOM.render( <App />, document.getElementById('root'));



// try {
//     let response = miaFunzione();
//     console.log(response);
// } catch (error) {
//     console.error(error)
// } finally {
//     console.log("finally");
// }