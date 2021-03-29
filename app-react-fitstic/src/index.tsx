import React, { Component, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { LiftingStateComponent } from "./components/LiftingStateComponent";
import {HookExample } from "./components/esempi/Hook";
import "./styles/app.css"


/**
 * Componente principale "App"
 */
let App: React.FunctionComponent = () => {

    const [date, setDate] = useState<Date>(new Date());

    const object = {
        prop1: 1,
        prop2: 2
    };

    useEffect(() => {
        setInterval(() => {
            console.log("[App] setDate()")
            setDate(new Date());
        }, 2000);
    }, []);


    return <>

    <HookExample date={date} />

        {/* <LiftingStateComponent />

        <Componente {...object} /> */}

    </>   
}



const Componente: React.FunctionComponent<{
    prop1: number;
    prop2: number;
}> = (prop) => {

    return <>ciao</>;
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