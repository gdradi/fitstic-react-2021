import React, { useEffect, useState } from "react";


const fetchDataFromMyServer = () => {
    // chiamate ajax
    return Promise.resolve([1, 2, 3]);
}


export const HookExample: React.FunctionComponent<{
    readonly date: Date;
}> = (props) => {

    const [listDiNumber, setListaDiNumber] = useState<number[]>(null);


    const fetchDataAndSetState = async () => {
        const data = await fetchDataFromMyServer();
        setListaDiNumber(data);
    };



    /**
     *  DEFINIZIONE GENERALE DELL'HOOK useEffect:
     * 
     *  Ogni volta che una qualsiasi delle variabili all'interno dell'array (secondo parametro) cambia valore
     *    -> esecuzione della callback (primo parametro)
     */


    /** 
     * Caso 1: nessuna variabile nell'array 
     * -> []
     * 
     * comportamento:
     *      - la callback viene chiamata SOLO al primo montaggio del componente. Questo perchè un array vuoto non può cambiare valore
     * 
     * motivo di utilizzo:
     *      - caricamento di dati (es: chiamata ajax) all'avvio dell'app/del componente
     */
    useEffect(() => {
        console.log("useEffect con []");
        fetchDataAndSetState();
    }, []);



    /** 
    * Caso 2: variabili nell'array
    * 
    * comportamento:
    *      - la callback viene chiamata ogni volta che almeno una delle variabili cambia valore
    * 
    * motivo di utilizzo:
    *      - ??
    */
    useEffect(() => {
        console.log("useEffect con [props.date]. Valore ricevuto:", props.date.toLocaleTimeString());
    }, [props.date]);


    return (<>
        <div>Hook example</div>
        <div>{listDiNumber}</div>
        <div>{props.date.toLocaleTimeString()}</div>
        <button onClick={() => {
            fetchDataAndSetState();
            // altro metodo
            // altro metodo ancora
        }}>refresh</button>
    </>
    )
}