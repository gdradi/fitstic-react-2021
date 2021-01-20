import React from "react";
import ReactDOM from "react-dom";

import "./styles/app.css"


/**
 * Creazione di un componente react di nome "App"
 * 
 * Questo componente visualizza un div con all'interno il testo ciao
 * 
 * Per utilizzare questo componente, la sintassi è <App /> 
 * 
 * <[nome] />   dove [nome] = App
 */
let App: React.FunctionComponent = () => {

    let name = "Giacomo";
    let surname = "Dradi";


    /**
     * 
     * Rendering condizionale
     */

    let condizioneBooleana = name.length > 2;

    /** Esempio if, else if, else, con variabile di appoggio */
    let testo: JSX.Element;
    if (name.length >= 5) {
        /**
         * Per assegnare più di un elemento a una singola variabile, si possono utilizzare
         * due tetniche:
         * 
         * Tecnica 1: 
         * restituire un div unico genitore, con all'interno i due o più elementi che 
         * vogliamo restituire
         */
        // testo = <div>
        //     <div>caso1 div1</div>
        //     <div>caso1 div2</div>
        // </div>;
        /**
         * Tenica 2:
         * restituire un fragment unico con all'interno gli elementi che vogliamo restituire
         * 
         * Il vantaggio di questa tenica è che il fragment NON viene propagato sul DOM
         * 
         * Il fragment può essere scritto in due modi equivalenti
         * 
         * 1. <>...</>
         * 2. <React.Fragment>...</React.Fragment>
         */
        testo = <React.Fragment>
            <div>caso1 div1</div>
            <div>caso1 div2</div>
        </React.Fragment>;
    }
    else if (name.length >= 1) {
        testo = <div>caso1</div>;
    }
    else {
        testo = <div>caso1</div>;
    }



    /**
     * 
     * Rendering di array (ciclico)
     */
    let myArray: string[] = ["elemento1", "elemento1", "elemento3"];
    for (var myString of myArray) {
        console.log(myString);
    }


    return <>
        <div className="box">
            {/* Visualizzazione di variabili */}
            ciao! {name} {surname}

            {/* Rendering condizionale */}
            
            {/* Rendering condizionale utilizzando l'operatore ternario */}

            {/* Primo elemento: condizione booleana (deve essere true o false)*/}
            {condizioneBooleana
                /* Secondo elemento (dopo ?): cosa visualizzo in caso di condizione vera*/
                ? <div>condizione vera con operatore ternario</div>
                /* Terzo elemento (dopo ?): cosa visualizzo in caso di condizione falsa */
                : <div>condizione falsa con operatore ternario</div>
            }

            {/* Secondo tipo di rendering condizionale: operatore && (and)*/}
            {condizioneBooleana && <div>condizione vera con operatore and</div>}
            {!condizioneBooleana && <div>condizione falsa con operatore and</div>}


            {/* Utilizzo di if, else if, else attraverso concatenazione di operatori ternari */}
            {name.length >= 5 ? <div>caso1</div>
            : name.length >= 1 ? <div>caso2</div>
            : <div>caso3</div>
            }

            {/* Utilizzo variabili di appoggio */}
            <div>{testo}</div>


            {/* 
              Visualizzazione di un array tramite rendering ciclico con la funzione map

              Solo per il primo elemento, 
              visualizzazione di una stringa specifica (rendering condizionale)
            */}
            {myArray.map((item, index) => <div key={index}>
                    Elemento alla posizione {index}: {item}
                    {index === 0 && <div>primo elemento</div>}
                </div>
            )}

        </div>
        <div>secondo div</div>
    </>
};

/**
 * Significato di questa riga:
 * 
 * dico a ReactDom di renderizzare il componente <App /> all'interno dell'elemento
 * del dom che ha id = "root" 
 * 
 * Attenzione: nella pagina index.html DEVE esistere un elemento
 * che abbia come id = "root"
 */
ReactDOM.render(<App />, document.getElementById('root'));