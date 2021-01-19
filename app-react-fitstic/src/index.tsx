import React from "react";
import ReactDOM from "react-dom";

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

    let condizioneBooleana = name.length > 2;


    /** Esempio if, else if, else, con variabile di appoggio */
    let testo: string;
    if (name.length >= 5) {
        testo = "caso1";
    }
    else if (name.length >= 1) {
        testo = "caso2";
    }
    else {
        testo = "caso3";
    }

    return <div>
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


    </div>
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